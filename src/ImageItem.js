import React from 'react';
import './imgItem.css';

export default class ImageItem extends React.Component {

    render() {
        console.log(this.props.creature);
        return (
            <div className='item'>
                <img alt='animal with horns' src={this.props.creature.url} />
                <div className='animal-name'> {this.props.creature.title}</div>
                <div className='description'> {this.props.creature.description}</div>
                <div className='description'> Number of Horns: {this.props.creature.horns}</div>
            </div >
        )
    }
}