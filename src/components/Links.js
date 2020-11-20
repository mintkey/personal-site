import React from 'react';
import './Links.scss';
import Icon from '../icon';

const Links = () => {
    return (
        <div className="links">
            <ul>
                <li>
                    <a href="mailto:helendmpsy@gmail.com">
                        <Icon className="hvr-grow" name="email" width={25}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mintkey/" target="_blank" rel="noopener noreferrer">
                        <Icon className="hvr-grow" name="github" width={25}/>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/helen-dempsey/" target="_blank" rel="noopener noreferrer">
                        <Icon className="hvr-grow" name="linkedin" width={25}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/helen_dmp/" target="_blank" rel="noopener noreferrer">
                        <Icon className="hvr-grow" name="twitter" width={25}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Links;