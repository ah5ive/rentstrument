var React = require("react");

class newUser extends React.Component {
  render() {
    return (
   <html>
  <head>
    <title>Sign Up</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/formstyle.css"/>
  </head>
  <body>
  <div id="wrapper">
  <header>
  <h1>Sign up form</h1>
  </header>
  <main>
  <form name="newuser" method="post" action="/user">
    <p>Email Address</p>
    <input type ="text" name="email"/>
    <p>Username</p>
    <input type ="text" name="username"/>
    <p>Password</p>
    <input type="text" name="password"/>
    <button name="submit" value="sign up">Sign Up</button>
  </form>
  </main>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = newUser;