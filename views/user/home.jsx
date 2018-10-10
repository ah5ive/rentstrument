var React = require("react");

class home extends React.Component {
  render() {

// var allItems = this.props.items;

var userCookie = this.props.cookie;

    if(userCookie == null){
      userCookie.username = ' '
    }
    console.log("home",this.props.cookie);
    console.log("items", this.props.items);

    return (
   <html>
  <head>
    <title>Welcome To Music Gears Rental</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/home.css"/>
  </head>
  <body>
  <div id="home">
    <nav>
    <ul>
      <li><a href="#">Welcome {this.props.cookie.username}</a></li>
      <li><a href="/user/new">Sign up</a></li>
      <li><a href="/user/login">Sign in</a></li>
      <li><a href="/user/logout">Sign out</a></li>
    </ul>
    </nav>
  <main>
    <div id="header">
      <h1>Rent Your Music Gears And Instruments</h1>
      <h3>You can rent instruments for you gigs and function.</h3>
    </div>
    <div className="displayItem">
    </div>
  </main>
  <footer>©rentstrument</footer>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = home;