const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    message : {type : String, required : true},
});

const Contact = mongoose.model("contacts",ContactSchema);
module.exports = Contact;