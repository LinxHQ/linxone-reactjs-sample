import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from './components/sideBar/SideBar'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TablePage from './pages/TablePage';
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="admin_app">
          <SideBar />
          <div className="main_content">
            <Header />
            <TablePage />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
