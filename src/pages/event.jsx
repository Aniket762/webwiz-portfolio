import React from 'react';
import { right1,left1,right2,left2 ,right3,left3,right4} from './eventData';
import InfoSection from '../components/info/info';
import Footer from '../components/footer/footer';

function event() {
    return (
        <div className='App'>
            <InfoSection {...right1} />
            <InfoSection {...left1} />
            <InfoSection {...right2} />
            <InfoSection {...left2} />
            <InfoSection {...right3} />
            <InfoSection {...left3} />
            <InfoSection {...right4} />
            <Footer/>
        </div>
    )
}

export default event
