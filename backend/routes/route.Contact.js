import express from "express";
import Contact from "../models/model.Contact.js";

const router = express.Router();

// save contact form data
router.post("/", async (req, res) => {
    try {
        const { name, email, number, message } = req.body;

        if (!name || !email || !number || !message) {
            return res.status(400).json({ error: "All fields are required "});
        }

        const newContact = new Contact({ name, email, number, message });
        await newContact.save();

        res.status(201).json({ success: true, data: newContact });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});




export default router;
