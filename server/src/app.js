import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

const app = express();

// config helmet
app.use(
  helmet({
    xPoweredBy: false,
  })
);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// express config
app.use(express.json());
app.use(cookieParser());

// import routes
import { permitRouter } from "./routes/permit.routes.js"

// // routes declaration
app.use("/api/v1/permits", permitRouter);

// error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export { app };
