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

    const getSingleItem = (request, response)=>{

        db.item.getSingleItem(request.params.id,(error, queryResult)=>{

            console.log("==getSingleItem_RPI==",request.params.id)
            //console.log("==singleitem_err==",error)

            let userCookies = {
                username: request.cookies['user_name'],
                userId: request.cookies['user_id'],
                userLogin: request.cookies['loggedin']
        };

        response.render('item/singleitem', {singleItem: queryResult, cookie:userCookies});

        });

    }

    const rentItem = (request,response)=>{

        db.item.rentItem(request.body,request.cookies['user_id'],(error, queryResult)=>{

            console.log("===rentItem controllers===", request.body)
        let userCookies = {
                username: request.cookies['user_name'],
                userId: request.cookies['user_id'],
                userLogin: request.cookies['loggedin']
            };

            if(error){
                console.log("error", error);
                response.status(505).send("Cannot post itemGG");
            } else if (queryResult === null) {
                response.status(404).send("User Not found");
                } else {
                    console.log("Cannot postItem QR",queryResult);

                    response.redirect('/user/'+ userCookies.userId);
                };

            });
    }

    // const getRentItem = (request, response)=>{
    //     db.item.getRentItem(request.cookies['user_id'],(error,queryResult)=>{

    //         console.log("control",request.cookies['user_id']);

    //         let userCookies = {
    //             username: request.cookies['user_name'],
    //             userId: request.cookies['user_id'],
    //             userLogin: request.cookies['loggedin']
    //         };

    //         if(error){
    //             console.log("error", error);
    //             response.status(505).send("Cannot get itemGG");
    //         } else if (queryResult === null) {
    //             response.status(404).send("User Not found");
    //             } else {
    //                 console.log("GetItem QR",queryResult);

    //                 response.render('item/rented', {rentItem: queryResult});
    //             };


    //     });
    // }

        return {
        getAllItems,
        getSingleItem,
        rentItem,
        // getRentItem
        //foobar
      };
    };