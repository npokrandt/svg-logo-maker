//this file holds the XML and builds it based on what is sent from inquirer

export const generateSVG = (shape) => {

    const shapeXML = shape.render()

    const textXML = shape.addText()

    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${shapeXML}
    
        ${textXML}

    </svg>`
}

