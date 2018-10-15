var React = require("react");
var PostItemForm =  require('./postitemform')
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

    if(userCookie == null){
      userCookie.username = ' ';
    }

    // const getItem = rentItems.map(rentItems=>){
    //     return <li className"userInventory">{rentItems.itemname}</li>
    // }

    const user = userItems.map(userItems => {

            let itemUrl = '/item/'+userItems.id;
            var rentavailable;

              if (userItems.rent_id !== 0){
                    var rentavailable = 'Rent out'
                        } else {
                    var rentavailable = 'Available'
                            };

    return <li className="userInventory" key={userItems.itemname}><a href={itemUrl}>{userItems.itemname}</a>
                <p>{rentavailable}</p></li>});

    // const rentItem = userItems.map(userItems=>){
    //     return <li>{userItems.rent_id}</li>
    // }
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
      <li><a href="#"> Welcome {userCookie.username}</a></li>
      <li><a href="/user/new">Sign up</a></li>
      <li><a href="/user/login">Sign in</a></li>
      <li><a href="/user/logout">Sign out</a></li>
      <li><a href="/">Home</a></li>
    </ul>
    </nav>
  <main>
    <div id="profile">
      <h1>Welcome {userCookie.username}</h1>
        <div className="itemrow">
        <h3>Listed Items</h3>
          <ul>
            {user}
          </ul>
        </div>
        <div className="itemrow">
        <h3>Rented Items</h3>
        <ul>
        </ul>
        </div>
    </div>
    <div id="formright">
        <PostItemForm/>
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

 // <GetRentItem/>