import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    card:{
        width: "90%",
        height: "100%",
        backgroundColor: "#F6F6F6",
        alignSelf: "center",
        borderRadius: "10px",
        margin: "3rem 5rem 3rem 5rem"
    },

    heading:{
        alignSelf: "flex-end",
        fontSize: "40px",
        color: "black",
        lineHeight: "4",
        fontWeight: "600",
    },

    img:{
        width: "160px",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
    }
})

 const HomeCard = () => {

    const classes = useStyles();
    return (
        <Card className={classes.card} gutterBottom >
            <Typography className={classes.heading} >
                #EVENTS
            </Typography>

            <CardContent className={classes.textContainer}>

            {/* <Image src="https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png" /> */}
            {/* <CardMedia className={classes.img} image={classes.image} /> */}
           
                
            
                <Typography variant="h5" color="inherit" className={classes.subheading}>
                Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                </Typography>

                <CardActions>
                    <Button variant="text" className={classes.btn}>View all events</Button>
                </CardActions>
            </CardContent>

            
        </Card>
    )
}

export default HomeCard