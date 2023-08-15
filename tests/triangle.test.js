import Triangle from '../lib/triangle.js'

//some tests for the triangle class
describe('Triangle Class', () => {
    it('renders correctly when render() is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const triangleXML = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`

        const triangle = new Triangle(color, text, textColor)

        const triangleRender = triangle.render()

        expect(triangleRender).toBe(triangleXML)

    })
    //test that child shapes can render text with the parent's function
    it('renders the text properly when the addText function is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const testXML = '<text x="150" y="140" font-size="50" text-anchor="middle" fill="white">BRS</text>'
        const triangle = new Triangle(color, text, textColor)
        const triangleAddText = triangle.addText()
        expect(triangleAddText).toBe(testXML)
    })
}
)