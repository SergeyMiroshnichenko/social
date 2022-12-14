import React from 'react';
import Profile from "./components'/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components'/News/News"
import Music from "./components'/Music/Music"
import Setting from "./components'/Setting/Setting"
import Dialogs from "./components'/Dialogs/Dialogs"
import Header from "./components'/Header/Header"
import Menu from "./components'/Menu/Menu";
import _state from './Redux/State';
import store from './Redux/State';
import "../src/App.css"



function App(props) {

  return (
   
      <div className="body">
        <Header/>
        <Menu/>
        <div className='wrapper_page'>
          <Routes>
  
            <Route path='/profile' element={<Profile 
            messageData={store._state.posts.messageData}
        
            newPostText={store._state.posts.newPostText}
            dispatch= {store.dispatch.bind(store)}
            
             
             />}/>;
            <Route path='/dialogs/:dialogId' element={<Dialogs 
              dialogData={store._state.myMessage.dialogData}
              massageText={store._state.myMessage.massageText}
              newMessageBody={store._state.myMessage.newMessageBody}
              dispatch={store.dispatch.bind(store)}
              />
              
            }/>;
            <Route path='/news' element={<News/>}/>;
            <Route path='/music' element={<Music/>}/>;
            <Route path='/setting' element={<Setting/>}/>;
            {/* <Route path='/friends' element={<BestFriend/>}/>; */}
  
          </Routes>
        
        </div>
        
      </div>

  );
}

export default App;

