const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {}

Post.init ( {
    username : {
        type:DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName : 'post',
    timestamps: false
})

module.exports = Post;
