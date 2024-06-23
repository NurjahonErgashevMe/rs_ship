import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../../assets/img/ship/sea_transportation.jpg';
import Bg2 from '../../assets/img/ship/vehicle_transportation.jpg';
import Bg3 from '../../assets/img/ship/ship2.jpg';

import Icon1 from '../../assets/img/icon/s1.png';
import Icon2 from '../../assets/img/icon/s2.png';
import Icon3 from '../../assets/img/icon/s3.png';
// import Icon4 from '../../assets/img/icon/s4.png';

const servicesOneData = [
    {
        id: uuidv4(),
        bgImg: Bg1,
        icon: Icon1,
        heading: 'Sea transportation',
        description:'Refine Service’s mission is to offer the best way of transportation for each consumer depending on individual requirements. East Auto LLC offers consolidated cargo, full container carriage and Roll on Roll off service.',
        btnText: 'Learn More',
    },

    {
        id: uuidv4(),
        bgImg: Bg2,
        icon: Icon2,
        heading: 'Vehicle transport',
        description:'Refine Ship transports all type of vehicles inside the USA and overseas , including heavy trucks, sedan, SUVs , regular trucks. Each cargo is similarly significant and valued with your preference of timing.',
        btnText: 'Learn More',
    },

    {
        id: uuidv4(),
        bgImg: Bg3,
        icon: Icon3,
        heading: 'Nationwide hauiling',
        description:'Refine Ship offers trustworthy road car transport services in teamwork with our strong companion driver’s network in the USA. Our scheduled groupage pick up and drop off distribution network is widespread. All transports are accomplished according to contracts made with our customers.',
        btnText: 'Learn More',
    },
];

export default servicesOneData;
