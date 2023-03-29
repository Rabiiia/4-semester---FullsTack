import { Request, Response } from "express";
import logger from "../utility/logger";
import Car from "../models/carModel"




export const getAllCars = async (req: Request, res: Response) => {
try {

    const data = await Car.find();

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


export const createCar =  async (req: Request, res: Response) => {
    try {
        
        const newCar = await Car.create(req.body);

        res.status(201)
            .json({
                status: 'success',
                data: { 
                    car: newCar
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


    export const getCarById =  async (req: Request, res: Response) => {
        try {
            
         const car = await Car.findById(req.params.id);

        //     //get users on specific car as well; embedded operation
        //     const car = await Car.findById(req.params.id).populate({
        //       path: "users",
        //       select: '-__v -createdAt' //in case to ignore specific keys in reponse
        // }).select('-__v -createdAt');

            res.status(200)
                .json({
                    status: 'success',
                    data: {car, }
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


        
export const updateCarById =  async (req: Request, res: Response) => {
    try {
       
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //if not uses then old objected
            runValidators: true, //checks max and length and so on.
        } );

        res.status(204)
            .json({
                status: 'success',
                data: {car, }
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

    export const deleteCarById =  async (req: Request, res: Response) => {
        try {
           
             await Car.findByIdAndDelete(req.params.id) ;
    
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