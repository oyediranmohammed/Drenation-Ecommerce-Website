import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth/auth-routes.js'



dotenv.config(); // load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",

    ],
    credentials: true,
  })
);

app.use('/api/auth', authRouter)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('✅ MongoDB connected');
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Starting the server
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));


