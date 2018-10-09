module.exports = (app, db) => {

    const user = require('./controllers/user')(db);
  //const tweed = require('./controllers/tweed')(db);
  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
    app.get('/user/new',user.CreateUserForm);
};
