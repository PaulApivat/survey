import React from 'react';

import { Link } from 'react-router-dom';

class CreateFeature extends React.Component {
    constructor(){
        super();
        this.state = {
            model_id: '',
            battery: '',
            design: '',
            useful: '',
            speed: '',
            weight: ''
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
        this.props.handleAddNewFeature(this.state)
    }

    render(){
        return (
            <div>
                <form>  
                        <input
                            placeholder="Model ID"
                            type="number"
                            name="model_id"
                            value={this.state.model_id}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Battery"
                            type="number"
                            name="battery"
                            value={this.state.battery}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Design"
                            type="number"
                            name="design"
                            value={this.state.design}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Useful"
                            type="number"
                            name="useful"
                            value={this.state.useful}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Speed"
                            type="number"
                            name="speed"
                            value={this.state.speed}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Weight"
                            type="number"
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleChange}
                        />
                </form>
                <div onClick={this.handleSubmit}> <Link to="/features">Save</Link></div>
            </div>
        )
    }
}

export default CreateFeature