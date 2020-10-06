import React from 'react';
 
  function UserHomePage( props ){
      return(
          <div>
          <h1>Users Home page</h1>
          <img src={props.user.profilepicture} alt="user image" />
          </div>
      )
  }

  export default UserHomePage;