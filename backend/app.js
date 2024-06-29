import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();



app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  credentials: true,
  methods:["POST"],
}));
app.use(express.urlencoded({ extended: true }));
app.options('*', cors()); // Preflight all routes

app.use("/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

app.listen(3000, ()=>{
  console.log(`SERVER HAS STARTED AT PORT 3000`);
})

export default app;
