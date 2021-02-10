import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <form className='creature-form'>
                {this.props.text}
                <select
                    value={this.props.currentValue}
                    onChange={this.props.handleChange}
                >
                    {this.props.options.map(opt =>
                        <option value={opt} >
                            {opt}
                        </option>
                    )
                    }
                </select>
            </form>
        )
    }
}
