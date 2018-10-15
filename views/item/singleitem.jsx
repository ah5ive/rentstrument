var React = require("react");

class getSingleItem extends React.Component {

  render() {

    function toGoHome (){
      location.assign("http://localhost:3000/")
    };

    console.log("singleitem_jsx", this.props.singleItem)
    console.log("single user cookie",this.props.cookie);
    console.log("item",this.props.singleItem.id)

    // var userItems = this.props.user;
    var userCookie = this.props.cookie;
    var singleItem = this.props.singleItem;

    console.log("single_item_user_id",singleItem.username_id)
    console.log("singleitem_rent_id", singleItem.rent_id);

    var itemNotAvailable;

    if(singleItem.rent_id !== 0){
      var itemNotAvailable = <p>Item Not Available</p>
    } else if (singleItem.username_id = userCookie.userId){

        var itemNotAvailable = <p>You Own This</p>
    }  else  {
      var itemNotAvailable = <button className="button" type="submit" name='rent_id' value={userCookie.userId}>Rent It</button>
    };



    //console.log("itemNotAvailable",itemNotAvailable)

  return (
           <html>
          <head>
            <title>{singleItem.itemname}</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
            <link rel="stylesheet" href="/reset.css"/>
            <link rel="stylesheet" href="/singleitem.css"/>
          </head>
          <body>
          <div className = "singleitem">
            <header>
            <h2>{singleItem.itemname}</h2>
            <h3>List by {singleItem.username}</h3>
            </header>
          <main>
            <h3>Category</h3>
            <p>{singleItem.category}</p>
            <h3>Description</h3>
            <p>{singleItem.itemdesc}</p>
          </main>
          </div>
           <footer>
           <a href="/"><button className="button">Home</button></a>
            <form name="rentitemform" method="post" action="/user/rentitem">
              {itemNotAvailable}
              <input type ="hidden" name="item_id" value={singleItem.item_id}/>
            </form>
          </footer>
          </body>
          </html>
      );
  }
}

module.exports = getSingleItem;