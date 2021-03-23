const router = require('express').Router();
let User = require('../models/user.model');

//To handle incoming http get requests ending with /
router.route('/').get((req, res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
});

//To handle incoming http post reuests ending with /add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Find by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Delete by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Update request
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;

            //Save to database
            exercise.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;