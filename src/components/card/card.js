import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import { Name,Tagline, SocialIcons, SocialIconLink } from "./cardElement";

const useStyles = makeStyles({
  root: {
    width:"300px",
    margin: 20
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
              <CardMedia
             className={classes.media}
            image={props.image}
            title={props.name}

        />
        <CardContent>
          <Name>{props.name}</Name>
          <Tagline>{props.tagline}</Tagline>
          <SocialIcons>
            <SocialIconLink
              href={props.github}
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href={props.linkedin}
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href={props.instagram}
              target="_blank"
              aria-label="Instagram"
            >
             <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}