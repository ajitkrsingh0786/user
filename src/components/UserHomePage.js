import React from 'react';
import { Container } from 'reactstrap';
 
  function UserHomePage( props ){
      return(
          <div  className="home-page">
              <div className="nav-bar">
                  <ul className="ul-nav-bar">
                    <li className="li-nav-bar"> <h4>Profile</h4> </li>
                    <li className="li-nav-bar"> <h4>Posts</h4>  </li>
                    <li className="li-nav-bar"> <h4>Gallery</h4></li>
                    <li className="li-nav-bar">  <h4>ToDo</h4>  </li>                  
                  </ul>                                      
              </div>
              <div  className="home-page-body">
                  <div className="row-1">
                       <h4 className="row-1">Users Home page</h4>
                        <div className="user-image user-row">
                                   <img src={props.user.profilepicture} alt="img" className="user-image"/>
                                </div>

                                <div className="user-row">
                                     {props.user.name}
                        </div>
                  </div>
                  <div className="row-2">
               
               <img src={props.user.profilepicture} alt="user image" />
               </div>
             </div>
          </div>
      )
  }

  export default UserHomePage;