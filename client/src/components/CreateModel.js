import React from 'react';

import { Link } from 'react-router-dom';

class CreateModel extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddNewModel(this.state)
    }


    render(){
        return (
            <div>
                <form>
                        <input 
                            placeholder="Model Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                </form>
                <div onClick={this.handleSubmit}> <Link to="/models">Save</Link></div>
            </div>
        )
    }
}

export default CreateModel