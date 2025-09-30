import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/route.Contact.js";


dotenv.config();


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/contact", contactRoutes);


// MongoDb Connection
// sainotech_technology
// sStgaEBfhRJnNpkY
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


//    Backend Connection
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

