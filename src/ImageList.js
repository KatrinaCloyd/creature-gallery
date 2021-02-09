import React from 'react';
import './imglist.css';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <div className='imglist'>
                <ImageItem />
                <ImageItem />
                <ImageItem />
                <ImageItem />
            </div>
        )
    }
}
