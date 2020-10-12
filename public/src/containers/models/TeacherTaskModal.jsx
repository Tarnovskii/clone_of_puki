import React from "react";
import {connect} from "react-redux";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Заголовок",
            type: "",
            date: "",
            startTime: "",
            endTime: "",
            interval: "",
            description: "",
            files: "",
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}
