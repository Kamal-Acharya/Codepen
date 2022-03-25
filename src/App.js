
import logo from './components/logo.png';
import './App.css';
import Comp1 from './components/comp1';

function App() {
  return (
    <div className="App">
      <img src={logo} id="img"/>
      <h2 className='title'>
        <span className='title-word title-word-1'>C</span>
        <span className='title-word title-word-2'>o</span>
        <span className='title-word title-word-3'>D</span>
        <span className='title-word title-word-4'>e</span>
        <span className='title-word title-word-4'>-</span>
        <span className='title-word title-word-2'>P</span>
        <span className='title-word title-word-1'>e</span>
        <span className='title-word title-word-3'>N</span>
       
        </h2>
<Comp1/>
    </div>
  );
}

export default App;