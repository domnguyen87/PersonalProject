import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Register from './components/Register'
import Login from './components/Login'
import Contacts from './components/contacts/Contacts'
import WorkOutPlans from './components/workout plans/WorkOutPlans'
import Careers from './components/careers/Careers'

class Navigation extends React.Component{
  constructor(props) {
    super(props)
    this.setState = {}
  }

  render() {
    
      return(
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/workoutplans" component={WorkOutPlans} />
          <Route path="/careers" component={Careers} />


        </Switch>
      )
  }
}

// const Navigation = props => {
//   return (
//     <Router>
//       <div>
//         <Link to="/"><span className="navItem">Home</span></Link><span className="separator"> | </span>
//         <Link to="/about"><span className="navItem">About</span></Link><span className="separator"> | </span>
//         <Link to="/topics"><span className="navItem">Topics</span></Link><span className="separator"> | </span>
//         <Link to="/login"><span className="navItem">Login</span></Link><span className="separator"> | </span>
//         <Link to="/register">Register</Link>
//         <hr />
//           <Route exact path="/" component={Login} />
//           <Route path="/about" component={About} />
//           <Route path="/topics" component={Topics} />
//           <Route path="/register" component={Register} />
//           <Route path="/login" component={Login} />
//       </div>
//     </Router>
//   )
// }


export default Navigation;
