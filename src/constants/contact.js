import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { ADDRESS, ADDRESS_LINK, EMAIL, PHONE_NUMBER } from '../constants';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'Sent mail asap anytime',
        item1: EMAIL,
        link : `mailto:${EMAIL}`
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: 'call us asap anytime',
        item1: PHONE_NUMBER,
        link : `tel:${PHONE_NUMBER}`
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Sent mail asap anytime',
        item1: ADDRESS,
        link : ADDRESS_LINK
    },
];

export default contactData;
