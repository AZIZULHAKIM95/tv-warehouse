import React from 'react';
import './ClientFeedback.css'
import useFeedback from '../../Hooks/useFeedback'
import SingleFeedback from '../../Home/SingleFeedback/SingleFeedback'
import { CardGroup } from 'react-bootstrap';

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useFeedback()
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-info'>REAL FEEDBACK FROM REAL CLIENTS</h1>
            <br />
            <br />
            <CardGroup>
                {
                    feedbacks.map(feedback => <SingleFeedback
                        key={feedback.id}
                        feedback={feedback}
                    ></SingleFeedback>)
                }
            </CardGroup>
        </div>


    );
};

export default ClientFeedback;