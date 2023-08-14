import { allShapes } from './lib/index.js'
import inquirer from 'inquirer'
import validateColor from 'validate-color'
import { generateSVG } from './utils/generate-svg.js'
import { writeSVG } from './utils/write-svg.js'

const {Circle, Triangle, Rectangle} = allShapes   

const valColor = validateColor.validateHTMLColorName
const valColorHex = validateColor.validateHTMLColorHex

const questions = [

    {
        type: 'input',
        name: 'text',
        message: 'What characters would you like in your logo (up to 3 characters)?',
        default: 'BRS',
        validate: input => {
            if (input.length > 3){
                console.log('\n too long! Text must be less than 4 characters!')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be (color name or hexadecimal)?',
        default: 'white',
        validate: input => {
            if (valColor(input) || valColorHex(input)){
                return true
            } else {
                console.log('\n Not a valid color')
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Rectangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be (color name or hexadecimal)?',
        default: 'green',
        validate: input => {
            if (valColor(input) || valColorHex(input)){
                return true
            } else {
                console.log('\n Not a valid color')
            }
        }
    }
]

//starts the code
const init = () => {

    inquirer.prompt(questions)
    .then((answers) => {
        var shape = getShape(answers)
        const SVG = generateSVG(shape)
        writeSVG(SVG, shape.text)
    })
    .catch((err) => {
        console.log(err)
    })

}

const getShape = (criteria) => {
    const color = criteria.shapeColor
    const text = criteria.text
    const textColor = criteria.textColor
    switch(criteria.shape){
        case 'Circle':
            return new Circle(color, text, textColor) 
        case 'Triangle':
            return new Triangle(color, text, textColor) 
        case 'Rectangle':
            return new Rectangle(color, text, textColor)     
    }
}

init()

