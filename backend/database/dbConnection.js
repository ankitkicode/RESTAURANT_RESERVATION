import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017/Restaurant-Mern-App',
     {       useNewUrlParser: true,
      useUnifiedTopology: true,})
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
