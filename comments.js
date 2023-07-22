// Create web server
// 1. import express
const express = require('express');
// 2. create router
const router = express.Router();
// 3. import comments model
const commentsModel = require('../models/commentsModel');
// 4. create router
// 4.1 get all comments
router.get('/', (req, res) => {
    // res.send('get all comments');
    commentsModel.getAllComments()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.2 get comments by id
router.get('/:id', (req, res) => {
    // res.send('get comments by id');
    commentsModel.getCommentsById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.3 get comments by user id
router.get('/user/:id', (req, res) => {
    // res.send('get comments by user id');
    commentsModel.getCommentsByUserId(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.4 get comments by post id
router.get('/post/:id', (req, res) => {
    // res.send('get comments by post id');
    commentsModel.getCommentsByPostId(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.5 create new comments
router.post('/', (req, res) => {
    // res.send('create new comments');
    commentsModel.createNewComments(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.6 update comments
router.put('/:id', (req, res) => {
    // res.send('update comments');
    commentsModel.updateCommentsById(req.params.id, req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});
// 4.7 delete comments
router.delete('/:id',