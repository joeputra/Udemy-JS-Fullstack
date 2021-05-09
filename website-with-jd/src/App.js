import React, { Component } from 'react';
import PageWrapper from './component/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'

//Pages
import Home from './component/Pages/Home'
import About from './component/Pages/About'
import Contact from './component/Pages/Contact'
import Login from './component/Pages/Login'
import Blog from './component/Pages/Blog'
import Single from './component/Pages/Single'


//Admin Pages
import Dashboard from './component/Pages/Admin/Dashboard'
import Users from './component/Pages/Admin/Users'
import Posts from './component/Pages/Admin/Posts'
import AddPost from './component/Pages/Admin/AddPost'




import AdminWrapper from './component/AdminWrapper'
import LoginWrapper from './component/LoginWrapper'


class App extends Component {
  render() {
  return (
    <Router>

    <Route
      path='/admin/users'
      render={props => {
        return (
          <div>
              {this.props.auth.token ?
                <AdminWrapper> 
                  <Users />
                </AdminWrapper>
              :
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
          </div>
        )
      }}
    />

    <Route
      path='/admin/posts/:view/:id'
      exact={true}
      render={props => {
        return (
          <div>
              {this.props.auth.token ?
                <AdminWrapper> 
                  <AddPost />
                </AdminWrapper>
              :
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
          </div>
        )
      }}
    />

    <Route
      path='/admin/posts/:view'
      exact={true}
      render={props => {
        return (
          <div>
              {this.props.auth.token ?
                <AdminWrapper> 
                  <AddPost />
                </AdminWrapper>
              :
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
          </div>
        )
      }}
    />

    <Route
      path='/admin/posts'
      exact={true}
      render={props => {
        return (
          <div>
              {this.props.auth.token ?
                <AdminWrapper> 
                  <Posts />
                </AdminWrapper>
              :
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
          </div>
        )
      }}
    />

    <Route
      exact={true}
      path="/admin"
      render={props => {
        return (
          <div>
              {this.props.auth.token ?
                <AdminWrapper> 
                  <Dashboard />
                </AdminWrapper>
              :
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
          </div>
        )
      }}
    />
        <Route
          exact={true} 
          path="/"
          render={props => (
            <PageWrapper>
            <Home {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/blog/:slug"
          exact={true}
          render={props => (
            <PageWrapper>
            <Single {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/blog"
          exact={true}
          render={props => (
            <PageWrapper>
            <Blog {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/about"
          render={props => (
            <PageWrapper>
            <About {...props} />
            </PageWrapper>
          )}
        />
         
        <Route
          path="/contact"
          render={props => (
            <PageWrapper>
            <Contact {...props} />
            </PageWrapper>
          )}
        />

      
   </Router>
  );
}
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
