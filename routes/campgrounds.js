
const express = require('express');
const router = express.Router();
const campgrounds=require('../controllers/campgroundControl')
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn,isAuthor,validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');

const upload = multer({ storage });
router.route('/')
.get( catchAsync(campgrounds.index))
.post( isLoggedIn, upload.array('image'), validateCampground,catchAsync(campgrounds.makeNew));

router.get('/new', isLoggedIn, campgrounds.renderNew)


router.route('/:id')
.get( catchAsync(campgrounds.showNew))
.put( isLoggedIn,isAuthor, upload.array('image'),validateCampground, catchAsync(campgrounds.updateCamp))
.delete( isLoggedIn, isAuthor,catchAsync(campgrounds.deleteCamp));

router.get('/:id/edit', isLoggedIn,isAuthor, catchAsync(campgrounds.editCamp))




module.exports = router;