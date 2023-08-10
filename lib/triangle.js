const Shape = require('./shape')

class Triangle extends Shape {
    constructor(color, text, textColor){
        super(color, text, textColor)
    }

    //triangle has different height and fs of text
    render(){

    }
}

module.exports = Triangle