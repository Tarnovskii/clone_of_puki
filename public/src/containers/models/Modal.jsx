import React from "react";
import ReactDOM from 'react-dom';
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {connect} from "react-redux";
const modalRoot = document.getElementById("root")

export default connect(mapStateToProps())(class extends React.Component {
        constructor(props) {
            super(props);
            this.el = document.createElement('div');
        }

        componentDidMount() {
            modalRoot.appendChild(this.el);
        }

        componentWillUnmount() {
            modalRoot.removeChild(this.el);
        }

        render() {
            return ReactDOM.createPortal(
                this.props.modalState.child,
                this.el
            );
        }
    }
)
