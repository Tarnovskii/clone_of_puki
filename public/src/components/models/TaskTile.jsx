import React from "react";
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {connect} from "react-redux";
import s from '../../stylesheets/models/moduleTiles.module.css'

export default connect(mapStateToProps())((props) => {
    return (
        <div className={s.wrapper}>

        </div>
    )
})
