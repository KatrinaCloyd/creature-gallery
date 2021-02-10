import React from 'react';
import style from './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <h2>Horned Creatures</h2>
            </header>
        )
    }
}
