import Shape from './shape.js'

//the triangle class
export default class Triangle extends Shape {
    constructor(color, text, textColor){
        super(color, text, textColor)
    }

    //triangle has different height and fs of text
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

    //add different text rendering to match the logo better
    addText(){
        return `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}