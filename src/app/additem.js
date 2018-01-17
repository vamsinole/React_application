var React = require('react');
var ReactDom = require('react-dom');
require('./css/style.css');
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Provider } from 'react-redux'
var AddIem = React.createClass({
  render: function() {
    return(
          <form id="add-todo" onSubmit={this.handleAdd}>
            <TextField floatingLabelText="Enter Name" hintText="Enter Name" ref="newName" required/>
            <TextField floatingLabelText="Enter Age" hintText="Enter Age" type="number" ref="newAge" required/>
            <RaisedButton className="button_height" type="submit" primary label="Add" />
          </form>
    );
  },

  handleAdd: function(e) {
    e.preventDefault();
    this.props.addItem(this.refs.newName.getValue(), this.refs.newAge.getValue());
    this.refs.newName.reset();
    this.refs.newAge.reset();
  }
});

module.exports = AddIem;
