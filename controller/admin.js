const User =  require('../model/User');
const Hospital = require('../model/Hospital');
const Doctor = require('../model/Doctor');
const Lab = require('../model/Lab');
const bcrypt = require('bcryptjs'); 


exports.newUser = async (req, res, next) => {
    const {
        fullName,
        email,
        phoneNumber,
        password
    } = req.body;
    const emailExist = await User.findOne({email});
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash Passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const result = await User.create({ 
            fullName,
            email,
            phoneNumber,
            password: hashPassword
        });
        
        res.status(200).send(result);
    }
    catch(err) {
        res.status(400).send(err);
    }
}

exports.newHospital = async (req, res, next) => {
    const {
        name,
        email,
        phoneNumber,
        password,
        services
    } = req.body;
    const emailExist = await Hospital.findOne({email});
    if(emailExist) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const result = await Hospital.create({ 
            name,
            email,
            phoneNumber,
            password: hashPassword,
            services
        });
        
        res.status(200).send(result);
    }
    catch(err) {
        res.status(400).send(err);
    }
}

exports.newDoctor = async (req, res, next) => {
    const {
        fullName,
        email,
        phoneNumber,
        password,
        appointment
    } = req.body;
    const emailExist = await Doctor.findOne({email});
    if(emailExist) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const result = await Doctor.create({ 
            fullName,
            email,
            phoneNumber,
            password: hashPassword,
            appointment
        });
        
        res.status(200).send(result);
    }
    catch(err) {
        res.status(400).send(err);
    }
}

exports.newLab = async (req, res, next) => {
    const {
        name,
        email,
        phoneNumber,
        password,
        services
    } = req.body;
    const emailExist = await Lab.findOne({email});
    if(emailExist) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const result = await Lab.create({ 
            name,
            email,
            phoneNumber,
            password: hashPassword,
            services
        });
        
        res.status(200).send(result);
    }
    catch(err) {
        res.status(400).send(err);
    }
}