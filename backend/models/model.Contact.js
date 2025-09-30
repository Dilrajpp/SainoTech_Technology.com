import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    number: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);   // exactly 10 digit
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });


const Contact = mongoose.model("Contact", contactSchema);

export default Contact;