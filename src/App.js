import React, { Component } from 'react';
import { Layout,Row,Col } from 'antd'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import WrapperHOC from './hoc/WrapperHOC/WrapperHOC'
import Logout from './components/Logout/Logout'
import { connect } from 'react-redux'
import AsyncComponent from './hoc/AsyncComponent'
import Classes from './App.css';
import CustomFooter from './components/Footer/Footer'
const { Header, Footer, Content } = Layout;

const AsyncMovieSearchBox = AsyncComponent(() => { return import('./components/MovieSearchBox/MovieSearchBox') });
const AsyncMovieDetails = AsyncComponent(() => { return import('./components/MovieDetails/MovieDetails') });
const AsyncLogin = AsyncComponent(() => { return import('./components/LoginForm/LoginForm') });


class App extends Component {
  render() {
    let authenticatedRoutes = (
      <Switch>
        <Route path="/search" component={AsyncMovieSearchBox}></Route>
        <Route path="/movie/:id" component={AsyncMovieDetails}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Redirect to="/search" />
      </Switch>
    );

    let unauthenticatedRoutes = (
      <Switch>
        <Route path="/login" component={AsyncLogin}></Route>
        <Redirect to="/login" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <WrapperHOC>
          <Layout className={Classes["layout"]}>
            <Header className={Classes["header"]}>
              <NavigationBar></NavigationBar>
            </Header>
            <Content className={Classes["content"]}>
              <Row >
                <Col span={24} >
                    {(this.props.isLoggedIn) ? authenticatedRoutes : unauthenticatedRoutes}
                </Col>
              </Row>
            </Content>
            <Footer className={Classes["footer"]}>
                  <CustomFooter></CustomFooter>
            </Footer>
          </Layout>
        </WrapperHOC>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducerSlice.loggedIn
  }
}

export default connect(mapStateToProps)(App);
