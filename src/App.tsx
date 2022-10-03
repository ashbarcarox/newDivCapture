import React, { useRef } from 'react';
import './App.css';
import Second from './Second';
import First from './First';

function App() {

  const ref = useRef(null);

  const ComponentCapture = React.forwardRef((props: any, ref) => {
    return < First {...props} forwardedRef={ref}/>
  })
  
  return (
    <div className="App">
      <header className="App-header">
        Testing Screen capture
        <div ref = {ref}>
          <h1> ARI </h1>
          <Second />
        </div>
        <button onClick = {ComponentCapture}> Capture Component </button>
        {/*<button onClick = {componentCapture}> Capture Component </button>*/}
      </header>
    </div>
  );
}

export default App;

