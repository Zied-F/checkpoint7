import React from 'react';
import './App.css';
import Profile from './Profile/Profile'

const object =[
  {name:"Zied", bio:"abcd", profession:"Consultant"}
]


const App = (props) => {
  return (
    
    object.map (item => {
    return (
    <Profile name= {item.name} bio = {item.bio}
     profession = {item.profession}>/photo1.png</Profile>
     )  })

  
  );
}

export default App;
