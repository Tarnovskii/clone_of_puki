import React from "react";
import ReactDOM from 'react-dom';
import {mapStateToProps} from "../../utils/storeUtils/stateToProps";
import {connect} from "react-redux";
import s from '../../stylesheets/global/modal.module.css'

export default connect(mapStateToProps())(class extends React.Component {
        constructor(props) {
            super(props);
            this.windowOffset = 0;
        }

    render() {
            if (this.props.modalState.isOpen) {
                this.windowOffset = window.scrollY;
                document.body.setAttribute('style', `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0;`)
                return ReactDOM.createPortal(
                    <div className={s.modal_wrapper}>
                        <this.props.modalState.modalContent/>
                    </div>,
                    document.body
                );
            } else {
                this.windowOffset = 0;
                document.body.setAttribute('style', ``)
                return null
            }
        }
    }
)
