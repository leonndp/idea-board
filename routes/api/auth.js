const router = require('express').Router()
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('./validation')
const verify = require('../../middleware/verifyToken')

// @route   POST api/auth/register
// @desc    Add user to database
// @access  Public
router.post('/register', (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).json({ msg: error.details[0].message })

    // Validate data
    User.findOne({ email: req.body.email })
        .then((emailExists) => {
            // Check if email exists
            if (emailExists) return res.status(400).json({ msg: 'Email already exists.' })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err
                    // Create a new user
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    })

                    newUser.save()
                        .then(user => res.json({ user: user._id }))
                        .catch(err => res.status(400).send(err))
                })
            })
        })
})

// @route   POST api/auth/login
// @desc    Find user in database, return auth-token
// @access  Public
router.post('/login', (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).json({ msg: error.details[0].message })

    // Validate data
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) return res.status(400).json({ msg: 'Invalid email' })

            bcrypt.compare(req.body.password, user.password, (err, validPass) => {
                if (!validPass) return res.status(400).json({ msg: 'Invalid password' })

                // Create and sign a token
                const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 })
                res.header('auth-token', token).json({ token })
            })
        })
})

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', verify, (req, res) => {
    User.findById(req.user._id)
        .select('-password')
        .then(user => res.json(user))
})

module.exports = router