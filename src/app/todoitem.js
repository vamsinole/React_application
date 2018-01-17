var React = require('react');
var ReactDom = require('react-dom');
require('./css/style.css');
import Card from 'material-ui/Card';
var TodoItem = React.createClass({
  render: function () {
    return(
      <li>
        <Card className="p-5-10 hover-bg">
          <div className="todo-item">
            <span><img src={this.props.item.img} className="img-small" alt="" /></span>
            <span className="item-name">{this.props.item.name}</span>
            <span className="item-name">{this.props.item.age}</span>
            <span className="item-remove" onClick={this.handleDelete}>x</span>
          </div>
        </Card>
      </li>
    )
  },

  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
