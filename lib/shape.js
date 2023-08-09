//parent class
class Shape {
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    //borrowed from a mini-project we did
    render (){
        throw new Error('Child class must implement render() method.')
    }
}

module.exports = Shape

//all shapes will have a fill color, text, and a text color

//each individual shape will have dimensions

//I (the dev) determine the size and dimensions of the shapes and their text

//the user only determines which shape, colors and the up-to-3-character text