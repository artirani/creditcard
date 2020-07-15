import React from 'react';
/*
.header-menu {
    display: inline-block;
    list-style: none;
    width: 100%;
}


.header-menu_item {
    display: inline-block;
    float: right;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
}
 */

class Header extends React.Component {
constructor(props) {
              
                super(props);
                this.state = { popupMenuAnchor : null }
   
               }

render() {

      
let header_menu =  { header_menu : {
 display: 'inline-block',
 listStyle: 'none',
 width: '100%',
 "& li" : {
 display : 'inline-block',
 float: 'right',
 paddingLeft : '10px',
 paddingRight : '10px',
 marginTop : '10px',
 cursor: 'pointer', 
 '& :hover' : {
 color : 'green'
   }
  }
 }
}

return (
    
    <div style={{height: 60}}>

           <ul className={header_menu}>
              
               <li style={{float: "left", margin: '0px'}}>
                        <div onClick={this.homeClick}></div>
               </li>
               <li>
                        <div></div>
               </li>

          </ul>
    </div>

   );
 }
}


export default Header
