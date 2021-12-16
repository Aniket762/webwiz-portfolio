import React from "react";
// import reactDom from "react-dom";
// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Heading } from "../info/info.elements";
import inductionData from "./inductionData";
// import { getThemeProps } from "@material-ui/styles";


const useStyles = makeStyles({
    induction:{
        width: "100%",
        // height: "120rem",
        padding: "1rem",
        overflow: "hidden",
        backgroundColor: "#2B0032",

        "@media (max-width: 950px)": {
            
        }
    },

    heading:{
        fontSize: "40px",
        fontFamily: "poppins",
        color: "white",
        paddingBottom: '1rem',

        "@media (max-width: 650px)": {
            fontSize: "30px",
        }
    },

    inductioncards:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
    },

    inductioncard:{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",

        "&:nth-child(2)": {
            display: "flex",
            flexDirection: "row-reverse",
            // backgroundColor: "white"

            "@media (max-width: 950px)": {
                flexDirection: "column",
            }
        },

        "@media (max-width: 950px)": {
            flexDirection: "column",
            width: "90%",
            // height: "100%",
        }
    },

    inductioncardleft:{
        width: "50%",
        // height: "400",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",

        "@media (max-width: 950px)": {
            width: "100%", 
            // height: "50%",
            padding: "1rem",
        }
    },

    inductioncardright:{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

        "@media (max-width: 950px)": {
            width: "100%", 
            // height: "50%",
        }
    },

    imageinduction:{
        width: "40rem",
        height: "25rem",

        "@media (max-width: 950px)": {
            width: "22rem", 
            height: "13rem",
        }
    },

    // pinductioncards:nth-child(2){
    //     display: "flex",
    // }
})

const InductionCard = (props) =>{

    const classes = useStyles();
    return(

    <div className={classes.inductioncard}>
        <div className={classes.inductioncardleft}>
            <Heading>{props.heading}</Heading>
            <text>{props.subheading}</text>
        </div>
        <div className={classes.inductioncardright}>
            {/* <image>{props.image}</image> */}
            <img className={classes.imageinduction} src={props.image} alt=""/>
        </div>
    </div>
    )
}

function Induction () {

    const classes = useStyles();
    return(
        <>
         <div className={classes.induction}>
         <div className={classes.heading}>Dream | Develop | Devote</div>
            <div className={classes.inductioncards}>
                {inductionData.map(function ncards(val){
                    return(
                        <InductionCard 
                            heading={val.heading}
                            subheading={val.subheading}
                            image={val.image}
                        />
                    )
                })}
            </div>
         </div>
        </>
    )
}

export default Induction;