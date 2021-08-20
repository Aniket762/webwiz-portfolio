import React from 'react';
import {Grid, makeStyles} from '@material-ui/core'
import Pcard from './Pcard';

const useStyles = makeStyles({
root: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
},


})

const ProjectCard = () => {
    const classes = useStyles();
    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item xs={12} sm={4}>
                <Pcard className={classes.pcard}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Pcard/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Pcard/>
            </Grid>
        </Grid>
    )
}

export default ProjectCard;
