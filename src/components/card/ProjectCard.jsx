import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import Pcard from './Pcard';

const useStyles = makeStyles({
  root: {
    padding: "0.5rem",
  },

  pcard: {
    color: "#000",
    // padding: "1rem"
  },

  heading: {
    fontSize: "60px",
    fontWeight: "medium"
  }


})

const ProjectCard = () => {
  const classes = useStyles();

  const cardDetails = [{
    id: 6,
    title: "Hackodisha",
    details: "A 36 hours community focused online Hackathon organized by Webwiz NIT Rourkela on the occassion of diamond jubliee.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1639648872/webwiz-portfolio/others/P01_Hackodisha_announcement_s01bom.png",
    links: "https://hackodisha.xyz/"
    },
    
    {
    id: 1,
    title: "Daffodil",
    details: "Course material for 1st year engineering students in IIT/NITs.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png",
    links: "https://webwiznitr.github.io/Project-daffodil/"
  },
  {
    id: 2,
    title: "Clubopedia",
    details: "Clubopedia ~ an encyclopedia of clubs of NITR.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637354275/webwiz-portfolio/others/2e5da4982e4a77c244c6e5b16fd2df88_l64bhc.webp",
    links: "https://clubopedia.netlify.app/"
  },
  {
    id: 3,
    title: "Webdev Roadmap",
    details: "Road-map to become Web Beast.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637354760/webwiz-portfolio/others/568063047a31792325f9052f28df1b97_p2uzyt.webp",
    links: "https://webwiz.notion.site/webwiz/Road-map-to-became-Web-Beast-Webwiz-7b0334c890c7482a9738687b757a92da"
  },
  {
    id: 4,
    title: "Ebony!",
    details: "A collection of wonderful effects to enhance your website.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637772715/webwiz-portfolio/others/3d42d8c71ceb91a03a53de5631c4b576_mxxenv.webp",
    links: "https://project-ebony.netlify.app/"
  },
  {
    id: 5,
    title: "Basil",
    details: "A guide to help beginners in different fields of technology like AI, ML, Web Dev, App Dev etc.",
    image: "https://res.cloudinary.com/webwiznitr/image/upload/v1637773009/webwiz-portfolio/others/01890923f178ea5693c3816aa0bc65e2_xge9gq.webp",
    links: "http://tech-resources.herokuapp.com/"
  },
  ];

  return (
    <>
      <div className={classes.heading}>Projects</div>
      <Grid container className={classes.root}>
        {cardDetails.map(item => (
          <Grid item spacing={3} xs={12} sm={6} md={6} lg={4}>
            <Pcard
              key={item.id} image={item.image} details={item.details} title={item.title} links={item.links} className={classes.pcard} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProjectCard;