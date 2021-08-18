const fs = require('fs')


// read files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err){
        console.log(err)
    }

    console.log(data.toString())
})


// write files
fs.writeFile('./docs/blog1.txt', "check me out", () => {
    console.log('file was written')
})


// directories

// if no existing assets folder make one
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err){
        console.log(err)
    }

    console.log('folder created!')
}) 
}
else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err)
        }

        console.log('folder deleted')
    })
}


// delete files
if (fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file deleted')
    })
}