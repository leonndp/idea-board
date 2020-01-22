const express = require('express');
const router = express.Router();
const verify = require('../../middleware/verifyToken')

// Idea Model
const Idea = require('../../models/Idea')

// @route   GET api/ideas
// @desc    Get All Ideas
// @access  Private
router.get('/', verify, (req, res) => {
    Idea.find({ authorId: req.user._id })
        .sort({ date: -1 })
        .then(ideas => res.json(ideas))
});

// @route   POST api/ideas
// @desc    Create An Idea
// @access  Private
router.post('/', verify, (req, res) => {
    const newIdea = new Idea({
        title: req.body.title,
        content: req.body.content,
        authorId: req.user._id
    });

    newIdea.save()
        .then(idea => res.json(idea));
});

// @route   PUT api/ideas/:id
// @desc    Update An Idea
// @access  Private
router.put('/:id', verify, (req, res) => {
    Idea.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
    },
        { new: true },
        (err, result) => {
            err ? (res.status(404).json({ success: false })) : (res.json(result))
        })
})

// @route   DELETE api/ideas/:id
// @desc    Delete An Idea
// @access  Private
router.delete('/:id', verify, (req, res) => {
    Idea.findById(req.params.id)
        .then(idea => idea.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;