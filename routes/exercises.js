const router = require("express").Router();

// Importing model for route
let Exercise = require("../models/exercise.modal");

// Route for all excercises and getting excercises from Database
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  // Adding new exercise to database
  const username = req.body.username;
  const description = req.body.description;
  const intensity = req.body.intensity;
  const frequency = req.body.frequency;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    // Creating new excercise based on input from exercise modal
    username,
    description,
    intensity,
    frequency,
    duration,
    date
  });

  // Save to database
  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

// Get information about a specific exercise. Get id from url
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(`Error ${err}`));
});

// Delete a specific exercise. Get ID from url
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

// Update a specifik exercise. ID from url
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      // Get existing exercise and update with new values
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.intensity = req.body.intensity;
      exercise.frequency = req.body.frequency;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated"))
        .catch(err => res.status(400).json(`Error ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
