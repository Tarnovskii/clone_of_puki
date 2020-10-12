import * as routingActions from '../../store/actions/routingActions'
import {bindActionCreators} from "redux";
import * as userStateEvents from '../../store/actions/userActions'

export const mapDispatchToProps = component => dispatch => {
        return {
            routingActions: {...bindActionCreators(routingActions, dispatch)},
            userEvents: {...bindActionCreators(userStateEvents, dispatch)}
        }
    };
