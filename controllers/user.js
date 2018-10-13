var sha256 = require('js-sha256');

module.exports = (db) => {
//======controller Logic===========
    const createUserForm = (request, response)=>{
        response.render('user/newuserform');
    }

    const createUser = (request, response) => {
          // use user model method `create` to create new user entry in db
          db.user.createUser(request.body, (error, queryResult) => {
            // queryResult of creation is not useful to us, so we ignore it
            //(console log it to see for yourself)
            // (you can choose to omit it completely from the function parameters)
            let hashCookie = sha256('true');

            if (error) {
              console.error('error getting user:', error);
              response.sendStatus(500);
            };

            if (queryResult.rowCount >= 1) {
              console.log('User created successfully',request.body.username);

              console.log(request.body);
              // drop cookies to indicate user's logged in status and username
              response.cookie('signup', hashCookie);

              response.cookie('username', request.body.username);
              //take note on coookie
            } else {
              console.log('User could not be created');
            }
                response.send('sign up successful');
          });
      };

    const logInForm = (request, response)=>{
        response.render('user/signinform');
      }

    const logIn = (request, response)=>{

        db.user.logIn(request.body.name,(error, queryResult)=>{

            console.log("resbdyname",request.body.password);

            console.log("controller: signin", queryResult);

            if(error){
                console.log("error", error);
                response.status(505).send("controllerGG");
            } else if (queryResult === null) {
                response.status(404).send("User Not found");
                } else {
                    console.log("else controller",queryResult);

                    var hashValue = sha256(request.body.password);

                    console.log("db sent", queryResult.password);

                    console.log("input pass", hashValue);

                    if( queryResult.password === hashValue){

                        var hashCookie = sha256('true')
                        console.log("cookie res",queryResult.id);

                        response.cookie('user_id',queryResult.id);
                        response.cookie('user_name',queryResult.username);
                        response.cookie('loggedin', hashCookie)
                        response.redirect('/');
                        } else {
                            response.status(403).send('Invalid password');
                            }
                }
            });
        }

    //get user
    const getUser = (request,response)=>{
        //console.log("response",response)

        db.user.getUser(request.params.id,(error, queryResult)=>{
        //console.log("resbdyname",request.body.name);
        console.log("getuserqR",queryResult)
        console.log("==err==",error)

        let userCookies = {
                username: request.cookies['user_name'],
                userId: request.cookies['user_id'],
                userLogin: request.cookies['loggedin']
            };

            response.render('user/user',{user:queryResult, cookie: userCookies})
        })
    }

    const postItemForm = (request,response)=>{
        response.render('user/postitemform');
    }

    const postItem = (request,response)=>{

        db.user.postItem(request.body,request.cookies['user_id'],(error, queryResult)=>{

        let userCookies = {
                username: request.cookies['user_name'],
                userId: request.cookies['user_id'],
                userLogin: request.cookies['loggedin']
            };

            if(error){
                console.log("error", error);
                response.status(505).send("Con post itemGG");
            } else if (queryResult === null) {
                response.status(404).send("User Not found");
                } else {
                    console.log("Con postItem QR",queryResult);

                    response.redirect('/user/'+ userCookies.userId);
                };

            });
    }

    //log out
    const logout = (request, response)=>{
        response.clearCookie('user_name');
        response.clearCookie('user_id');
        response.clearCookie('loggedin');

        //console.log("cookie clear",response)
        response.redirect('/');
    }

    //home
  //   const home = (request, response)=>{

  //       let userCookies = {
  //               username: request.cookies['user_name'],
  //               userId: request.cookies['user_id'],
  //               userLogin: request.cookies['loggedin']
  //       };

  //       console.log("usercookie",userCookies);
  //       response.render('user/home', {cookie:userCookies});
  // }

return {
    createUserForm,
    createUser,
    getUser,
    logInForm,
    logIn,
    logout,
    postItemForm,
    postItem

    //foobar
  };
};