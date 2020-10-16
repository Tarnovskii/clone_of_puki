import * as routingActions from '../../store/actions/routingActions'
import * as userStateActions from '../../store/actions/userActions'
import * as modalActions from "../../store/actions/modalActions";
import * as calendarActions from '../../store/actions/calendarActions'
import {bindActionCreators} from "redux";

export const mapDispatchToProps = component => dispatch => {
        return {
            routingActions: {...bindActionCreators(routingActions, dispatch)},
            userActions: {...bindActionCreators(userStateActions, dispatch)},
            modalActions: {...bindActionCreators(modalActions, dispatch)},
            calendarAction: {...bindActionCreators(calendarActions, dispatch)}
        }
    };
