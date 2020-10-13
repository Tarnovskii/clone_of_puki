import React from "react";
import {connect} from "react-redux";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {mapDispatchToProps} from "../../utils/storeUtils/dispatchToProps";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";
import {Redirect} from "react-router";

export default connect(mapStateToProps(), mapDispatchToProps())((props) => {
    switch (props.userState.userRole) {
        case "STUDENT":
            return <StudentProfile/>
        case "TEACHER":
            return <TeacherProfile/>
        default:
            return Redirect('/')
    }
})
