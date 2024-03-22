import * as userService from '../services/userService.js';

export const signup = async (req,res) =>{
    try{
        const data = await userService.signup(req.body);
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
    }
}

export const login = async (req,res) =>{
    try{
        const data = await userService.login(req.body);
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
    }
}

export const upload = (req,res) =>{
    try{
        res.json({
            working : 'working'
        });
    }
    catch(error){
        console.log(error);
    }
}