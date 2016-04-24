var Sequelize = require('sequelize');

if(process.env.NODE_ENV === 'production') {
  console.log(process.env.JAWSDB_URL);

  var connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  var connection = new Sequelize('portfolioblog_db', 'root');
}

var User = connection.define ('User', {
  username : {
    type: Sequelize.STRING,
    unique, true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lname: Sequelize.STRING,
  fname: Sequelize.STRING
});

var Project = connection.define('Project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
},
description: Sequalize.STRING,
githubLink: Sequelize.STRING,
herokuLink: Sequelize.STRING,
notes: Sequelize.STRING,
skills: Sequelize.STRING
});

var Blog = connection.define ('Blog', {
  title: Sequelize.STRING,
  date: Sequelize.STRING,
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  keywords: Sequelize.STRING
  img: Sequelize.STRING
});

connection.sync();
exports.User=User;
exports.Blog=Blog;
exports.Project=Project;