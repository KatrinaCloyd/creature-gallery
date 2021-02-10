import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import creatures from './data.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: ''
  }

  handleKeyChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleHornChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  render() {
    const filteredCreatures = creatures.filter((creature) => {
      if (!this.state.keyword && !this.state.horns) return true;
      if (this.state.keyword && !this.state.horns) {
        if (creature.keyword === this.state.keyword) return true;
      }
      if (!this.state.keyword && this.state.horns) {
        if (creature.horns === this.state.horns) return true;
      }
      if (this.state.keyword && this.state.horns) {
        if (creature.horns === this.state.horns && creature.keyword === this.state.keyword) return true;
      }
      return false;
    });

    return (
      <div className="body">
        <Header />
        <Dropdown currentValue={this.state.keyword}
          handleChange={this.handleKeyChange}
          options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
          text={'Select a Type of Horned Creature You Would Like to See:'} />
        <Dropdown currentValue={this.state.horns}
          handleChange={this.handleHornChange}
          options={[1, 2, 3, 6, 100]}
          text={'Select a the Number of Horns You Would Like To See:'} />
        <ImageList filteredCreatures={filteredCreatures} />
      </div>
    )
  }
}
