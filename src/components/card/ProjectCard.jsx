import React from 'react';
import {Grid, makeStyles} from '@material-ui/core'
import Pcard from './Pcard';

const useStyles = makeStyles({
root: {
    padding: "3rem",
},

pcard: {
    color: "#000"
},

heading:{
    fontSize: "60px",
    fontWeight: "medium"
}


})

const ProjectCard = () => {
    const classes = useStyles();

    const cardDetails = [{
        id: 1,
        title: "Daffodil",
        details: "Course material for 1st year engineering students in IIT/NITs.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png",
        links: "https://webwiznitr.github.io/Project-daffodil/"
      },{
        id: 2,
        title: "Clubopedia",
        details: "Clubopedia ~ an encyclopedia of clubs of NITR.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637354275/webwiz-portfolio/others/2e5da4982e4a77c244c6e5b16fd2df88_l64bhc.webp",
        links: "https://clubopedia.netlify.app/"
      },{
        id: 3,
        title: "Webdev Roadmap",
        details: "Road-map to become Web Beast.",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637354760/webwiz-portfolio/others/568063047a31792325f9052f28df1b97_p2uzyt.webp",
        links: "https://webwiz.notion.site/webwiz/Road-map-to-became-Web-Beast-Webwiz-7b0334c890c7482a9738687b757a92da"
      }];

    return(
        <>
        <div className={classes.heading}>Projects</div>
        <Grid container spacing={0} className={classes.root}>
            {cardDetails.map(item => (
                <Grid item xs={12} sm={4}>
                    <Pcard 
                    key={item.id} image={item.image} details={item.details} title={item.title} links={item.links} className={classes.pcard}/>
                </Grid>
            ))}
        </Grid>
        </>
    )
}

export default ProjectCard;
