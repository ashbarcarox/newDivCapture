import React, { useCallback, useRef, forwardRef } from 'react';
import './App.css';
import { toBlob } from 'html-to-image';
import Second from './Second';

function First() {

  const ref = forwardRef;


console.log(forwardRef.name)
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
    // if (ref.current === null) {
    //   return
    // }

    // toBlob(ref.current, { cacheBust: true, })
    // .then((blob) => {
    //   copyToClipboard(blob);
    //   console.log("Copy to clipboard function called");
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }, [ref])

  
  return (
    <div>
        <button onClick = {componentCapture}> Capture Component </button>
    </div>
  );
}

export default First;
