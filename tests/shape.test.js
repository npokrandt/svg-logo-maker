const Shape = require('../lib/shape')

//some tests for the parent shape class
describe('Shape Class', () => {
    it('throws an error when render is called directly', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const shape = new Shape(color, text, textColor)
        const shapeRender = () => shape.render()
        expect(shapeRender).toThrow(new Error('Child class must implement render() method.'))
    })
    it('renders the text properly when the addText function is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const testXML = '<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">BRS</text>'

        const shape = new Shape(color, text, textColor)
        const shapeAddText =  shape.addText()
        expect(shapeAddText).toBe(testXML)
    })
})