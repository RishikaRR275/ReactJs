import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';

class ToDoForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
      this.state = { textFieldValue: '' };
    }
    
    handleTextFieldChange(event) {
      event.preventDefault();
      this.setState({
        textFieldValue: event.target.value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const task = this.state.textFieldValue;
      this.setState({
        textFieldValue: ''
      });
      if (task !== "") {
        this.props.addTask(task);
      }
    }
  
    render() {
      return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <TextField
              id="outlined-with-placeholder"
              placeholder="Enter a new to-do..."
              variant="outlined"
              ref="newTask"
              style={{ width: 500 }}
              value={this.state.textFieldValue}
              onChange={this.handleTextFieldChange}
            />
            <Button
              variant="outlined"
              onClick={this.handleSubmit}
            >
              Add Task
            </Button>
          </Grid>
        </div>
      );
    }
  }


  export default ToDoForm;