import React from "react";
import UserProfileComp from '../../components/routes/UserProfileComponent'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <UserProfileComp group="KV-25" firstName="Сергей" lastName="Водянов"/>
        );
    }

}
