// import React from 'react';
// import './App.css';
// import Header from './component/Header';
// import Home from './component/Home';
// import Footer from './component/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       <Footer />
       
//     </div>
    
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
import SuccessPage from './SuccessPage';
import LoginPage from './LoginPage'; // Assuming you have a LoginPage component
import CreateResume from './CreateResume';
import ResumeDisplay from './ResumeDisplay';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={RegistrationForm} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={CreateResume} />
        <Route path="/resume" component={ResumeDisplay} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


