import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputVal : ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            inputVal : e.target.value
        },()=>{
           this.props.updateData(this.state.inputVal)
        })
    }

    render() {
        const {name, id, type} = this.props;
        return (
            <input name={name} id={name} key={id} type={type} required onChange={this.handleChange}/>
        )
    }
}

export default Home;