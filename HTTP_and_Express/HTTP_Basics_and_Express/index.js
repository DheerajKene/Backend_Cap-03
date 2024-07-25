//All required libraries have imported here.

const express = require('express');
const fs = require('fs');


const server = express();
const Port = 3003;       //port no.


server.use(express.json())  //middleware to fetch the data from body.


//An API to get all the todos present in the database.
server.get('/userData', (req, res)=>{
    let userData = fs.readFileSync('./db.json','utf-8')
    res.send(`User Data: ${userData}`);
});


//An API to add a new todo in the database.
server.post('/AddUserData', (req, res)=>{
    let incoming_Data = req.body;
    res.send(`Data received successfully ${incoming_Data}`)
    console.log(incoming_Data);

    let UserData = JSON.parse(fs.readFileSync('./db.json','utf-8'));
    // console.log(UserData);

    UserData.todos.push(incoming_Data);
    fs.writeFileSync('./db.json', JSON.stringify(UserData), 'utf-8');
    // console.log('after pushing',UserData)
});




//An API to update the status of all the todos that have even ID from false to true. This will work only if the todo with even 
//ID has a status as false.

server.put('/Update', (req, res)=>{
    let todos = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    todos.forEach((el)=> {
        if(el.id % 2 === 0 && el.Status === 'false'){
            el.Status = 'true';
        }
    });
    fs.writeFileSync('./db.json', JSON.stringify(todos), 'utf-8')
    console.log('todos', todos);
    res.send('the status of the todos as per the id is updated');
});



//An API to Delete all the todos whose status is true.
server.delete('/delete', (req, res)=>{
    let todos = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    todos = todos.filter((el)=> el.Status != 'true');
            
    fs.writeFileSync('./db.json', JSON.stringify(todos), 'utf-8')
    console.log('todos', todos);
    res.send('Data is updated as per the status');
});

server.listen(Port, ()=>{
    console.log("Server is Started");
})