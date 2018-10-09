module.exports = (app, db) => {

    const user = require('./controllers/user')(db);
  //const tweed = require('./controllers/tweed')(db);
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
    app.get('/user/new',user.createUserForm);
    app.post('/user', user.createUser);
    app.get('/user/login',user.logInForm);
    app.post('/user/login',user.logIn);
};
