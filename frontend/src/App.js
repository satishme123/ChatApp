import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={HomePage} path="/"/>
        <Route Component={ChatPage} path="/chats"/>
      </Routes>
   </div>
  );
}

export default App;
