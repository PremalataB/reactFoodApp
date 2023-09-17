import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header.js";
import Body from "./components/Body";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
 


const Applayout = () =>{
  return(
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
