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

    const cardDetails = [{
        id: 1,
        title: "Daffodil",
        details: "Course material for 1st year engineering students in IIT/NITs.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
      },{
        id: 2,
        title: "Clubopedia",
        details: "Clubopedia ~ an encyclopedia of clubs of NITR.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
      },{
        id: 3,
        title: "Webdev Roadmap",
        details: "Road-map to become Web Beast.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
      }];

    return(
        <Grid container spacing={0} className={classes.root}>
            {cardDetails.map(item => (
                <Grid item xs={12} sm={4}>
                
                    <Pcard key={item.id} image={item.image} details={item.details} title={item.title} className={classes.pcard}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ProjectCard;
