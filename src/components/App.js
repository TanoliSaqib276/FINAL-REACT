import React, { Component } from 'react';
import Users from './User';
import AddUser from './AddUser';
import Navbar from './Navbar';

class App extends Component{

  

    // Default dummy data
    state = {

        users:[
          {name:"Saleem", fname: "Fazal",member:3,cnic:4230155973645, isEditing:false},
          {name:"Kareem",fname: "Akbar", member:4,cnic:4230155973641, isEditing:false},
          {name:"Raheem", fname: "Ahmed",member:5,cnic:4230155973643, isEditing:false}
    
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, cnic,member) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].cnic = cnic;
        users[i].member = member;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
          <><Navbar />
            <div className="container" >
                
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
            </>
        );
    }
}

export default App;