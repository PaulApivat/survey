import React from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

class UpdateModel extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
        }
    }

    // componentDidMount(){
    //     const id = this.props.match.params.id
    //     axios
    //     .get(`http://localhost:3000/api/models/${id}`)
    //     .then(response => {
    //         const { name } = response.data
    //         this.setState({ name })
    //         // this.setState({ note: response.data })
    //     })
    //     .catch(err => {
    //         console.log("Fail to Get Individual Model", err)
    //     })
    // }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //this.props.handleUpdateModel({...this.state, id: this.props.match.params.id})
        this.props.handleUpdateModel({...this.state, id: this.props.model.id})
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
                <div onClick={this.handleSubmit}> <Link to="/models">Update</Link></div>
            </div>
        )
    }
}

export default UpdateModel