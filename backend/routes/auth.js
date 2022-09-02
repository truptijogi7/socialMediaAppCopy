const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userData = { email: req.body.email, password: hashedPassword };

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    console.log('newUser ', newUser);

    //save user and respond
    const savedUser = await newUser.save();

    const user = savedUser.toJSON();
    // user.token = token;

    res.status(201).send(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/register-update', async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      network: req.body.network,
      industry: req.body.industry,
      amount: req.body.amount,
    });

    console.log('newUser ', newUser);
    //save user and respond
    const user = await newUser.save();

    // create JWT token
    // const token = await jwt.sign({ userId: user._id }, process.env.TOKEN_KEY);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// router.post('/verify-token', async (req, res) => {
//   try {
//     const data = jwt.verify(req.body.token, process.env.TOKEN_KEY);
//     console.log(data);
//     res.json(data);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json('wrong password');

    const secretKey = process.env.JWT_TOKEN_KEY;
    const userData = { email: req.body.email, password: hashedPassword };

    const token = jwt.sign(userData, secretKey);

    const userToken = user.toJSON();
    userToken.token = token;

    res.status(200).json(userToken);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
