const { Router } = require('express');

const router = Router();

const auth = require('./middlewares/auth');

const badgeController = require('./controllers/badgeController');
const bookController = require('./controllers/bookController');
const bookPositionController = require('./controllers/bookPositionController');
const listController = require('./controllers/listController');
const ratingController = require('./controllers/ratingController');
const reviewController = require('./controllers/reviewController');
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

// AUTHENTICATION ROUTES
// Register new user
router.post('/register/', authController.register);
// Login user
router.post('/login/', authController.login);

// BADGE ROUTES
// Get all badges
router.get('/badges', badgeController.getAllBadges);
// Get badge by id
router.get('/badge/:id(\\d+)', badgeController.getBadgeById);
// Add badge
router.post('/badge/', badgeController.addBadge);
// Delete badge
router.delete('/badge/:id(\\d+)', badgeController.deleteBadge);
// Update badge
router.patch('/badge/:id(\\d+)', badgeController.updateBadge);

// BOOK ROUTES
// Get all books
router.get('/books', bookController.getAllBooks);
// Get book by id
router.get('/book/:id(\\d+)', bookController.getBookById);
// Add book
router.post('/book/', bookController.addBook);
// Delete book
router.delete('/book/:id(\\d+)', bookController.deleteBookById);
// Update book
router.patch('/book/:id(\\d+)', bookController.updateBook);

// BOOKPOSITION ROUTES
// Get all bookPositions
router.get('/bookPositions', bookPositionController.getAllBookPositions);
// Get bookPosition by id
router.get(
  '/bookPosition/:id(\\d+)',
  bookPositionController.getBookPositionById
);
// Add bookPosition
router.post('/bookPosition/', bookPositionController.addBookPosition);
// Delete bookPosition
router.delete(
  '/bookPosition/:id(\\d+)',
  bookPositionController.deleteBookPosition
);
// Update bookPosition
router.patch(
  '/bookPosition/:id(\\d+)',
  bookPositionController.updateBookPosition
);

// LIST ROUTES
// Get all lists
router.get('/lists', listController.getAllLists);
// Get list by id
router.get('/list/:id(\\d+)', listController.getListById);
// Get lists by userId
router.get('/lists/user/:userId(\\d+)', listController.getListsByUserId);
// Add list
router.post('/list/', listController.addList);
// Delete list by id
router.delete('/list/:id(\\d+)', listController.deleteListById);
// Update list
router.patch('/list/:id(\\d+)', listController.updateList);

// RATING ROUTES
// Get all ratings
router.get('/ratings', ratingController.getAllRatings);
// Get rating by id
router.get('/rating/:id(\\d+)', ratingController.getRatingById);
// Add rating
router.post('/rating/', ratingController.addRating);
// Delete rating
router.delete('/rating/:id(\\d+)', ratingController.deleteRatingById);
// Update rating
router.patch('/rating/:id(\\d+)', ratingController.updateRating);

// REVIEW ROUTES
// Get all reviews
router.get('/reviews', reviewController.getAllReviews);
// Get review by id
router.get('/review/:id(\\d+)', reviewController.getReviewById);
// Add review
router.post('/review/', reviewController.addReview);
// Delete review
router.delete('/review/:id(\\d+)', reviewController.deleteReviewById);
// Update review
router.patch('/review/:id(\\d+)', reviewController.updateReview);

// ROLE ROUTES
// Get all roles
router.get('/roles', roleController.getAllRoles);
// Get role by id
router.get('/role/:id(\\d+)', roleController.getRoleById);
// Add role
router.post('/role/', roleController.addRole);
// Delete role
router.delete('/role/:id(\\d+)', roleController.deleteRole);
// Update role
router.patch('/role/:id(\\d+)', roleController.updateRole);

// USER ROUTES
// Get all users
router.get('/users', userController.getAllUsers);
// Get user by id
router.get('/user/me', auth, userController.getUserById);
// Add user
router.post('/user/', userController.addUser);
// Delete user
router.delete('/user/:id(\\d+)', userController.deleteUser);
// Update user
router.patch('/user/:id(\\d+)', userController.updateUser);

// 404
router.use((req, res) => {
  res.status(404).json('No such endpoint');
});

module.exports = router;
