var sha256 = require('js-sha256');
// var itemModel = require('./item')


module.exports = (dbPoolInstance) => {

    const createUser = (user, callback) => {
      // run user input password through bcrypt to obtain hashed password

      var hashedValue = sha256(user.password);

      // set up query
      const queryString = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
      const values = [user.username, user.email, hashedValue];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };


    const logIn = (user, callback)=>{
        console.log("model:username", user);
        //set up query
        const queryString = "SELECT * from users WHERE username ='"+ user + "';";
        console.log("models:queryString", queryString);

        dbPoolInstance.query(queryString,(error, queryResult) => {

            if(error){
                console.log(error, null);
            } else {
                    if (queryResult.rows[0] === undefined){
                        callback(null,null);
                    }else {
                            console.log("models: queryResultRow",queryResult.rows[0]);
                            callback(null,queryResult.rows[0]);
                        }
                }

      });

    };

    const getUser = (user,callback)=>{
        console.log("modelgetuser:",user)
        //console.log("callback", callback);
        //const queryString = "SELECT users.id, users.username, itemname, items.rent_id from users INNER JOIN items ON items.username_id = users.id WHERE users.id='" + user + "';";
        const queryString = "SELECT id, itemname, username_id, rent_id FROM items WHERE username_id='" + user + "';";
         dbPoolInstance.query(queryString,(error, queryResult) => {
            //console.log("models: queryResult",queryResult.rows);

            if(error){
                console.log(error, null);
            } else {
                // itemModel.rentItem()
                    if (queryResult.rows[0] === undefined){
                        callback(null,null);
                    }else {
                            console.log("models: queryResultRow",queryResult.rows);
                            callback(null,queryResult.rows);
                        }
                }

      });
    }

    const getAllUser = (user,callback)=>{
        console.log("modelgetuser:",user)
        //console.log("callback", callback);
        //const queryString = "SELECT users.id, users.username, itemname, items.rent_id from users INNER JOIN items ON items.username_id = users.id WHERE users.id='" + user + "';";
        const queryString = "SELECT id, itemname, username_id, rent_id FROM items WHERE username_id='" + user + "';";
         dbPoolInstance.query(queryString,(error, queryResult) => {
            //console.log("models: queryResult",queryResult.rows);

            if(error){
                console.log(error, null);
            } else {
                // itemModel.rentItem()
                    if (queryResult.rows[0] === undefined){
                        callback(null,null);
                    }else {
                            console.log("models: queryResultRow",queryResult.rows);
                            callback(null,queryResult.rows);
                        }
                }

      });
    }


    const postItem = (item, user,callback)=>{

        console.log("modelpostitem", item, user)

        const queryString ="INSERT INTO items (username_id, category, itemname, itemdesc, rent_id) VALUES ($1, $2, $3, $4,$5)"
        const values = [user, item.catergory, item.item_name,item.descr, item.rent_id];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });

}

    const getRentItem = (user, callback)=>{
            console.log("==models_getRentItem==",user);

            const queryString = "SELECT items.id, users.username, items.itemname, items.username_id, items.rent_id  FROM items INNER JOIN users ON (items.username_id=users.id) WHERE rent_id='" + user + "';";
            //
            //SELECT id, itemname, username_id, rent_id FROM items WHERE rent_id=
            dbPoolInstance.query(queryString,(error, itemResult) => {
                        // invoke callback function with results after query has executed
            callback(error, itemResult);
                            });

    };

  return {
      createUser,
      logIn,
      getUser,
      postItem,
      getRentItem,
      getAllUser
    };
};