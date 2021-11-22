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
    },

    heading:{
        fontSize: "60px",
        fontFamily: "poppins",
        color: "white",
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
        },
    },

    inductioncardleft:{
        width: "50vw",
        height: "400",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
    },

    inductioncardright:{
        width: "50vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    imageinduction:{
        width: "40rem",
        height: "25rem"
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
         <div className={classes.heading}>Join Us</div>
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