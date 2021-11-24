import React from 'react';
import { right1,left1,right2,left2 ,right3,left3,right4, right5, left4, left6, left5, right6, right7} from './eventData';
import InfoSection from '../components/info/info';

function event() {
    return (
        <div className='App'>
            <InfoSection {...right7} />
            <InfoSection {...left6} />
            <InfoSection {...right6} />
            <InfoSection {...left5} />
            <InfoSection {...right5} />
            <InfoSection {...left4} />
            <InfoSection {...right4} />
            <InfoSection {...left3} />
            <InfoSection {...right3} />
            <InfoSection {...left2} />
            <InfoSection {...right2} />
            <InfoSection {...left1} />
            <InfoSection {...right1} />
        </div>
    )
}

export default event
