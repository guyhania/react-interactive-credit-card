import React from 'react';
import classes from './Digits.module.css';
import Dig from './Digit/Digit';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Auxiliary from '../../../hoc/Auxiliary';

const Digits = (props) => {
    return (
        <Auxiliary>
            <div className={classes.Auxl} onClick={props.clicked}>
                <div className={classes.Regular}>
                    {props.digits.slice(0, 4).map((dig, index) => (
                        <SwitchTransition >
                            <CSSTransition
                                key={dig}
                                in={false}
                                timeout={200}
                                classNames={{
                                    enter: classes["example-enter"],
                                    enterActive: classes["example-enter-active"],
                                    exit: classes["example-exit"],
                                    exitActive: classes["example-exit-active"],
                                }}>
                                <Dig
                                    value={dig}
                                    key={index} />
                            </CSSTransition>
                        </SwitchTransition>
                    ))}
                </div>

                <div className={classes.Secret}>
                    {props.digits.slice(4, 8).map((dig, index) => (
                        (dig !== '#') ?
                            <SwitchTransition >
                                <CSSTransition
                                    key={dig}
                                    in={false}
                                    timeout={200}
                                    classNames={{
                                        enter: classes["example-enter"],
                                        enterActive: classes["example-enter-active"],
                                        exit: classes["example-exit"],
                                        exitActive: classes["example-exit-active"],
                                    }}>
                                    <Dig
                                        value={'*'}
                                        key={index} />
                                </CSSTransition>
                            </SwitchTransition>
                            :
                            <SwitchTransition >
                                <CSSTransition
                                    key={dig}
                                    in={false}
                                    timeout={200}
                                    classNames={{
                                        enter: classes["example-enter"],
                                        enterActive: classes["example-enter-active"],
                                        exit: classes["example-exit"],
                                        exitActive: classes["example-exit-active"],
                                    }}>
                                    <Dig
                                        value={dig}
                                        key={index} />
                                </CSSTransition>
                            </SwitchTransition>
                    ))}
                </div>

                <div className={classes.Regular}>
                    {props.digits.slice(8, 12).map((dig, index) => (
                        (dig !== '#') ?
                            <SwitchTransition >
                                <CSSTransition
                                    key={dig}
                                    in={false}
                                    timeout={200}
                                    classNames={{
                                        enter: classes["example-enter"],
                                        enterActive: classes["example-enter-active"],
                                        exit: classes["example-exit"],
                                        exitActive: classes["example-exit-active"],
                                    }}>
                                    <Dig
                                        value={'*'}
                                        key={index} />
                                </CSSTransition>
                            </SwitchTransition>
                            :
                            <SwitchTransition >
                                <CSSTransition
                                    key={dig}
                                    in={false}
                                    timeout={200}
                                    classNames={{
                                        enter: classes["example-enter"],
                                        enterActive: classes["example-enter-active"],
                                        exit: classes["example-exit"],
                                        exitActive: classes["example-exit-active"],
                                    }}>
                                    <Dig
                                        value={dig}
                                        key={index} />
                                </CSSTransition>
                            </SwitchTransition>
                    ))}
                </div>

                <div className={classes.Regular}>
                    {props.digits.slice(12, 16).map((dig, index) => (
                        <SwitchTransition >
                            <CSSTransition
                                key={dig}
                                in={false}
                                timeout={200}
                                classNames={{
                                    enter: classes["example-enter"],
                                    enterActive: classes["example-enter-active"],
                                    exit: classes["example-exit"],
                                    exitActive: classes["example-exit-active"],
                                }}>
                                <Dig
                                    value={dig}
                                    key={index} />
                            </CSSTransition>
                        </SwitchTransition>
                    ))}
                </div>
            </div>

        </Auxiliary>
    )
};

export default Digits;




