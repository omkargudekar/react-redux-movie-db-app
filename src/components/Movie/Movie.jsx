import React, { Component } from 'react';
import _ from 'lodash';


var keyToTextMap = new Map({
  Title: "Title",
  Rated: "Viewers Rating",
  Released: "Release Date"
});

var keyToValueRenderFnMap = new Map({
    Title: (value)=>{
        return value;
    },
    Poster: (value)=>{
        return <img src={value} alt="Movie Poster" />;
    }
});

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
            rowItems.push(keyToTextMap(key)||key);
            rowItems.push(keyToValueRenderFnMap(value) || value);
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