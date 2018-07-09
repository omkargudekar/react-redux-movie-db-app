import React from 'react';
import {Card,Row,Col} from 'antd'
import Classes from './MovieSearchResult.css'
import { Link } from 'react-router-dom'
const { Meta } = Card;

const MovieSearchResult = (props) => {

    const renderSearchResult=()=>{
        if (props.searchResult && props.searchResult.length>0){
            return props.searchResult.map((el, index) => {
                return (
                    <Col key={"movie-card_" + index} xs={24} sm={12} md={8} lg={6} xl={4}>
                        <Link to={{ pathname: '/movie/' + el.imdbID }}>
                            <Card
                                className={Classes["movie-card"]}
                                hoverable
                                cover={<img alt={el.Title} 
                                className={Classes["movie-card-poster"]} 
                                src={el.Poster} />}
                            >
                                <Meta
                                    title={el.Title}
                                    description={el.Year}
                                />
                            </Card> 
                        </Link>
                    </Col>
                )
                
            });
        }
        return <Col>No result to display.</Col>
    }
    
    return (
        <Row type="flex" justify="space-around" align="middle">
            {renderSearchResult()}
        </Row>
    );
};

export default MovieSearchResult;