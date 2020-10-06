import React from 'react'
import LogComp from '../../../components/routes/validation/LoginComponent'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleLoginFields.bind(this);
    }

    handleLoginFields = (action) => {
        switch (action.type) {
            case "UPDATE_LOGIN":
                this.setState({
                    userLogin: action.value
                })
                break;
            case "UPDATE_PASSWORD":
                this.setState({
                    userPassword: action.value
                })
                break;
            default:
                throw new Error(`UKNOWN ACTION TYPE: ${action.type}`)
        }
    }

    render() {
        return (
            <LogComp {...this.state} handler={this.handleLoginFields}/>
        );
    }
}
