const mongoose = require('mongoose')

const siswaSchema = new  mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isi namamu yaa'],
        unique: true
    },
    NIS: {
        type: String,
        required: [true, 'Isi NISmu yaa'],
        unique: true
    },
    hobi: {
        type: String,
        required: [true, 'Isi hobimu yaa'],
        unique: true
    },
    alamat: {
        type: String,
        required: [true, 'Isi alamatmu yaa'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Isi namamu yaa'],
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Isi emailmu yaa']
    },
    
})

module.exports = mongoose.model('Siswa', siswaSchema)