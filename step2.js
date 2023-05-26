const fs = require ('fs')
axios = require('axios')

function cat (path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.log("Ooops something went wrong", err)
        }
        console.log(data)
    })
}

async function webCat (url){
    try{
   resp = await axios.get(url)

   console.log(resp)}

   catch (err){
    console.log('oops something went wrong', err)
   }
}




const argv = process.argv

if (argv[2].includes('http')){
    webCat(argv[2])
}
else{
    cat(argv[2])
}

