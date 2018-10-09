var sha256 = require('js-sha256');

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

  return {
      createUser,
      logIn
      // //foobar
    };
};