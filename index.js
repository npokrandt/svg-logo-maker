// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

import { allShapes } from './lib/index.js'
import inquirer from 'inquirer'
import { generateSVG } from './utils/generate-svg.js'
import { writeSVG } from './utils/write-svg.js'

const {Circle, Triangle, Rectangle} = allShapes 

const testCircle = new Rectangle('green','BRS', 'white')
console.log(testCircle)

//the user will send the command to run inquirer
    //they will be prompted for the up to 3 characters of text
    //they will be prompted for the text color (default white)
    //they will be prompted for a shape out of a list of the 3 shapes
    //they will be prompted for the color of the shape
    //once this is all assembled:
        //the shape is instantiated
        //the svg file string literal is completed
        //the file is save to the dist folder

    //it should be as the user entered it!    
