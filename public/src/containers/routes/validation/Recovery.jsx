import React from "react";
import RecComp from '../../../components/routes/validation/RecoveryComponent'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ""
        }
        this.handleLoginField.bind(this);
    }

    handleLoginField = (value) => this.setState({login: value})

    render() {
        return (
            <RecComp {...this.state} handler={this.handleLoginField}/>
        );
    }

}
