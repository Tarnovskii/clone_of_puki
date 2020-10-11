import {updateCurrentPageName} from '../../store/actions/routingActions'
import {bindActionCreators} from "redux";

export const mapDispatchToProps = component => dispatch => {
        return {
            updateCurrentPageName: bindActionCreators(updateCurrentPageName, dispatch)
        }
    };
