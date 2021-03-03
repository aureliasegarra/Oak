const { Router } = require('express');

const router = Router();

const authorController = require('./controllers/authorController');
const badgeController = require('./controllers/badgeController');
const bookController = require('./controllers/bookController');
const bookPositionController = require('./controllers/bookPositionController');
const listController = require('./controllers/listController');
const ratingController = require('./controllers/ratingController');
const reviewController = require('./controllers/reviewController');
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');


// AUTHOR ROUTES
// Get all authors
router.get('/authors', authorController.getAllAuthors);
// Get author by id
router.get('/author/:id', authorController.getAuthorById);
// Add author
router.post('/author/', authorController.addAuthor);
// Delete author
router.delete('/author/:id', authorController.deleteAuthor);
// Update author
router.patch('/author/:id', authorController.updateAuthor);

// BADGE ROUTES
// Get all badges
router.get('/badges', badgeController.getAllBadges);
// Get badge by id
router.get('/badge/:id', badgeController.getBadgeById);
// Add badge
router.post('/badge/', badgeController.addBadge);
// Delete badge
router.delete('/badge/:id', badgeController.deleteBadge);
// Update badge
router.patch('/badge/:id', badgeController.updateBadge);

// BOOK ROUTES
// Get all books
router.get('/books', bookController.getAllBooks);
// Get book by id
router.get('/book/:id', bookController.getBookById);
// Add book
router.post('/book/', bookController.addBook);
// Delete book
router.delete('/book/:id', bookController.deleteBook);
// Update book
router.patch('/book/:id', bookController.updateBook);

// BOOKPOSITION ROUTES
// Get all bookPositions
router.get('/bookPositions', bookPositionController.getAllBookPositions);
// Get bookPosition by id
router.get('/bookPosition/:id', bookPositionController.getBookPositionById);
// Add bookPosition
router.post('/bookPosition/', bookPositionController.addBookPosition);
// Delete bookPosition
router.delete('/bookPosition/:id', bookPositionController.deleteBookPosition);
// Update bookPosition
router.patch('/bookPosition/:id', bookPositionController.updateBookPosition);

// LIST ROUTES
// Get all lists
router.get('/lists', listController.getAllLists);
// Get lists by userId
router.get('/lists/user/:userId', listController.getListByUserId);
// Get list by id
router.get('/list/:id', listController.getListById);
// Add list
router.post('/list/', listController.addList);
// Delete list by id
router.delete('/list/:id', listController.deleteListById);
// Update list
router.patch('/list/:id', listController.updateList);

// RATING ROUTES
// Get all ratings
router.get('/ratings', ratingController.getAllRatings);
// Get rating by id
router.get('/rating/:id', ratingController.getRatingById);
// Add rating
router.post('/rating/', ratingController.addRating);
// Delete rating
router.delete('/rating/:id', ratingController.deleteRating);
// Update rating
router.patch('/rating/:id', ratingController.updateRating);

// REVIEW ROUTES
// Get all reviews
router.get('/reviews', reviewController.getAllReviews);
// Get review by id
router.get('/review/:id', reviewController.getReviewById);
// Add review
router.post('/review/', reviewController.addReview);
// Delete review
router.delete('/review/:id', reviewController.deleteReview);
// Update review
router.patch('/review/:id', reviewController.updateReview);

// ROLE ROUTES
// Get all roles
router.get('/roles', roleController.getAllRoles);
// Get role by id
router.get('/role/:id', roleController.getRoleById);
// Add role
router.post('/role/', roleController.addRole);
// Delete role
router.delete('/role/:id', roleController.deleteRole);
// Update role
router.patch('/role/:id', roleController.updateRole);

// USER ROUTES
// Get all users
router.get('/users', userController.getAllUsers);
// Get user by id
router.get('/user/:id', userController.getUserById);
// Add user
router.post('/user/', userController.addUser);
// Delete user
router.delete('/user/:id', userController.deleteUser);
// Update user
router.patch('/user/:id', userController.updateUser);

// 404
router.use((req, res) => {
    res.status(404).json('No such endpoint');
    });

module.exports = router;
