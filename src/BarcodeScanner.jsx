import React,{useEffect,useRef,useState} from "react";

let scannerLoader;
const loadScanner=()=>{if(window.Html5QrcodeScanner)return Promise.resolve();if(scannerLoader)return scannerLoader;scannerLoader=new Promise((resolve,reject)=>{const script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js";script.onload=()=>window.Html5QrcodeScanner?resolve():reject(new Error("Barcode scanner did not load."));script.onerror=()=>reject(new Error("Barcode scanner could not load. Check your connection."));document.head.appendChild(script)});return scannerLoader};

export default function BarcodeScanner({onDetected,onClose}){
 const readerId=useRef(`barcode-reader-${Math.random().toString(36).slice(2)}`);
 const [error,setError]=useState("");
 useEffect(()=>{
  let active=true,scanner;
  loadScanner().then(()=>{if(!active)return;const f=window.Html5QrcodeSupportedFormats;scanner=new window.Html5QrcodeScanner(readerId.current,{fps:12,qrbox:{width:270,height:150},aspectRatio:1.777,rememberLastUsedCamera:true,formatsToSupport:[f.EAN_13,f.EAN_8,f.UPC_A,f.UPC_E,f.CODE_128]},false);scanner.render(decoded=>{if(!active)return;active=false;Promise.resolve(scanner.clear()).catch(()=>{}).finally(()=>onDetected(decoded))},()=>{})}).catch(err=>active&&setError(err.message));
  return()=>{active=false;if(scanner)Promise.resolve(scanner.clear()).catch(()=>{})};
 },[onDetected]);
 return <div className="barcode-modal" role="dialog" aria-modal="true" aria-label="Scan food barcode">
  <div className="barcode-modal-card">
   <div className="barcode-modal-head"><div><span>BARCODE SCANNER</span><strong>Center the package barcode</strong></div><button onClick={onClose} aria-label="Close barcode scanner">×</button></div>
   {error?<div className="barcode-scanner-error">{error}</div>:<div id={readerId.current} className="barcode-reader"/>}
   <p>Camera access is used only to read the barcode. You can also choose a barcode photo from your phone.</p>
  </div>
 </div>
}
