module.exports = (db) => {

    const getAllItems = (request, response)=>{
        db.item.getAllItems((error, queryResult)=>{

            let userCookies = {
                username: request.cookies['user_name'],
                userId: request.cookies['user_id'],
                userLogin: request.cookies['loggedin']
        };

            console.log("controllers:",queryResult);
            //response.send('hello');
            console.log("usercookie",userCookies);
            response.render('user/home',{items: queryResult ,cookie: userCookies});

        });
    }
        return {
        getAllItems
        //foobar
      };
    };