import express from 'express'
import {config} from 'dotenv'

import connectDB from './src/service/DBconnection.js'
import cookieParser from 'cookie-parser'
import authRouter from './src/routes/auth.routes.js'
import userRouter from './src/routes/user.routes.js'
import cors from 'cors'
import { geminiResponse } from './src/service/GeminiRespose.js'

const app = express()
config({ path: ".env" });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(cookieParser()) 


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Backend is working fine." });
});


app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})