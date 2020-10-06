import React from 'react'
import RegComp from '../../../components/routes/validation/RegistrationComponent'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            username: "",
            password: "",
            group: ""
        }
        this.handleFields.bind(this);
    }

    handleFields = (action) =>{
        switch (action.type) {
            case "UPDATE_FIRST_NAME":
                this.setState({
                    firstName: action.value
                })
                break;
            case "UPDATE_LAST_NAME":
                this.setState({
                    lastName: action.value
                })
                break;
            case "UPDATE_EMAIL":
                this.setState({
                    email: action.value
                })
                break;
            case "UPDATE_PHONE":
                this.setState({
                    phone: action.value
                })
                break;
            case "UPDATE_USERNAME":
                this.setState({
                    username: action.value
                })
                break;
            case "UPDATE_PASSWORD":
                this.setState({
                    password: action.value
                })
                break;
            case "UPDATE_GROUP":
                this.setState({
                    group: action.value
                })
                break;
            default: throw new Error(`UKNOWN ACTION TYPE: ${action.type}`)
        }
    }

    render() {
        return (
            <RegComp {...this.state} handler={this.handleFields}/>
        );
    }
}
