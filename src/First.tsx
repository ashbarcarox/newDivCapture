import { useCallback, MutableRefObject, Ref, forwardRef } from 'react';
import './App.css';
import { toBlob } from 'html-to-image';

function First(props: any, ref: Ref<HTMLImageElement>) {

  //const {forwardedRef, ...ref} = this.props;


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
    if ((ref as MutableRefObject<HTMLDivElement>).current === null) {
      return
    }

    toBlob((ref as unknown as MutableRefObject<HTMLDivElement>).current, { cacheBust: true, })
    .then((blob) => {
      copyToClipboard(blob);
      console.log("Copy to clipboard function called");
    })
    .catch((err) => {
      console.log(err)
    })
  }, [ref])

  
  return (
    <div>
      <button onClick = {componentCapture}> Capture Component </button>
      {/*<button onClick = {componentCapture}> Capture Component </button>*/}
    </div>
  );
}

export default forwardRef(First);
