import mongoose from 'mongoose'

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://maliksaalim14:msw2002@cluster0.nyn8ith.mongodb.net/Zwigato')
    .then(() => console.log('DB connected'));
}
