import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = (props) => (
    <CSSTransition
        key={props.keyProp}
        in={props.inProp}
        timeout={props.timeProp}
        classNames={props.classNamesProp}>
            {props.children}

    </CSSTransition>
);

export default Transition;