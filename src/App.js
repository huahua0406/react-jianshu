import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//导入样式js文件
import { GlobalStyle } from './style.js'
import { GlobalIconfont } from './assets/fonts/iconfont.js'
// store
import store from './store';
// 导入组件
import Header from './layouts/header';
// page
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import Detail from './pages/detail/loadable';
import NoMatch from './pages/error/NoMatch';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <GlobalStyle />
                    <GlobalIconfont />
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/detail/:id" component={Detail}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/write" component={Write}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
            </Provider>
        )
    }
}

export default App;
