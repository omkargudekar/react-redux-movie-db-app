import React, { Component } from 'react';
import _ from 'lodash';


const dataConfig={
    Title:{
        keyToText:'Title',
        renderFn:(value)=>{
            return value;
        }
    },
    Rated:{
        keyToText: 'Viewers Rating',
    },
    Poster:{
        renderFn: (value) => {
            return <img src={value} alt="Movie Poster" />;
        }
    },
    Released:{
        keyToText: 'Release Date',
    }
}

const getDataConfigProperty=(key,config)=>{
    if (dataConfig[key] && dataConfig[key][config]){
        return dataConfig[key][config];
    }
    return null;
}


class Movie extends Component {

    getTableRow = (rowItems) => {
        let renderedColumns = _.forEach(rowItems,(el)=>{
            return <td>el</td>
        });
        return <tr>{renderedColumns}</tr>
    }
    getTableBody = (data)=>{
        let tableBody=[];
        _.forEach(data,(key,value)=>{
            let rowItems=[];
            rowItems.push(getDataConfigProperty(key,'keyToText') || key);
            let renderFn = getDataConfigProperty(key, 'renderFn') || null;
            rowItems.push((renderFn) ? renderFn(value) : value);
            tableBody.push(this.getTableRow(rowItems));
        });
    }

    renderTable = ()=>{
        return (
            <table>
                <tbody>{this.getTableBody(this.props.data)}</tbody>
            </table>
        );
    }

    render() {
        return <React.Fragment>{this.renderTable()}</React.Fragment>;
    }
}



export default Movie;