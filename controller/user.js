const User =  require('../model/User');
const Hospital = require('../model/Hospital');
const Doctor = require('../model/Doctor');
const Lab = require('../model/Lab');
const bcrypt = require('bcryptjs'); 


exports.hospitalRate = async (req, res, next) => {
    const {
        userName,
        hospitalName,
        rating
    } = req.body;
    const userExist = await User.findOne({fullName: userName});
    if(!userExist) return res.status(400).send('User doesnot exists');

    try {
        const result = await Hospital.findOne({ 
            name: hospitalName
        });
        const totalRatings = result.no_of_ratings + 1;
        const newRating = ( ( result.no_of_ratings * result.rating ) + rating )/ totalRatings;
        finalRes = Hospital.updateOne({name: hospitalName}, { no_of_ratings: totalRatings, rating: newRating }, (err, docs) => {
            if (err){
                res.status(400).send(err);
            }
        });

        res.status(200).send("Rated Successfully");
    }
    catch(err) {
        res.status(400).send(err);
    }
}

exports.doctorRate = async (req, res, next) => {
    const {
        userName,
        doctorName,
        rating
    } = req.body;
    const userExist = await User.findOne({fullName: userName});
    if(!userExist) return res.status(400).send('User doesnot exists');

    try {
        const result = await Doctor.findOne({ 
            fullName: doctorName
        });
        const totalRatings = result.no_of_ratings + 1;
        const newRating = ( ( result.no_of_ratings * result.rating ) + rating )/ totalRatings;
        finalRes = Doctor.updateOne({fullName: doctorName}, { no_of_ratings: totalRatings, rating: newRating }, (err, docs) => {
            if (err){
                res.status(400).send(err);
            }
        });

        res.status(200).send("Rated Successfully");
    }
    catch(err) {
        res.status(400).send(err);
    }
}
