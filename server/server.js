import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// CORS Middleware
const allowedOrigins = [
  "https://zc-aadhar13-frontend.onrender.com",
  "https://aadhar13.vercel.app",
  "https://aadhar.poornima.org",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema and Model
const registrationSchema = new mongoose.Schema({
  event: String,
  college: String,
  teamName: String,
  leaderName: String,
  leaderContact: String,
  leaderEmail: String,
  teamSize: String,
  teamMembers: [String],
  transactionId: String,
});

const Registration = mongoose.model("Registration", registrationSchema);

// API Route to Save Data
app.post("/register", async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send({ message: "Registration saved successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to save registration" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
