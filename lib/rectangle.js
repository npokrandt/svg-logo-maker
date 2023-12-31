import Shape from './shape.js'

//the rectangle class
export default class Rectangle extends Shape {
    constructor(color, text, textColor){
        super(color, text, textColor)
    }

    render(){
        return `<rect x="50" y="35" width="200" height="130" fill="${this.color}" />`
    }
}
