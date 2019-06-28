import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
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

// TAKES THE TO-DO AS INPUT

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allTasks: [] };
  }

  addTask = (newTask) => {
    this.setState({ allTasks: this.state.allTasks.concat(newTask) });
    console.log(this.state.allTasks);
  }

  deleteTask = (task) => {
    this.setState(state => {
      const allTasks = state.allTasks.filter((item) => task !== item);
      return {
        allTasks,
      };
    });
  }

  editTask = (origTask) => {
    console.log(origTask);
    var newTask = prompt("Enter the new to-do");
    console.log(newTask);
    this.setState(state => {
      const allTasks = state.allTasks.map((item) => {
        if (item === origTask) {
          return newTask;
        } else {
          return item;
        }
      });

      return {
        allTasks,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="md"

        >
          <div>
            <Heading />
            <ToDoList
              allTasks={this.state.allTasks}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
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
