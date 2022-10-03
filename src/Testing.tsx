import React, { useCallback, useRef } from 'react';
import './App.css';
import { toBlob } from 'html-to-image';
import Second from './Second';


const Testing = React.forwardRef((props, ref) => (

  ));


function Testing1() {

  const ref = useRef(null);

  async function copyToClipboard(pngBlob: any) {
    try {
      console.log("clipboard was reached inside try");
      await navigator.clipboard.write([
        new ClipboardItem({
            [pngBlob.type]: pngBlob
        })
      ]);
      console.log("Image copied");
    } catch (error) {
        console.error(error);
    }
}

  const componentCapture = useCallback(() => {
    if ((ref.current) === null) {
      return
    }

    toBlob(ref.current, { cacheBust: true, })
    .then((blob) => {
      copyToClipboard(blob);
      console.log("Copy to clipboard function called");
    })
    .catch((err) => {
      console.log(err)
    })
  }, [ref])

  
  return (
    <div className="App">
      <header className="App-header">
        Testing Screen capture
        <div ref = {ref}>
          <h1> ARI </h1>
        </div>
        <button onClick = {componentCapture}> Capture Component </button>
      </header>
    </div>
  );
}

export default Testing;
