const Contact = require("../models/Contact");

exports.addContactDeatils = async(req,res) => {
    try {
        
        
        const contactDeatils = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await contactDeatils.save();
        res.status(200).json({ success: true, message: "record added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}