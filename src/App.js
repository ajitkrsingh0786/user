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
  return (
    <div className="App">
      <div >
          
          <h1>Hellow Ajit</h1>

       </div>
    </div>
  );
}
}

export default App;
