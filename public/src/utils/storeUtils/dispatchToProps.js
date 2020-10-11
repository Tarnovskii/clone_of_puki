import {updateCurrentPageName} from '../../store/actions/routingActions'
import {bindActionCreators} from "redux";
import * as userStateEvents from '../../store/actions/userActions'

export const mapDispatchToProps = component => dispatch => {
        return {
            updateCurrentPageName: bindActionCreators(updateCurrentPageName, dispatch),
            ...bindActionCreators(userStateEvents, dispatch)
        }
    };
