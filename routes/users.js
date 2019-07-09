const router = require("express").Router();

// Importing model for route
let User = require("../models/user.modal");

// Route for all users
router.route("/").get((req, res) => {
  // Mongoose method for getting user from MongoDB. Find returns a promise
  User.find()
    // Getting users from database
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Route for adding user
router.route("/add").post((req, res) => {
  const username = req.body.username;

  // Get new user input
  const newUser = new User({ username });

  // Save user
  newUser
    // Save is a mongoose method for saving to DB
    .save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

// Get information about a specific User. Get id from url
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error ${err}`));
});

// Delete a specific User. Get ID from url
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
