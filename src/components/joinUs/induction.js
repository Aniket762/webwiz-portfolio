import React from "react";
// import reactDom from "react-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Heading } from "../info/info.elements";
import inductionData from "./inductionData";
// import { getThemeProps } from "@material-ui/styles";


const useStyles = makeStyles({})

const InductionCard = (props) =>{

    const classes = useStyles();
    return(

    <div className={classes.inductioncard}>
        <div className={classes.inductioncardleft}>
            <Heading>{props.heading}</Heading>
            <Heading>{props.subheading}</Heading>
        </div>
        <div className={classes.inductioncardright}></div>
    </div>
    )
}

function Induction () {

    const classes = useStyles();
    return(
        <>
         <div className={classes.induction}>
            <div className={classes.inductioncards}>
                {inductionData.map(function ncards(val){
                    return(
                        <InductionCard 
                            heading={val.heading}
                            subheading={val.subheading}
                        />
                    )
                })}
            </div>
         </div>
        </>
    )
}

export default Induction;