import { userModel } from "../models/userModel.js"

//add items to users cart
export const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findOne({_id:req.body.userId});
        const cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]  = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: 'Added to Cart'});

    } catch (error) {
        console.log(error);
        res.json({success: false, message:"error"});
    }
}

//remove items from users cart
export const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findOne({_id:req.body.userId});
        const cartData = await userData.cartData;

        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Removed From Cart"});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error"});
    }
}

//get items from users cart
export const getCart = async (req, res) => {
    try {
        const userData = await userModel.findOne({_id:req.body.userId});
        const cartData = await userData.cartData;
        res.json({success: true, cartData});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error"});
    }
}