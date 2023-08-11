//parent class
export default class Shape {
    //all shapes will have a fill color, text, and a text color
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    //borrowed from a mini-project we did
    render (){
        throw new Error('Child class must implement render() method.')
    }

    addText(){
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
