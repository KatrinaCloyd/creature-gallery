import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <form className='creature-form'>
                Select a Type of Horned Creature You Would Like to See:
                <select
                    value={this.props.currentValue}
                    onChange={this.props.handleKeyChange}
                >
                    <option value="narwhal">Narwhal</option>
                    <option value="rhino">Rhino</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="markhor">Markhor</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>
                </select>
            </form>
        )
    }
}
