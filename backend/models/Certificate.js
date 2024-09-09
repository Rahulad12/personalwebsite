const mongoose= require('mongoose');

const CertificateSchema = new mongoose.Schema({
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        }
})

const Certificate = mongoose.model("Certifications",CertificateSchema);
module.exports = Certificate;