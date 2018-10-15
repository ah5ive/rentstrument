
module.exports = (dbPoolInstance) => {

    const getAllItems = (callback)=>{
        //console.log("model:items", item);
        //set up query
        const queryString = 'SELECT items.username_id, users.username, items.itemname, items.id, items.rent_id FROM users INNER JOIN items on users.id=items.username_id;';

        console.log("models: itemQueryString", queryString);

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("models", queryResult.rows);

             callback(error, queryResult.rows);

      });


    };

    const getSingleItem = (item, callback)=>{
        console.log("modelGetSingleItem:",item);

       const queryString = "SELECT items.id AS item_id, users.id As user_id, users.username, items.username_id, items.category, items.itemname, items.rent_id, items.itemdesc FROM users INNER JOIN items ON( items.username_id = users.id) WHERE items.id ='" + item + "';";

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("models", queryResult.rows[0]);

             callback(error, queryResult.rows[0]);

      });


    };

    const rentItem = (item, user, callback)=>{
        //console.log("models_Rent_item", item, user);
        //console.log("models_Rent_rent.id",item.rent_id);
        //console.log("models_Rent_item.id.",item.item_id)

        const queryString = "update items SET rent_id ='" + item.rent_id + "'Where id = '"+ item.item_id + "';";
        //const values = [item.]
        dbPoolInstance.query(queryString,(error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    }

    // const getRentItem = (user, callback)=>{
    //     console.log("==models_getRentItem==",user);

    //     const queryString = "SELECT id, itemname, username_id, rent_id FROM items WHERE rent_id='" + user + "';";

    //     dbPoolInstance.query(queryString,(error, queryResult) => {
    //     // invoke callback function with results after query has executed
    //     callback(error, queryResult.rows);
    //         });
    // }

return {
    getAllItems,
    getSingleItem,
    rentItem,
    //getRentItem

  };
};