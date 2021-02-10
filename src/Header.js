import React from 'react';
import style from './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                Horned Creatures
            </header>
        )
    }
}
