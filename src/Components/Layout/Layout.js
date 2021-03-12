import React from 'react';
import classes from './Layout.module.css';

const layout = (props) => (
    <main className={classes.Content}>
        {props.children}
        <div>
            
        </div>
    </main>

);

export default layout;  