import React from 'react';
import './imgItem.css';

export default class ImageItem extends React.Component {
    exItem = {
        url:
            "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg",
        title: "Happy Jackson's Chameleon",
        description: "These are really common in Hawaii",
        keyword: "chameleon",
        horns: 2
    }

    render() {
        return (
            <div className='item'>
                <img alt='animal with horns' src={this.exItem.url} />
                <div className='animal-name'> {this.exItem.title}</div>
                <div className='description'> {this.exItem.description}</div>
                <div className='description'> Number of Horns: {this.exItem.horns}</div>
            </div >
        )
    }
}