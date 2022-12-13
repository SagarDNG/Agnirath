const User = require('../models/user');

module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.redirect('http://localhost:3000/');
};