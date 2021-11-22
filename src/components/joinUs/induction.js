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
            <text>{props.subheading}</text>
        </div>
        <div className={classes.inductioncardright}>
            {/* <image>{props.image}</image> */}
            <img src={props.image} alt=""/>
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