import React,{ PropTypes ,useState, useEffect } from 'react';
import ReactDOM from "react-dom";

function Footer(){
   const [headerMenu, setHeaderMenu] = useState([]);

   useEffect(() => {
      var requestURL = './data.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = () => {
        var superHeroes = request.response;
        setHeaderMenu(superHeroes.menu)
      }
   }, []);
   return (
      <div className="row justify-content-center text-center mx-0 bg-info text-white p-1">
         <div className="col-12 col-sm-auto pr-sm-2">（23743）新北市三峽區溪東路211巷31弄11號</div>
         <div className="col-12 col-sm-auto pr-sm-2">電話:02-8676-1982</div>
         <div className="col-12 col-sm-auto pr-sm-2">Email:seeland333@gmail.com)</div>
         <div className="col-12 col-sm-auto">回首頁 網站地圖</div>
      </div>
   )
}


export default Footer;
ReactDOM.render(<Footer />, document.getElementById('footer'));