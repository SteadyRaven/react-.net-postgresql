import React, { useContext, useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { TestContext } from '../App';
import { fileSystem as nodes } from './common';

function Rside() {

    const {testcase, setTestCase} = useContext(TestContext);
    
    const [checked, setChecked] = useState([
        '/app/Http/Controllers/WelcomeController.js',
        '/app/Http/routes.js',
        '/public/assets/style.css',
        '/public/index.html',
        '/.gitignore',
    ]);
    const [expanded, setExpanded] = useState(['/app']);
    const [clicked, setClicked] = useState({});

    const onCheck = (value) => {
        setChecked(value);
    };

    const onExpand = (value) => {
        setExpanded(value);
    };

    const onClick = (value) => {
        setClicked(value);  
    };

    const notClickedText = '(none)';
    const displayText = clicked.value || notClickedText;
    setTestCase(displayText);

    return (
        <div className="clickable-labels float-left">
            <CheckboxTree
                checked={checked}
                expandOnClick
                expanded={expanded}
                nodes={nodes}
                onCheck={onCheck}
                onClick={onClick}
                onExpand={onExpand}
                icons={{
                  check: <span>&#x2713;</span>,
                  uncheck: <span>&#x2717;</span>,
                  halfCheck: <span>&#x2A2F;</span>,
                  expandClose: <span>&#x25B6;</span>,
                  expandOpen: <span>&#x25BC;</span>,
                }}
            />
        </div>
    );
}

export default Rside;