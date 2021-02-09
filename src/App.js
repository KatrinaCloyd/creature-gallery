import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: ''
  }
  render() {
    { console.log(this.state) };
    return (
      <div className="body">
        <Header />
        <form className='creature-form'>
          Select a Type of Horned Creature You Would Like to See:
          <select
            value={this.state.keyword}
            onChange={(e) => {
              this.setState({
                keyword: e.target.value
              })
            }}
          >
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
          </select>
        </form>
        <ImageList />
      </div>
    )
  }
}
