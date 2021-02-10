import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import creatures from './data.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: ''
  }

  handleKeyChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    const filteredCreatures = creatures.filter((creature) => {
      if (!this.state.keyword) return true;
      if (creature.keyword === this.state.keyword) return true;
      return false;
    });

    return (
      <div className="body">
        <Header />
        <Dropdown currentValue={this.state.keyword}
          handleKeyChange={this.handleKeyChange} />
        <ImageList filteredCreatures={filteredCreatures} />
      </div>
    )
  }
}
