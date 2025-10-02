import express from "express";
import Contact from "../models/model.Contact.js";

const router = express.Router();

// save contact form data
router.post("/", async (req, res) => {
    console.log("Form Data Received:", req.body);
    try {
        const { name, email, number, message } = req.body;

        if (!name || !email || !number || !message) {
            return res.status(400).json({ error: "All fields are required "});
        }

        const newContact = new Contact({ name, email, number, message });
        const saved = await newContact.save();
        console.log('Saved contact:', saved);
        

        res.status(201).json({ success: true, data: saved });
    } catch (err) {
        console.error("Error saving contact:", err);
        res.status(500).json({ error: err.message || "Server error" });
    }
});




export default router;
