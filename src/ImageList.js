import React from 'react';
import './imglist.css';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        const creatureNodes = this.props.creatureNodes.map(creature =>
            <ImageItem
                key={creature.title}
                creature={creature} />
        );
        return (
            <div className='imglist'>
                {creatureNodes}
            </div>
        )
    }
}
