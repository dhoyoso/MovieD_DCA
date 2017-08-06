var express = require('express'),
  router = express.Router(),
  users = require('../controllers/user'),
  movies = require('../controllers/movie'),
  passportConfig = require ('../../config/passport');

module.exports = function(app) {
  app.use('/', router);
};

router.post('/deleteUser', users.deleteUser);
router.post('/searchUser', users.searchUser);
router.post('/updateUsername',passportConfig.estaAutenticado, users.updateUsername);
router.post('/updatePassword',passportConfig.estaAutenticado, users.updatePassword);

router.post('/signup',users.postSignup);
router.post('/login',users.postLogin);
router.get('/logout',passportConfig.estaAutenticado, users.logout);
router.get('/userInfo', passportConfig.estaAutenticado, function (req,res) {
  res.json({username: req.user.username, _id: req.user._id});
});

router.post('/movie',passportConfig.estaAutenticado, movies.createMovie);
router.post('/deleteMovie',passportConfig.estaAutenticado, movies.deleteMovie);
router.get('/movie', movies.getAllMovies);
router.post('/searchMovie', movies.searchMovies);
router.post('/movieGenre', movies.searchMoviesByGenre);
router.post('/sharedWithMe',passportConfig.estaAutenticado, movies.moviesSharedWith);
router.post('/myContent',passportConfig.estaAutenticado, movies.getMyMovies);
router.post('/shareMovie',passportConfig.estaAutenticado, movies.shareMovieWith);
router.post('/update',passportConfig.estaAutenticado, movies.updateMovie);


