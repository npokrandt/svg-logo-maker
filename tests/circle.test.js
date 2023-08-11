//will test that the circle renders correctly
const Circle = require('../lib/circle')

describe('Circle Class', () => {
    it('renders correctly when render() is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const circleXML = `<circle cx="150" cy="100" r="80" fill="green" />`

        const circle = new Circle(color, text, textColor)

        const circleRender = circle.render()

        expect(circleRender).toBe(circleXML)

        // return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    })
    //test that child shapes can render text with the parent's function
    it('renders the text properly when the addText function is called', () => {
        const color = 'green'
        const text = 'BRS'
        const textColor = 'white'

        const testXML = '<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">BRS</text>'
        const circle = new Circle(color, text, textColor)
        const circleAddText = circle.addText()
        expect(circleAddText).toBe(testXML)
    })
}
)

