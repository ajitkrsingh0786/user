import React ,{Component} from 'react';
import './App.css';
import Axios from 'axios';

class  App extends Component {
       
      constructor(props){
        super(props);
        this.state = {
          users: [],
          
      }
      }

      componentDidMount(){
        Axios.get('https://panorbit.in/api/users.json')            
             .then( res => {
                  
                 this.setState(
                     {
                         
                         users: res.data.users,
                     }
                 )
             })
    }


  render(){
           console.log(this.state.users[0]);

           const users = this.state.users.map( user => {
                    
                 return (
                  <li key={user.id}>
                  <div className="user-image user-row">
                      <img src={user.profilepicture} alt="img" className="user-image"/>
                   </div>

                   <div className="user-row">
                        {user.name}
                   </div>
                   
                   </li>
                 )

           })
  return (
    <div className="App">
      <div >
          
          <h1>Hellow Ajit</h1>

         <ul>{users}</ul>

       </div>
    </div>
  );
}
}

export default App;
