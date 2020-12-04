import React from 'react';
import Email from './Email';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';

const Icon = props => {
    switch (props.name) {
        case "email":
            return <Email {...props}/>;
        case "github":
            return <GitHub {...props}/>;
        case "linkedin":
            return <LinkedIn {...props}/>;
        case "twitter":
            return <Twitter {...props}/>;
            
        default:
            return;
    }
};

export default Icon;