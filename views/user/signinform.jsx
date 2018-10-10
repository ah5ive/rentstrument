var React = require("react");

class signIn extends React.Component {
  render() {
    return (
   <html>
  <head>
    <title>Sign In</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/formstyle.css"/>
  </head>
  <body>
  <div id="wrapper">
  <header>
  <h1>Welcome back, please sign in</h1>
  </header>
  <main>
  <form className="user-signin" method="post" action="/user/login">
    <p>Username</p>
    <input name="name" type ="text" />
    <p>Password</p>
    <input name="password" type="text" />
    <button name="submit" value="sign in">Sign In</button>
  </form>
  </main>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = signIn;