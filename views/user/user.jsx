var React = require("react");

class getUser extends React.Component {
  render() {

    console.log("useritems",this.props.user)
    console.log("home cookie",this.props.cookie);

    var userItems = this.props.user;
    var userCookie = this.props.cookie;

    if(userCookie == null){
      userCookie.username = ' '
    }


    //let url = 'user/' + userCookie.userId;

    return (
   <html>
  <head>
    <title>Welcome,</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/home.css"/>
  </head>
  <body>
  <div id="home">
    <nav>
    <ul>
      <li><a href="#"> Welcome {userCookie.username}</a></li>
      <li><a href="/user/new">Sign up</a></li>
      <li><a href="/user/login">Sign in</a></li>
      <li><a href="/user/logout">Sign out</a></li>
      <li><a href="/">Home</a></li>
    </ul>
    </nav>
  <main>
    <div id="profile">
      <h1>{userCookie.username} profile</h1>
      <ul>
      {userItems.map(userItems => (
              <li key={userItems.itemname}> {userItems.itemname}</li>

            ))}
      </ul>

    </div>
  </main>
  <footer>©rentstrument</footer>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = getUser;