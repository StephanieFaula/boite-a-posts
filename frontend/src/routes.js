import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import PostList from './containers/post-list';
import PostForm from './containers/post-form';
import Post from './containers/post';
import NotFound from './components/not-found';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={PostList} />
                        <Route path="/create-post" component={PostForm} />
                        <Route path="/post/:id" component={Post} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;