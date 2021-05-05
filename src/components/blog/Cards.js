import React from 'react';
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cards.css'
import Sdata from './Sdata'



function mcard(val) {
    return (
        <div>
            <Card
                title={val.title}
                description={val.description}
            />
        </div>
    );
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

var number;

function repeat() {
   number = Math.floor((Math.random()*Sdata.length-1)+1);
   setTimeout(repeat, 1000);
   console.log(number);
   return number;
};
var no = repeat();
function Cards(props) {
    return (
        <div id="parent_container">
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={true}
                showDots={true}
                ssr={true}
                // infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {Sdata.map(mcard)}
            </Carousel>
            
            <img id="main_bg" src={Sdata[no].img_src} alt="" className="img-container" />        
        </div>      
    )
}

export default Cards
