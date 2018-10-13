module.exports = (app, db) => {

    const user = require('./controllers/user')(db);
    const item = require('./controllers/item')(db);
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
    app.post('/user/postitem',user.postItem);
    app.get('/user/new',user.createUserForm);
    app.post('/user', user.createUser);
    app.get('/user/login',user.logInForm);
    app.get('/user/logout',user.logout)
    app.post('/user/login',user.logIn);
    app.get('/user/:id',user.getUser);
    app.get('/item/:id',item.getSingleItem);
    //app.get('/',user.home);
    app.get('/',item.getAllItems);
};
