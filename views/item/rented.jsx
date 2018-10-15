var React = require("react");


class getRentItem extends React.Component {

    render() {
        console.log( this.props.rentItem);
        console.log("==rentitem==",this.props.rentItem);

        var getRentItem = this.props.rentItem;

            const rentItem = getRentItem.map(getRentItem => {

                let itemUrl = '/item/' + getRentItem.id;

        return <li className="userInventory" key={getRentItem.itemname}><a href={itemUrl}>{getRentItem.itemname}</a></li>});

  return (
           <ul>
           {rentItem}
           </ul>

      );
  }
}

module.exports = getRentItem;