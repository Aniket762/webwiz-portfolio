import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import FLAG from '../../assets/images/Vector.png'
import SESSION from '../../assets/images/Vector5.png'
import WORKSHOP from '../../assets/images/Vector3.png'
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #FFF;
    background-color: #490055;
    
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const useStyles = makeStyles({

    eventssection:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        width: "90%",
        height: "100%",
        // backgroundColor: "#FFF",
        background: "#2B0032",
        alignSelf: "center",
        borderRadius: "10px",
        margin: "3rem 5rem 3rem 5rem",
        padding: 20,
        
        "@media (max-width: 1100px)": {
            margin: "3rem 1rem 3rem 1rem",
        }
    },

    headingmain: {
        fontSize: "32px",
        color: "#f6f6f6",
        fontWeight: "600",
        textAlign: 'left',

        borderRight: "4px solid #fff", 
        flex: 1, 
        padding: 30,

        "@media (max-width: 1100px)": {
            borderRight: "none", 
            borderBottom: "4px solid #fff",
            padding: 15,
            fontSize: "28px",
        },

    },

    headingbox:{
        padding: 30,
        flex: 1,
        display: "flex",
        justifyContent: "space-between",

        "@media (max-width: 1100px)": {
            padding: 15,
        }

    },

    heading: {
        fontSize: "32px",
        color: "#f6f6f6",
        fontWeight: "600",
        textAlign: 'left',

        "@media (max-width: 1100px)": {
            fontSize: "24px",
        },

        "@media (max-width: 700px)": {
            fontSize: "17px",
        }
    },

    subheading: {
        fontSize: "20px",
        color: "#f6f6f6",
        fontWeight: "600",
        textAlign: 'left',

        "@media (max-width: 1100px)": {
            fontSize: "18px",
        },

        "@media (max-width: 700px)": {
            fontSize: "17px",
        }
    },

    img: {
        width: "160px",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
    },
    header: {
        display: "flex",
        justifyContent: 'space-between',

        "@media (max-width: 1100px)": {
            flexDirection: 'column',
        }
    },

    textContainer: {
        display: "flex",
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 50,
        flexWrap: 'wrap',

        "@media (max-width: 1300px)": {
            marginTop: 25,
            marginBottom: 25,
            padding: 0,
        }
    },

    innerCardRight: {
        width: "350px",
        textAlign: 'left',
        backgroundColor: "#E0F0FF",
        padding: 25,
        borderRadius: 25,
        // margin: 20,

        '&:hover': {
            opacity: 0.8,
            cursor: 'pointer'
        },

        "@media (max-width: 1300px)": {
            marginTop: 25,
            marginBottom: 25,
        }
    },
    innerCardCenter: {
        width: "350px",
        textAlign: 'left',
        backgroundColor: "#FFE8CD",
        padding: 25,
        borderRadius: 25,

        '&:hover': {
            opacity: 0.8,
            cursor: 'pointer'
        },

        "@media (max-width: 1300px)": {
            marginTop: 25,
            marginBottom: 25,
        }
    },
    innerCardLeft: {
        width: "350px",
        textAlign: 'left',
        backgroundColor: "#C7EFEE",
        padding: 25,
        borderRadius: 25,

        '&:hover': {
            opacity: 0.8,
            cursor: 'pointer'
        },

        "@media (max-width: 1300px)": {
            marginTop: 25,
            marginBottom: 25,
        }
    }
})

const HomeCard = () => {

    const classes = useStyles();
    return (
        <div className={classes.eventssection}>
        <Card className={classes.card} gutterBottom>
            <div className={classes.header}>

                <Typography className={classes.headingmain} >
                    <span style={{
                        color: "#f6f6f6"
                    }}>Webwiz</span> takes you on amazing voyages <br />
                    every turn of the way.
                </Typography>

                <div className={classes.headingbox}>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            1
                        </Typography>
                        <Typography className={classes.subheading} >
                            Year
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            2
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} className={classes.subheading} >
                            Flagship
                            <br /> Events
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            50+
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} className={classes.subheading} >
                            Workshop &
                            <br /> Sessions
                        </Typography>
                    </div>
                </div>
            </div>

            <CardContent className={classes.textContainer}>
                {/* <Link href='http://hackodisha.xyz/'> */}
                    <div className={classes.innerCardLeft}>
                        <img src={FLAG} alt="" />
                        <h4 style={{ margin: 0 }}>Flagship Event</h4>
                        <p>
                            Hackodisha is what put us on the map and define the way Webwiz moves forward.
                        </p>
                    </div>
                {/* </Link> */}

                <div className={classes.innerCardCenter}>
                    <img src={SESSION} alt="" />
                    <h4 style={{ margin: 0 }}>Sessions</h4>
                    <p>
                        Learn and teach and the baton is passed
                    </p>
                </div>
                <div className={classes.innerCardRight}>
                    <img src={WORKSHOP} alt="" />
                    <h4 style={{ margin: 0 }}>Workshop</h4>
                    <p>
                    We believe the best way to learn is through experiencing and we make sure we give you lots of it.
                    </p>
                </div>
            </CardContent>
            <Link href="/events">
                <Button>
                Check what's more
                </Button>
                {/* Let’s check out  */}
                {/* More events */}
            </Link>

        </Card>
        </div>
    )
}

export default HomeCard
