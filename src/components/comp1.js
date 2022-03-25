import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';
import './Comp_style.css';
const Comp1=()=>{
const [html,setHtml]=useState(" ");
const [css,setCss]=useState();
const [js,setJs]=useState();
const [srcDoc,setSrcdoc]=useState();

useEffect(()=>{
const timeout=setTimeout(()=>{
    setSrcdoc(`
    <html>
    <body>${html}</body>
    <style>${css}<style>
    <script>${js}</script>
    </html>
  ` 
);
},250);

return ()=>{ clearTimeout(timeout)};
    

},[html,css,js]);

  

return(
    <>
<div className='top'>
    <CodeEditor title="Html" language="xml" value={html} onChange={setHtml}  />
    <CodeEditor title="CSS" language="css" value={css} onChange={setCss}/>
    <CodeEditor title="JS" language="javascript" value={js} onChange={setJs}/>
</div>
<div className='down'>
    
    <iframe
    srcDoc={srcDoc}
    title="output"
    sandBox="allow-scripts"
    height="100%"
    width="100%"
    frameBorder="0"
    value={srcDoc}
    />
</div>
    </>
)

}

export default Comp1;