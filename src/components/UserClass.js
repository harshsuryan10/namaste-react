import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          UserInfo : {
            name: '',
            location:'Bangalore',
            type:'',
            avatar_url:'',
          }
        }
        console.log("Constructor");
    }
    // async componentDidMount(){
    //   const data = await fetch("https://api.github.com/users/harshsuryan10");
    //   const json = await data.json();
    //   this.setState(
    //     {
    //       UserInfo: json,
    //     }
    //   )
    //   console.log("Mount");
    // }
    componentDidUpdate(){
      console.log("Update");
    }
    componentWillUnmount(){
      console.log("Unmount");
    }
  render() {
    console.log("render");
    const {name,location,type,avatar_url} = this.state.UserInfo;
    return (
      <div className="user-card">
        <h2> Name: {name} </h2> 
        <h3> Location: {location} </h3>
        <h4> type: {type} </h4>
        <img src="{avatar_url}"/>
      </div>
    );
  }
}
export default UserClass;
