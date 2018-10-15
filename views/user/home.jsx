var React = require("react");
const sha256 = require("js-sha256");

class home extends React.Component {
  render() {

console.log('items:',this.props.items);
console.log("home cookie",this.props.cookie);

var userSignUp;
var userSignIn;
var userSignOut;
var signin = false;
var cookieTrue = sha256('true')
var userCookie = this.props.cookie;
var allListItems = this.props.items;
    if(userCookie == null){
      userCookie.username = ' '
    }

    if (userCookie.userLogin === cookieTrue ){
        signin = true;
            var userSignUp = '';
            var userSignIn = '';
            var userSignOut = 'Sign out'
        } else {
            signin = false;
                var userSignUp = 'Sign up';
                var userSignIn = 'Sign in';
                var userSignOut = '';
        };

    let url = 'user/profile/' + userCookie.userId;

        const items = this.props.items.map(allListItems => {

            var rentavailable;

            //console.log("allListItems_ID",allListItems.id)

            var itemUrl = 'item/' + allListItems.id;

            var userUrl = 'user/' + allListItems.username_id;

              if (allListItems.rent_id !== 0){
                    var rentavailable = 'Not Availble'
                        } else {
                    var rentavailable = 'Available'
                            };

    return <li className="listitems" key={allListItems.itemname}><a href={itemUrl} /*target="_blank"*/>{allListItems.itemname}</a>
                <h5><a href={userUrl}>List by: {allListItems.username}</a></h5><p>{rentavailable}</p>
            </li>

            })

    return (
   <html>
  <head>
    <title>Welcome To Music Gears Rental</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/home.css"/>
    <link rel="stylesheet" href="/displayitem.css"/>
  </head>
  <body>
  <div id="home">
    <nav>

    <ul>
      <li><a href={url}> Welcome {userCookie.username}</a></li>
      <li><a href="/user/logout">{userSignOut}</a></li>
      <li><a href="/">Home</a></li>
      <li><a href="/user/new">{userSignUp}</a></li>
      <li><a href="/user/login">{userSignIn}</a></li>
    </ul>
    </nav>
    <header>
      <h1>Rent Your Music Gears And Instruments</h1>
      <h3>You can rent instruments for you gigs and function.</h3>
    </header>
  <main>
    <div className="displayItem">
        <ul>
        {items}
        </ul>
    </div>
  </main>
  <footer> © rentstrument</footer>
  </div>
  </body>
  </html>
    );
  }
}

module.exports = home;