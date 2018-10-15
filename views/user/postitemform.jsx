var React = require("react");

class postItemForm extends React.Component {
    render(){
            //console.log( this.props.hello, this.props.what)

            return(

                <form name="postitemform" method="post" action="/user/postitem">
                    <h3>List Your Items</h3>
                    <p>Item Name:</p>
                    <input name ="item_name" type="text"/>
                    <p>Catergory:</p>
                    <select name="category">
                          <option value="guitar">Guitar</option>
                          <option value="bass">Bass</option>
                          <option value="keyboard">Keyboard</option>
                          <option value="proaudio">Proaudio</option>
                    </select>
                    <p>Description</p>
                    <textarea name="descr" type="text area" />
                    <input name="rent_id" type="hidden" value ="0"/>
                    <button type="submit">List it</button>
                </form>

            );
        };

    }

module.exports = postItemForm;