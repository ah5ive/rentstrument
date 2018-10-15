module.exports = (app, db) => {

    const item = require('./controllers/item')(db);
    const user = require('./controllers/user')(db,item);
    //added the db of the items on controllers/user
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
    app.get('/user/profile/:id',user.getUser);
    app.post('/user/postitem',user.postItem);
    app.post('/user/rentitem',item.rentItem);
    //app.get('/item/getrentitem',item.getRentItem);
    app.get('/user/new',user.createUserForm);
    app.post('/user', user.createUser);
    app.get('/user/login',user.logInForm);
    app.get('/user/logout',user.logout)
    app.post('/user/login',user.logIn);
    app.get('/user/:id',user.getAllUser);
    app.get('/item/:id',item.getSingleItem);
    //app.get('/',user.home);
    app.get('/',item.getAllItems);
};
