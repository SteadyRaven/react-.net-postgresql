import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import LogIn from './components/LogIn.js';
import Main from './components/Main.js';
import SignUp from './components/SignUp.js';

 export const TestContext = createContext();

function App() {

  const [testcase, setTestCase] = useState("hello");

  return (
    <TestContext.Provider value={ {testcase, setTestCase}}>
      <Router>
        <div className="App">    
        <Header></Header>       
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path ="sign-in" element={<LogIn />} />
          <Route path ="sign-up" element={<SignUp />} />
        </Routes>
      </div> 
      </Router>  
    </TestContext.Provider>
  );
}

export default App;
