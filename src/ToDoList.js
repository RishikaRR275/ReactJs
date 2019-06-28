import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

class ToDoList extends React.Component {
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
                      <Grid>
                        <Button variant="outlined"
                          onClick={() => this.props.editTask(item)}
                        >
                          EDIT
                        </Button>
  
                        <Button variant="outlined"
                          onClick={() => this.props.deleteTask(item)}
                        >
                          DELETE
                      </Button>
                      </Grid>
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
  
  export default ToDoList;