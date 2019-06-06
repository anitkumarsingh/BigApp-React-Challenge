import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme =>({
    Paper:{
        padding:20,
        marginTop:20,
        marginBottom:20,
        height:500,
        overflowY:'auto',
        marginLeft:'10px',
        marginRight:'10px'
    },
    perm:{
        left: 0,
        top: 10,
    },
    droppable:{
        right: 0,
        top: 10,
        borderLeft: '1px dotted'
   },
   containerDrag:{
    textAlign: 'center'
   },
   draggable:{
    backgroundColor: 'yellow',
    margin: '5px auto',
    lineHeight: '3em',
   },
   btnContainer:{
    display:'block',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:160
   },
   fab: {
     marginTop: theme.spacing(1),
  },
})

class DnD extends React.Component{
    state = {
        tasks: [
            {name:"Travel",category:"permissions", bgcolor: "yellow"},
            {name:"Rule Class",category:"permissions", bgcolor: "blue"},
            {name:"Travel Policy", category:"permissions", bgcolor:"pink"},
            {name:"Policy Violations Reasons", category:"permissions", bgcolor:"skyblue"},
            {name:"Travel Rule", category:"permissionGranted", bgcolor:"skyblue"},
            {name:"Travel Vendor Exclusion", category:"permissionGranted", bgcolor:"skyblue"},
            {name:"Contact", category:"permissionGranted", bgcolor:"skyblue"},
            {name:"Travel Discount", category:"permissions", bgcolor:"skyblue"},
          ]
    }

    onDragStart = (event, id) => {
        console.log('dragstart:',id);
        event.dataTransfer.setData("id", id);
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
       let id = event.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
    render(){
        const { classes } = this.props
        var tasks = {
            permissions: [],
            permissionGranted: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                     onDragStart = {(e) => this.onDragStart(e, t.name)}
                     draggable
                     className={classes.draggable}
                     style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });
   
    return(
        <div className={classes.containerDrag}>
            <Grid container>
            <Grid item sm={5}>
                <Paper className={[classes.perm,classes.Paper].join(' ')}
                       onDragOver={(e)=>this.onDragOver(e)}
                       onDrop={(e)=>{this.onDrop(e, "permissions")}}
                >
                        {tasks.permissions}
                </Paper>
            </Grid>
            <Grid item sm={1}>
                <Paper className={classes.Paper}>
                    <div className={classes.btnContainer}>
                        <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                            {'>'}
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="Edit" className={classes.fab}>
                            {'<'}
                        </Fab>
                    </div>
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper 
                        className={[classes.droppable,classes.Paper].join(' ')} 
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "permissionGranted")}
                >
                        {tasks.permissionGranted}
                </Paper>
            </Grid>
            </Grid>
        </div>
    )
   }
}
export default  withStyles(styles)(DnD);