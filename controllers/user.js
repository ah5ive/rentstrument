//var sha256 = require('js-sha256');

module.exports = (db) => {

const CreateUserForm = (request, response)=>{

    response.render('user/newuserform');
}


return {
    CreateUserForm,
    //test
    //foobar
  };
};