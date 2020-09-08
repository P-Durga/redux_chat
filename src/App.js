
import React from 'react';
import './App.css';
import './Container.css';
import './temporary.css';

import { Sidebar } from "./containers/Sidebar_.js"
import { MessagesList } from "./containers/ListMessages.js"
import { AddMessage } from "./containers/AddMessage.js"

const App = () => {
    return (
      <div id="container" className="chat_window">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
}

export default App;