import client from './database.js';
import {update,deleteid} from './queries.js';
client.connect();

const getUsers = (req,res) => {
    console.log("getting students");
    client.query("SELECT * FROM users", (error,result)=> {
        if(!error)
            res.status(200).json(result.rows);
        else
            console.error('Error fetching users:', error);

    });
}

const getUserById = (req,res) => {
    console.log("getting user by id");
    const num = parseInt(req.params.id);
    client.query(`select * from users where userid = ${num}`,(error,result)=> {
        if(!error)
            res.status(200).json(result.rows);
        else
            console.error('Error fetching users:', error);}
        );
}

const addUser = (req,res)=>{
    const {userid,uname} = req.body;
    console.log(req.body);
    client.query('insert into users (userid,uname) values ($1,$2)',[userid,uname],(error,result) => {
        if(!error)
            res.status(200).send('added user succesfully');
        else
            console.error('Error adding users', error);}
        );
};

const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const {uname} = req.body;
    client.query(update,[uname,id],(error,result) => {
        if(!error)
            res.status(200).send('updated user succesfully');
        else
            console.error('Error updating user', error);}
        );
}

const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id);
    client.query(deleteid,[id],(error,result) => {
        if(!error)
            res.status(200).send('deleted user succesfully');
        else
            console.error('Error deleting user', error);}
        );
}

export {getUsers , getUserById, addUser,updateUser, deleteUser};