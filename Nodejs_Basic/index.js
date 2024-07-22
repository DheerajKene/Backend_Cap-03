//required libraries is imported here.

const fs = require('fs')  //FileSystem
const os = require('os')  //opearating system

const currnet_dir = os.tmpdir()
console.log(currnet_dir)
const operation = process.argv[2]; //this variable is for operation to be performed.
const argument1 = process.argv[3]; //this variable is for argument1.
const argument2 = process.argv[4]  //this variable is for argument2.

//operation performed here as per the conditions.

if(operation == 'read'){
    
    //this readFile method is for reading the contents in the file which is passed as an argument.
    //To perform this operation the command will be : node index.js read test.txt

    fs.readFile(`${argument1}`,'utf-8',(data,err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`The contents of the file :${data}`)
        }
    })
}else if(operation == 'append'){

    //this appendFile method is for appending the contents in the new line in the file which is passed as an argument.
     //To perform this operation the command will be : node index.js append "new content" test.txt

    fs.appendFile(`${argument2}`,`\n ${argument1}`,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Content appended to the file test.txt');
        }
    })
}else if(operation == 'delete'){

    //this unlink method is for delete the existing file which is passed as an argument.
    //To perform this operation the command will be : node index.js delete test.txt

    fs.unlink(`${argument1}`,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File 'test.txt' deleted");
        }
    })
} else if(operation == 'create'){

    //this writeFile method is for creating the new file (Contents in the file is optional) which is passed as an argument.
    //To perform this operation the command will be : node index.js create test.txt

    fs.writeFile(`${argument1}`,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log( "File 'test.txt' created");
        }
    })
} else if(operation == 'rename'){

    //this rename method is for rename the existing file with the new title which is passed as an argument.
    //To perform this operation the command will be : node index.js rename test.txt new.txt

    fs.rename(`${argument1}`,`${argument2}`,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log( "File 'test.txt' renamed to 'new.txt'");
        }
    })
} else if(operation == 'list'){
    fs.readdir('./Nodejs_Basic','utf-8',(data, err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data)
            console.log( `A list of all files and directories in the current directory: ${data}`);
        }
    })
}else{
    console.log(`Invalid operation '${operation}'`);
}

