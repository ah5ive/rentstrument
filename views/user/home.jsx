var React = require("react");

class home extends React.Component {
  render() {

console.log('items:',this.props.items);
console.log("home cookie",this.props.cookie);

var userCookie = this.props.cookie;
var allListItems = this.props.items;
    if(userCookie == null){
      userCookie.username = ' '
    }

    let url = 'user/' + userCookie.userId;
    console.log("===url===",url)



    //{allListItems.map(allListItems =>({allListItems.rent_id}))}

    //console.log("alllistitems", {allListItems.map(allListItems =>({allListItems.rent_id}))})

    const items = this.props.items.map(allListItems => {

            var rentavailable;

              if (allListItems.rent_id !== 0){
                    var rentavailable = 'Not Availble'
                        } else {
                    var rentavailable = 'Available'
                            };

    return <li className="listitems" key={allListItems.itemname}><a href="#">{allListItems.itemname}</a>
                <p>{rentavailable}</p>
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
      <li><a href="/user/new">Sign up</a></li>
      <li><a href="/user/login">Sign in</a></li>
      <li><a href="/user/logout">Sign out</a></li>
      <li><a href="/">Home</a></li>
    </ul>
    </nav>
  <main>
    <div id="header">
      <h1>Rent Your Music Gears And Instruments</h1>
      <h3>You can rent instruments for you gigs and function.</h3>
    </div>
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