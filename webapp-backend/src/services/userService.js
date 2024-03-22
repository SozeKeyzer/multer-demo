import bcrypt from 'bcrypt'
import userModel from '../model/userModel.js';
import jwt from 'jsonwebtoken';

export const signup = async (body) =>{
    try{
        const user = await userModel.findOne({
            email : body.email
        });
        if(user){
            return {
                message : 'user already exists'
            }
        }
        else{
            const password = body.password;
            const salt = await bcrypt.genSalt(10);
            body.password = await bcrypt.hash(password,salt);
            const data = userModel.create(body);
            return {
                message : 'user created'
            };
        }
    }
    catch(error){
        console.log(error);
    }
}

export const login = async (body) =>{
    try{
        const user = await userModel.findOne({
            email : body.email
        });
        if(user){
            const pass = await bcrypt.compare(body.password,user.password);
            if(pass){
                const token = jwt.sign({
                    id : user._id,
                    email : user.email
                },process.env.SECRET_KEY);
                return {token : token}
            }
            else{
                return {
                    message : 'password is incorrect'
                }
            }
        }
        else{
            return {
                message : 'user does not exist please sign up'
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

export const upload = () =>{
    try{

    }
    catch(error){
        console.log(error);
    }
}