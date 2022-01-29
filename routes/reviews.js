
const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview,isLoggedIn ,isReviewAuthor} = require('../middleware');


const reviews=require('../controllers/reviewControl')



const catchAsync = require('../utils/catchAsync')






router.post('/', validateReview, isLoggedIn,catchAsync(reviews.makeReview))

router.delete('/:reviewId', isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview))

module.exports = router;