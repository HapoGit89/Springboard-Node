const fs = require('fs')
axios = require('axios')

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log("Ooops something went wrong", err)
        }
        if (argv[2]== '--out'){
            writeToFile(data, argv[3])

        }
        else{
        console.log(data)
        }        
    })
}

async function webCat(url) {
    if (argv[2] == '--out') { 
        try {
        resp = await axios.get(url)

        writeToFile(resp.data, argv[3])
        }

        catch (err) {
            console.log('oops something went wrong', err)
        }}

    else {
    try {
        resp = await axios.get(url)

        console.log(resp.data)
    }

    catch (err) {
        console.log('oops something went wrong', err)
    }
}
}



function writeToFile(data, path){
    fs.writeFile(path, data, 'utf8', function (err) {
        if (err) {
            console.log("something went wrong while writing", err)
            process.exit(1)
        }
        console.log("Written to file sucess")

    })
}





//----------------------------------


const argv = process.argv

if (argv[2] != '--out') {
    if (argv[2].includes('http')) {
        webCat(argv[2])
    }
    else {
        cat(argv[2])
    }
}

else {
    if (argv[4].includes('http')) {
        webCat(argv[4])
    }
    else {
        cat(argv[4])
    }
}