import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import { portalElement } from 'react-is'

const Backdrop = (props) => {
  return <div className={classes.Backdrop}></div>
}
const ModalOverlay = (props) => {
  return <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop /> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </Fragment>
}

export default Modal