import { Request, Response } from "express";
import logger from "../utility/logger";
import User from "../models/userModel"




export const getAllUsers = async (req: Request, res: Response) => {
try {

    const data = await User.find();

    res.status(200)
        .json({
            status: 'success',
            results: data.length,
            data: {
                data,
            },
        });
} catch(err) {
    logger.debug('Error: ' + err);
    res.status(400)
        .json({
            status:'fail',
            message: err,
        });
    }
   
};


export const createUser =  async (req: Request, res: Response) => {
    try {
        
        const newUser = await User.create(req.body);

        res.status(201)
            .json({
                status: 'success',
                data: { 
                    user: newUser
                }
            });
    } catch(err) {
        logger.debug("Error: " + err)
        res.status(400)
            .json({
                status:'fail',
                message: err,
            });
        }
       
    };


    export const getUserById =  async (req: Request, res: Response) => {
        try {
            
            const user = await User.findById(req.params.id);

            res.status(200)
                .json({
                    status: 'success',
                    data: {user, }
             });
        } catch(err) {
            logger.debug("Error: ", err)
            res.status(404)
                .json({
                    status:'fail',
                    message: err,
                });
            }
           
        }


        
export const updateUserById =  async (req: Request, res: Response) => {
    try {
       
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //if not uses then old objected
            runValidators: true, //checks max and length and so on.
        } );

        res.status(204)
            .json({
                status: 'success',
                data: {user, }
            });
    } catch(err) {
        logger.debug("Error: " + err)
        res.status(404)
            .json({
                status:'fail',
                message: err,
            });
        }
       
    };

    export const deleteUserById =  async (req: Request, res: Response) => {
        try {
           
             await User.findByIdAndDelete(req.params.id) ;
    
            res.status(204)
                .json({
                    status: 'success',
                    data: null,
                });
        } catch(err) {
            logger.debug("Error: " + err)
            res.status(404)
                .json({
                    status:'fail',
                    message: err,
                });
            }
           
        };