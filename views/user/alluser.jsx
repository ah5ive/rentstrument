var React = require("react");
var PostItemForm =  require('./postitemform');
const sha256 = require("js-sha256")
// var GetRentItem = require('../item/rented')
class getUser extends React.Component {
  render() {

    console.log("useritems",this.props.user)
    console.log("userpage cookie",this.props.cookie);
    console.log("item result", this.props.item);
    var userItems = this.props.user;
    var userCookie = this.props.cookie;
    var rentItems = this.props.item;
    var getform;
    var cookieTrue = sha256('true')
    var signin = false;
    var dashboardUser;
    var profileUrl = '/user/profile/'+ userCookie.userId;

    if (userCookie.userLogin === cookieTrue ){
        signin = true;
        var dashboardUser = 'Welcome '+ userCookie.username
    } else {
        signin = false;
        var dashboardUser = 'Please sign in'
    }

    if(userCookie == null){
      userCookie.username = ' ';
    };

    const getItem = rentItems.map(rentItems=>{
        let otherUser = '/user/'+ rentItems.username_id
        let rentitemUrl = '/item/' + rentItems.id
        return <li key={rentItems.id} className="rentInventory"><a href={rentitemUrl}>{rentItems.itemname}</a> <p><a href={otherUser}>{rentItems.username}</a></p></li>
    });

    const user = userItems.map(userItems => {

            let itemUrl = '/item/'+userItems.id;
            var rentavailable;

              if (userItems.rent_id !== 0){
                    var rentavailable = 'Rent out'
                        } else {
                    var rentavailable = 'Available'
                            };

    return <li key={userItems.id} className="userInventory" key={userItems.itemname}><a href={itemUrl}>{userItems.itemname}</a>
                <p>{rentavailable}</p></li>});

    return (
   <html>
  <head>
    <title>Welcome {userCookie.username}</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
    <link rel="stylesheet" href="/reset.css"/>
    <link rel="stylesheet" href="/home.css"/>
    <link rel="stylesheet" href="/user.css"/>
  </head>
  <body>
  <div id="home">
    <nav>
    <ul>
      <li><a href={profileUrl}> Welcome {userCookie.username}</a></li>
      <li><a href="/user/logout">Sign out</a></li>
      <li><a href="/">Home</a></li>
    </ul>
    </nav>
  <main>
    <div id="profile">
      <h1>{dashboardUser}</h1>
        <div className="itemrow">
        <h3>Listed Items</h3>
          <ul>
            {user}
          </ul>
        </div>
        <div className="itemrow">
        <h3>Rented Items</h3>
        <ul>
        {getItem}
        </ul>
        </div>
    </div>
    <div id="formright">
    </div>
  </main>
  <footer>© rentstrument</footer>
  </div>
  </body>
  </html>
    );
  }
}


module.exports = getUser;
     //<li><a href="/user/new">Sign up</a></li>
     // <li><a href="/user/login">Sign in</a></li>

 // <GetRentItem/>