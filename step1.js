const fs = require ('fs')

function cat (path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.log("Ooops something went wrong", err)
        }
        console.log(data)
    })
}

const argv = process.argv

cat(argv[2])