const Rectangle = require('../lib/rectangle')

//some tests for the rectangle class
describe('Rectangle Class', () => {
    it('renders correctly when render() is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const rectXML = `<rect x="50" y="35" width="200" height="130" fill="green" />`

        const rectangle = new Rectangle(color, text, textColor)

        const rectRender = rectangle.render()

        expect(rectRender).toBe(rectXML)

    })
    //test that child shapes can render text with the parent's function
    it('renders the text properly when the addText function is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const testXML = '<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">BRS</text>'
        const rectangle = new Rectangle(color, text, textColor)
        const rectAddText = rectangle.addText()
        expect(rectAddText).toBe(testXML)
    })
}
)