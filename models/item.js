
module.exports = (dbPoolInstance) => {

    const getAllItems = (callback)=>{
        //console.log("model:items", item);
        //set up query
        const queryString = 'SELECT users.username,users.id,items.id,items.itemname, items.rent_id, items.itemdesc FROM users INNER JOIN items ON items.username_id = users.id;';

        console.log("models: itemQueryString", queryString);

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("models", queryResult.rows);

             callback(error, queryResult.rows);

      });


    };

    const getSingleItem = (item, callback)=>{
        console.log("modelGetSingleItem:",item);

       const queryString = "SELECT id, username_id, catergory, itemname, rent_id, itemdesc from items where id ='" + item + "';";

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("models", queryResult.rows);

             callback(error, queryResult.rows);

      });


    };

return {
    getAllItems,
    getSingleItem

  };
};