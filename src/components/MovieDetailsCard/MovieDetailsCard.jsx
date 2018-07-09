import React from 'react';
import {Card,Row,Col} from 'antd'
import Classes from './MovieDetailsCard.css'
const MovieDetailsCard = props => {
    let data= props.data
    return (
        <Card title={data.Title + ' ( ' + data.Year + '  )'} className={Classes['movie-details']}>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={6} lg={4} xl={4}>
                    <img src={data.Poster} alt="" className={Classes['movie-details-poster']}/>
                </Col>
                <Col xs={24} sm={24} md={18} lg={20} xl={20}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Writer:
                                 </Col>
                                <Col span={24}>
                                    {data.Writer}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Director:
                                 </Col>
                                <Col span={24}>
                                    {data.Director}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Actors:
                                 </Col>
                                <Col span={24}>
                                    {data.Actors}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Writer:
                                 </Col>
                                <Col span={24}>
                                    {data.Writer}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Runtime:
                                 </Col>
                                <Col span={24}>
                                    {data.Runtime}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Genre:
                                 </Col>
                                <Col span={24}>
                                    {data.Genre}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Writer:
                                 </Col>
                                <Col span={24}>
                                    {data.Writer}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} className={Classes['movie-details-legend']}>
                                    Plot:
                                 </Col>
                                <Col span={24}>
                                    {data.Plot}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Card>

    );
};

export default MovieDetailsCard;