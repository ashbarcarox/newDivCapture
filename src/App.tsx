import React, { forwardRef, Ref, useRef } from 'react';
import './App.css';
import First from './First';
import Second from './Second';

function App() {

  const ref = useRef<HTMLImageElement>(null);

  // const ComponentCapture = React.forwardRef((props: any, ref) => {
  //   console.log("App.componentCApture reached")
  //   return < First {...props} forwardedRef={ref}/>
  // })

  // const ScreenshotComponent = forwardRef((props: any, ref: Ref<HTMLImageElement>) => {
  //   //pass data to component from here
  //   return (
  //     <First 
  //       ref={ref}
  //       {...props}
  //     />
  //   );
  // });


  const SecondComponent = <Second/>
  
  return (
    <div className="App">
      <header className="App-header">
        Testing Screen capture
        <div ref = {ref}>
          <h1> ARI </h1>
          <First ref={ref}/>
        </div>
      </header>
    </div>
  );
}

export default App;
