
// const express = require('express');
// const router = express.Router();
// const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');

// router.get('/', getAllUsers);
// router.post('/', createUser);
// router.get('/:userId', getUserById);
// router.put('/:userId', updateUser);
// router.delete('/:userId', deleteUser);

// module.exports = router;
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
