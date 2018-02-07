import React, { Component } from 'react';
import './App.css';
import List from './List'

class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      todoList: [],
      description: '',
      priority: '',
    };

    this.changeNow = this.changeNow.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDeleteTodo = this.HandleDeleteTodo.bind(this);

  }

  changeNow = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  addTodo = () => {
    var todoList = [...this.state.todoList];
    var {priority, description } = this.state;

    todoList.push({ description, priority });
    this.setState({ todoList });
  }

  handleSave = (todo, index) => {
    var todoList = [...this.state.todoList];
    todoList[index] = todo;
    this.setState({ todoList })
  }

  HandleDeleteTodo = (index) => {
    var newList = [...this.state.todoList];
    
    newList.map(key => key.id).indexOf(index.id);

    newList.splice(index, 1);
    this.setState({todoList: newList});
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">

          <h1 className="App-title">Very Simple ToDo App</h1>
          <h6 className="App-subtitle">Never forget anything again.</h6>
          <hr />

        </header>

          <div className="container" id="container">
            
            <div className="row">

              <div name="createNewTodo" className="col-lg-4 col-md-4 col-sm-12">

                <div className="card bg-light">

                  <div className="card-header">Create New ToDo</div>

                  <div className="card-body">

                    <form>

                      <div className="form-group">
                        <label className="card-title" htmlFor="todoList"><b>I want to...</b></label>
                        <textarea 
                        className="create-todo-text" 
                        rows="5"
                        name="description"
                        onChange={this.changeNow} />
                      </div>

                      <div className="form-group">      
                        <label htmlFor="priorityFormControlSelect">What Priority is This?</label>
                        <select 
                        className="form-control create-todo-priority"
                        defaultValue=""
                        name="priority"
                        onChange={this.changeNow}>
                          <option value="" hidden>Select a Priority</option>
                          <option value="danger">High</option>
                          <option value="warning">Medium</option>
                          <option value="success">Low</option>
                        </select>
                      </div>

                    </form>

                  </div>

                  <div className="card-footer">
                          <button 
                          type="submit" 
                          className="btn btn-success btn-block btn-lg create-todo"
                          onClick={this.addTodo}>Save</button>
                  </div>                  

                </div>

              </div>

              <div name="viewTodos" className="col-lg-8 col-md-8 col-sm-12">

                <div className="card bg-light">

                  <div className="card-header">View My ToDos</div>

                  <div className="card-body">
                    {!this.state.todoList.length && 
                    <div>
                      <h4>Welcome to Very Simple ToDo App!</h4>
                      <label name="welcome">Get started now by adding a new todo on the left.</label>
                    </div>
                    }

                    {this.state.todoList.map((todo, index) => {
                      return (
                        <List
                        key={index}
                        todo={todo}
                        deleteTodo={this.handleDeleteTodo}
                        index={index}
                        handleSave={this.handleSave} />
                      );
                    })}
                  </div>

                </div>

              </div>
        
            </div>

          </div>
        
      
      </div>
    );
  }
}

export default App;
