import React from 'react';
import { Accordion } from 'react-bootstrap';

const Qstn = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="d-flex justify-content-center">
                    <h1 className="text-info">Frequently Asked Questions</h1>
                </div>
                <br />
                <br />
                <br />

                    <div className="">
                        <Accordion defaultActiveKey={['0']} flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <strong className="text-dark">
                                        What forms of payment are accepted at the tv warehouse?
                                    </strong>
                                </Accordion.Header>

                                <Accordion.Body>
                                    The tv ware house are4 accepts credit cards.
                                </Accordion.Body>

                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>

                                    <strong className="text-dark">
                                        How is the tv warehouse rated?
                                    </strong>

                                </Accordion.Header>

                                <Accordion.Body>
                                    the tv warehouse has 5.0 stars from 4 reviews.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>

                                    <strong className="text-dark">
                                        What days are the tv warehouse open.?
                                    </strong>

                                </Accordion.Header>

                                <Accordion.Body>
                                    Mon-Sat 12.00 pm - 7.00 pm and Sun 12.00 pm - 6.00 pm.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>

            </div>
        </div>
    );
};

export default Qstn;