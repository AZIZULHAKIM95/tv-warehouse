import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {

    return (
        <div className='bg-primary'>
            <div className='container' >
                <div className='p-3 d-flex justify-content-between align-items-center'>

                    <p className="text-white" > Copyright &#9400; 2022 THE TV WAREHOUSE. All rights reserved.</p>
                    <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Footer;