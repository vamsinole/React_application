var React = require('react');
var ReactDom = require('react-dom');
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
require('./css/style.css');
import { Grid, Row, Col } from 'react-flexbox-grid';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, browserHistory} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from 'react-modal';
var About = require('./about');

var ToDoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: [{
        name: 'Vamshi',
        age: '21',
        img:'vamshi.jpg',
        id:'100002878103354'
      },{
        name: 'Sowmith',
        age: '21',
        img:'sowmith.jpg',
        id:'sowmith7'
      },{
        name: 'Bhargav',
        age: '21',
        img:'bhargav.jpg',
        id:'bhargav.veepuri7777'
      }],
      age : 30,
      modalIsOpen: false
    }
  },
  render: function() {
    var ager = setTimeout(function() {
      this.setState({
        age: 40
      })
    }.bind(this),5000);

    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      )
    }.bind(this));
    return(
      <MuiThemeProvider>
        <Grid fluid>
          <Row center="lg">
            <Col xs={12} md={8} lg={8}>
            <div class="" id="list">
              <h2>Friends</h2>
              <RaisedButton className="button_height" type="submit" primary label="Modal" onClick={this.openModal} />
              <Modal isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className="content"
                contentLabel="Modal">
                  <h1>Modal Content</h1>
                  <RaisedButton className="button_height" type="submit" primary label="Close" onClick={this.closeModal}/>
              </Modal>
              <p>{this.state.age}</p>
              <ul>
                {todos}
              </ul>
              <AddItem addItem={this.addItem}/>
            </div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  },
  clicked: function() {
    console.log('clicked');
  },
  doubleClicked: function() {
    console.log('double clicked');
  },
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos : updatedTodos
    });
  },
  addItem: function(name, age) {
    var updatedTodos = this.state.todos;
    var newTodo = {name: name, age: age, img: 'user.png'};
    updatedTodos.push(newTodo);
    this.setState({
      todos: updatedTodos
    })
  },
  openModal: function() {
    this.setState({
      modalIsOpen: true
    })
  },
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
});

var App = React.createClass({
    render: function(){
        return(
            <BrowserRouter history={browserHistory}>
              <div>
                <Route path="/" component={ToDoComponent}></Route>
                <Route path="/about" component={About}></Route>
                </div>
            </BrowserRouter>
        );
    }
});

ReactDom.render(<App />, document.getElementById('todo-label'));
