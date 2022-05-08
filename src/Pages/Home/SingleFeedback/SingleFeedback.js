import React from 'react';
import { Card } from 'react-bootstrap';

const SingleFeedback = (props) => {
    const { name, comment, img } = props.feedback
    return (
        <div className='col-md-4'>
            <Card className='m-2'>
                <Card.Img className='w-25 m-auto bg-light' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
};

export default SingleFeedback;