import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import './Comp_style.css'

import {Controlled as ControlledEditor } from 'react-codemirror2';

const CodeEditor=(props)=>{

    const {language,title,value,onChange}=props;

    const handleChange=(editor,data,value)=>{
onChange(value);
    }

    return(
        <div className="con">
        <h2>{title}</h2>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={
            {
                lineWrapping:true,
                lint:true,
                mode:language,
                lineNumbers:true,
                theme:'material',
            }
        }
        />
        </div>
    )
}

export default CodeEditor;