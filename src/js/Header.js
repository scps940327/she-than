import React,{ PropTypes ,useState, useEffect } from 'react';
import ReactDOM from "react-dom";

function Header(){
   const [headerMenu, setHeaderMenu] = useState([]);
   const [menuIsOpen, setMenuIsOpen] = useState(window.innerWidth > 768);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   const testData = [
      {
         title: '佛一佛七',
         link: ''
      },
      {
         title: '佛一佛七',
         link: '',
         sub: [
            {
               title: '佛一',
               link: ''
            },
            {
               title: '佛七',
               link: '',
            }
         ]
      },
      {
         title: '佛一佛七',
         link: ''
      },
      {
         title: '佛一佛七',
         link: ''
      },
      {
         title: '佛一佛七',
         link: ''
      }
   ]

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

      // setHeaderMenu(testData);
      window.addEventListener("resize", handleResize);
   }, []);

   function handleResize() {
      if(window.innerWidth < 768){
         setIsMobile(true);
         setMenuIsOpen(false);
      }
      else{
         setIsMobile(false);
      }
   }

   function handleMenu() {
      let menuNextState = !menuIsOpen;
      setMenuIsOpen(menuNextState)
   }
   return (
      <div className="header-rwd">
         <div className="py-2 text-center bg-white header-logo">
            <img src="./img/header_bg_01.png" className="header-bg-01" />
            <img src="./img/header_bg_02.png" className="header-bg-02" />
            <a href="index.html">
               <img src="./img/logo.png" width="200px" />
            </a>
            <div className="header-menu-icon text-secondary" onClick={handleMenu}>
               {menuIsOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </div>
         </div>
         <div className="header-menu" style={isMobile && !menuIsOpen ? {display: 'none'} : {display: 'block'}}>
            <div className="max_width">
               <HeaderMenu data = {headerMenu} classList = {'row no-gutters px-md-2'} isMobile={isMobile} />
            </div>
         </div>
      </div>
   )
}

function HeaderMenu({data, classList, isHeaderMenuOpen, isMobile, open}){
   //const [menuOpen, setMenuOpen] = useState(!subMenu)

   return(
      <ul className={classList} style={open && isMobile ? {display: 'none'} : null}>
         {data.map((menuItem, index) => 
         <MenuItem menuItem={menuItem} isMobile={isMobile} key={'menuItem' + menuItem.title + index} />)} 
      </ul>
   )
}

function MenuItem({menuItem, isMobile}){
   const [subMenuOpen, setSubMenuOpen] = useState(true);
   function subMenuHandle(){
      let menuNextState = !subMenuOpen;
      setSubMenuOpen(menuNextState)
   }
   if (menuItem.isTop) {
      return(
         <li className="fixed-top-icon">
            {menuItem.link && menuItem.link.map((link_item, index) => {
               <a href={link_item.link} target={link_item.target} className="pr-md-1 text-secondary">
                  <i className={link_item.type}></i>
               </a>
            })}
         </li>
      )
   } else {
      return(
         <li className="col-12 col-md px-md-2 text-center">
            <div>
               <a className="d-inline-block py-3 py-md-1" href={menuItem.link}>{menuItem.title}</a>
               {(menuItem.sub && isMobile) ? <span className="pl-2" onClick={subMenuHandle}><i class="fas fa-caret-down"></i></span> : null}
            </div>
            {menuItem.sub ? <HeaderMenu data = {menuItem.sub} isMobile={isMobile} classList={'row no-gutters'} open={subMenuOpen} /> : null}
         </li>
      )
   }
}


export default Header;
ReactDOM.render(<Header />, document.getElementById('header'));