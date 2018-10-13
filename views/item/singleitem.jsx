var React = require("react");

class getSingleItem extends React.Component {
  render() {

    // console.log("singleitems",this.props.items)
    console.log("single user cookie",this.props.cookie);

    // var userItems = this.props.user;
    var userCookie = this.props.cookie;

    // if(userCookie == null){
    //   userCookie.username = ' '
    // }
    // function closeWin() {
    //   close();
    // }

    return (
   <html>
  <head>
    <title>Single Items</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
  </head>
  <body>
  <div id="#">
  <header>
  <h1>Item Name</h1>
  </header>
  <main>
  <h3>{}</h3>
  <p>my Catergory</p>
  <h3>Description</h3>
  <p>description text blah blah</p>
  <button type="submit">Rent Item</button>
  <button onClick = "#">Close</button>
  </main>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = getSingleItem;
// <form name="newuser" method="post" action="/user">
//
//   </form>