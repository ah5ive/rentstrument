module.exports = (app, db) => {

    const user = require('./controllers/user')(db);
    const item = require('./controllers/item')(db);
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
    app.get('/user/new',user.createUserForm);
    app.post('/user', user.createUser);
    app.get('/user/login',user.logInForm);
    app.get('/user/logout',user.logout)
    app.post('/user/login',user.logIn);
    //app.get('/',user.home);
    app.get('/',item.getAllItems);
};
