import React,{ PropTypes ,useState, useEffect } from 'react';
import ReactDOM from "react-dom";

function Header(){
   const [headerMenu, setHeaderMenu] = useState([]);

   useEffect(() => {
      var requestURL = './data.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = () => {
        var superHeroes = request.response;
        console.log(superHeroes.menu)
        setHeaderMenu(superHeroes.menu)
      }
   }, []);
   return (
      <div>
         <div className="py-2 text-center bg-white header-logo">
            <img src="./img/header_bg_01.png" className="header-bg-01" />
            <img src="./img/header_bg_02.png" className="header-bg-02" />
            <img src="./img/logo.png" width="200px" />
         </div>
         <div className="bg-info">
            <div className="max_width">
               <HeaderMenu data = {headerMenu} classList = {'row no-gutters px-sm-4 header-menu'} />
            </div>
         </div>
      </div>
   )
}

function HeaderMenu({data, classList}){
   return(
      <ul className={classList}>
         {data.map((menuItem, index) => 
         <MenuItem menuItem={menuItem} key={'menuItem' + menuItem.title + index} />)} 
      </ul>
   )
}

function MenuItem({menuItem}){
   return(
      <li className="col-12 col-sm text-center">
         <a className="d-inline-block py-1" href={menuItem.link}>{menuItem.title}</a>
         {menuItem.sub ? <HeaderMenu data = {menuItem.sub} classList={'row no-gutters'} /> : null}
      </li>
   )
}


export default Header;
ReactDOM.render(<Header />, document.getElementById('header'));