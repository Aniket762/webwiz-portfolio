import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-weight: 600;
  border-radius: 20px;
  background-color: #490055;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    
  }

  &:not(:last-of-type) {
    margin-right: 7%;
  }
`;

const useStyles = makeStyles({
  root: {
    maxWidth: '75%',
    margin: "auto",
    overflow: "hidden",
    marginBottom: "5%",
    alignSelf: "center",

    '&:hover': {
      boxShadow: '0px 2px 20px 1px rgba(105, 1, 114, 0.7)'
   },

  },
  media: {
    height: 240,
  },

  btnaction: {
    justifyContent: "center"
  },

  cardactionarea: {
    backgroundColor: "#F6F6F6",
  }
});

export default function Pcard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardactionarea}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="daffodil"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnaction}>
        <Link href={props.links} target="_blank">
          <Button>
            Visit
          </Button>
        </Link>
      </CardActions>
    </Card>


  );
}
