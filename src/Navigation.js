import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Register from './components/Register'
import Login from './components/Login'


const Navigation = props => {
  return (
    <Router>
      <div>
        <Link to="/"><span className="navItem">Home</span></Link><span className="separator"> | </span>
        <Link to="/about"><span className="navItem">About</span></Link><span className="separator"> | </span>
        <Link to="/topics"><span className="navItem">Topics</span></Link><span className="separator"> | </span>
        <Link to="/login"><span className="navItem">Login</span></Link><span className="separator"> | </span>
        <Link to="/register"><span className="navItem">Register</span></Link>
        <hr />
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}


export default Navigation;
