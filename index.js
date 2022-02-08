const express = require('express');
const app = express();
const sequelize = require('./database');
const User = require('./models/User');
const Post = require('./models/Post');

sequelize.sync( {force: true}).then(() => console.log("db is ready"));

app.use(express.json());

app.post('/post', async (req,res) => {
    await Post.create(req.body);
    res.send('post is inserted');
})

app.get('/post', async (req, res) => {
    const post = await Post.findAll();
    res.send(post);
})

app.get('/post/:postId' , async (req, res) => {
    const requestId =  req.params.postId;
    const post = await Post.findOne({ where: {id: requestId}});
    res.send(post);
})

app.put('/post/:postId' , async (req, res) => {
    const requestId =  req.params.postId;
    const post = await Post.findOne({ where: {id: requestId}});
    post.username = req.body.username;
    await post.save();
    res.send('updated');
})

app.delete('/post/:postId', async (req,res) => {
    const requestId =  req.params.postId;
    await Post.destroy({ where: {id: requestId} });
    res.send("removed");
})

app.listen(8800, () => {
    console.log("Server is running....");
});