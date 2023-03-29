import mongoose from "mongoose";
import User from '../models/userModel'
//

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, "A car has to have a model"],
        trim: true,
        maxLength: [20, "A car must have less or equal 20 chars"],
        minLength: [2, "A car must have more or equal than 2 chars"]
    },
    year: Number,
    price: {type: Number, required: true},
    color: {
        type: String,
        enum: ['red', 'blue', 'green', 'black', 'white'],
        message: 'Color is either: red, blue'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false //does not show response
    },
    //users: Array, //embedded owners in car
}, {
    toJSON: {
        virtuals:true
    },
    toObject: {
        virtuals:true
    },
})

//embedded because of this middleware. Only invoked when creating an object
// carSchema.pre('save', async function(next) {
//     const usersPromises = this.users.map(id => User.findById(id));
//     this.users = await Promise.all(usersPromises);
//     next();
// })

 //get users on all find operations as well; embedded operation
// carSchema.pre(/^find/, function(){
//             this.populate({
//                 path: "users",
//                 select: '-__v -createdAt', //in case to ignore specific keys in reponse
//             })      
//         })

//made virtual with toJson and toObject
carSchema.virtual('discount').get(function(){
    
 // if(this.price) {  //typescript issue
    return this.price * 0.25;
 // }
})

const Car = mongoose.model('Car', carSchema);

export default Car;