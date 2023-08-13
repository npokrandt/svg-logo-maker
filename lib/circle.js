import Shape from './shape.js'

//the circle class
export default class Circle extends Shape {
    constructor(color, text, textColor){
        super(color, text, textColor)
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}