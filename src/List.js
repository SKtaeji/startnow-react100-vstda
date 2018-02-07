import React, { Component } from 'react';
import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inEdit: false,
      description: props.todo.description,
      priority: props.todo.priority,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSave(index) {
    this.props.handleSave(this.state, index);
    this.setState ({ inEdit: false })
  }

  handleEdit() {
    this.setState ({ inEdit: !this.state.inEdit });
  }

  handleDelete() {
    this.props.deleteTodo(this.state);
  }

  render() {
    return (
      <li className={`skimmy success list-group-item list-group-item-${this.state.priority}`}>
        {this.state.inEdit ? (
          <form onSubmit={event => event.preventDefault() }>
            <div className="form-group">
              <div className="line">
                <label>Description</label>
              </div>
              <textarea 
              className="update-todo-text desc"
              name="description"
              value={this.state.description}
              onChange={this.handleUpdate} />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select className="form-control create-todo-priority desc"
              value={this.state.priority}
              name="priority"
              onChange={this.handleUpdate}>
                <option hidden value="skimmy">Select a Priority</option>
                <option value="danger">High</option>
                <option value="warning">Medium</option>
                <option value="success">Low</option>
              </select>
            </div>
            <button 
            className="btn btn-success btn-md update-todo"
            onClick={ () => this.handleSave(this.props.index) }>Save</button>
          </form>
        
      ) : (

          <div className="ambition">
              <p>{this.state.description}</p>
              <div>
                <span onClick={this.handleEdit}>
                  <i className="fas edit-todo fa-edit edit-todo" name="btnedit" />
                </span>
                <span onClick={this.handleDelete}>
                  <i className="fas delete-todo fa-trash-alt delete-todo" name="btndelete" />
                </span>
              </div>
          </div>

        )}

      </li>
    )
  }
}

export default List;