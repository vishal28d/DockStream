import express from "express"
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";


export const foodRouter = express.Router();

//Image storage engine using MULTER

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()} ${file.originalname}`);
    }
})
const upload = multer({
    storage: storage
})


foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);