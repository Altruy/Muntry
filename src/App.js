import React from 'react';
import './App.css';
import NotificationTimer from './components/NotificationTimer';

function App(props) {
  return (
    <div id="notification">
        <NotificationTimer text={"Speaker"} time={3} />
    </div>
  );
}

export default App;
