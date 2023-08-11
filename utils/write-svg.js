//this will handle file IO, saving the completed svg file
import fs from 'fs' 

export const writeSVG = (dataToWrite, logoText) => {
    console.log(dataToWrite)

    fs.writeFile(`./dist/${logoText}Logo.svg`, dataToWrite, err => {
        if (err){
            throw err
        }
        
        console.log(`Generated ${logoText}Logo.svg!`)
    })
 
}