import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import { spacing } from '@material-ui/system';
//import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  Paper: {
    padding: '0 30px',
  },

  heading: {
    background: '#00b3b3',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 75,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    alignItems: 'center',
  },

  button: {
    margin: theme.spacing(1),
    alignItems: 'left'
  },
}));

function Heading() {
  const headingStyle = useStyles();
  return (
    <div >
      <AppBar position="static" className={headingStyle.heading}>
        <Toolbar align="center">
          <Typography variant="h2" >
            <b>TO-DO  LIST</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    const index = event.target.key;
    console.log(index);
    
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.allTasks.map(item => (
            <Paper key={item} style={{ padding: 5, margin: 5 }}>
              <Typography variant="h5">
                <li key={item}>
                  <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    {item}
                    <Button variant="outlined" 
                    key = {item}
                    onClick = {this.handleClick}                   
                    >
                      DELETE
                    </Button> 
                  </Grid>
                </li>
              </Typography>
            </Paper>

          ))}
        </ul>
      </div>
    );
  }
}

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.state = { textFieldValue: '' };
  }
  componentDidMount() {
    this.refs.newTask.focus();
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
        {/* <input type="text" placeholder='Enter a new to-do...' ref='newTask'></input> */}
        <Grid container
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
          {/* <input type="button" value="Add Task" onClick={this.handleSubmit}></input> */}
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

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allTasks: [] };
    this.addTask = this.addTask.bind(this);
  }
  addTask(newTask) {
    this.setState({ allTasks: this.state.allTasks.concat(newTask) });
    console.log(this.state.allTasks);
  }
  deleteTask(task){
    console.log(task);
  }
  
  render() {
    
    return (
      <React.Fragment>
        <CssBaseline />
        <Container 
        maxWidth="md"
        border={3}          
        >
          <div>
            <Heading />
            <ToDoList 
            allTasks={this.state.allTasks}
            deleteTask ={this.deleteTask}
             />
            <Grid container
            direction="row"
            alignItems="flex-end"           
            >
              <ToDoForm addTask={this.addTask} />
            </Grid>
          </div>
        </Container>
      </React.Fragment>

    );
  }
}
export default ToDoApp;
