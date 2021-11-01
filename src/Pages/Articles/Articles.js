import React from 'react';
import { Accordion, ProgressBar } from 'react-bootstrap';
import './Articles.css'

const Articles = () => {
    return (
        <div>
            <div>
                <div className="row worldwide-branches">
                    <div className="col-lg-6">
                        <p style={{ color: "gray" }}>WorldWide Branches</p>
                        <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/landing-img-19.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <p style={{ color: "gray" }}>News Paper</p>

                        <img src="https://online.fliphtml5.com/bqct/hpdh/files/large/2.jpg" alt="" />
                    </div>

                </div>
            </div>

            <div className='mx-5 my-5'>
                <div>
                    <h3> Our customer Progress of last few years (2016-2021)</h3>
                    <div>
                        <ProgressBar striped variant="success" now={40} />

                        <ProgressBar striped variant="info" now={60} />
                        <ProgressBar striped variant="warning" now={80} />
                        <ProgressBar striped variant="danger" now={90} />
                        <ProgressBar striped variant="danger" now={90} />
                    </div>

                    <div className='accortion-items'>
                        <h3> Some Instructors Feedback</h3>
                        <div>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Why this health center is best?</Accordion.Header>
                                    <Accordion.Body>
                                        The way they handle customers are really great and we know it will be increased in future , so everybody is recommemded to visit our area.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>About prices?</Accordion.Header>
                                    <Accordion.Body>
                                        We are very glad to inform you that ,in this agency everything is very low price.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

            </div>

            <div className='articles'>
                <div className='head-line'>
                    <p style={{ color: 'gray' }}>FROM THE BLOG</p>
                    <h3>ARTICLES & NEWS</h3>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-12 items">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/11/para-05-1024x683.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <p>OUR NEWS</p>
                                <h3>Travel Events</h3>
                                <p>
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod .</p>
                                <button className='btn-dsn'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 items">
                        <div className="row">
                            <div className="col-lg-6 second-part ">
                                <img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/11/para-06.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 second-part">
                                <p>TRAVEL HUNT</p>
                                <h3>New Routes</h3>
                                <p>
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod .</p>
                                <button className='btn-dsn-part2'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12 items">
                        <div className="row">
                            <div className="col-lg-6 first-part">
                                <p>BEACH LOVERS</p>
                                <h3>Best Beaches</h3>
                                <p>
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod .</p>
                                <button className='btn-dsn-part2'>Read More</button>
                            </div>
                            <div className="col-lg-6 first-part">
                                <img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/04/para-11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 items">
                        <div className="row">

                            <div className="col-lg-6">
                                <p>GO GREEN</p>
                                <h3>Love Travel</h3>
                                <p>
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod .</p>
                                <button className='btn-dsn'>Read More</button>
                            </div>

                            <div className="col-lg-6">
                                <img src="http://www.nicdarkthemes.com/themes/travel/wp/demo/city-tours/wp-content/uploads/sites/5/2018/11/para-04.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Articles;