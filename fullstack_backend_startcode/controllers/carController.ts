import { Request, Response } from "express";
import logger from "../utility/logger";
import fs from "fs"

type Car = {
    id: string,
    model: string,
    year: number
    price: number,
    color: string

    [key: string]: any; // keys are string typescript
}


const cars: Car[] = [

    {
        "id": "1",
        "model": "Audi",
        "year": 2010,
        "price": 10000,
        "color": "red"
      },
      {
        "id": "2",
        "model": "Volvo",
        "year": 2012,
        "price": 12000,
        "color": "blue"
      },
      {
        "id": "3",
        "model": "Saab",
        "year": 2001,
        "price": 5000,
        "color": "green"
      },
      {
        "id": "4",
        "model": "BMW",
        "year": 2015,
        "price": 15000,
        "color": "black"
      },
      {
        "id": "5",
        "model": "Mercedes",
        "year": 2017,
        "price": 20000,
        "color": "red"
      }
]


//const data = fs.readFileSync(`${__dirname}\\dev-data\\data.json`, 'utf-8');

export const getAllCars =  (req: Request, res: Response) => {
try {

    const data = cars;
    
    res.status(200)
    // .header({
    //     "content-type": "application/json",
    //     "content-length": data.length, 
    //  })
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


export const createCar =   (req: Request, res: Response) => {
    try {
        const newCar = req.body;
        newCar.id = cars.length +1;
        cars.push(newCar);

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


    export const getCarById =   (req: Request, res: Response) => {
        try {
            
            const id = req.params.id;
            const car = cars[parseInt(id)];
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


        
export const updateCar =   (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const car = cars[parseInt(id)];
        const carPatch = req.body;

        const objKeys = Object.keys(carPatch);

        objKeys.forEach((key: string) => {
            car[key] = carPatch[key];
        })

        res.status(200)
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