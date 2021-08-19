import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    overflow: "hidden",
    
  },
  media: {
    height: 240,
  },

  btn:{
      backgroundColor: "#F6F6F6",
      margin: "auto",
  },

  cardactionarea: {
    backgroundColor: "#F6F6F6",
  }
});

export default function Pcard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardactionarea}>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
          title="daffodil"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Daffodil
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Daffodil Consists Most Of The Required Academic Materials, Curated Only For The Freshers Of NIT Rourkela.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.btn}>
          Learn More
        </Button>
      </CardActions>
    </Card>

    
  );
}