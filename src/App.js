import React, { Component } from 'react';
import UserForm from './UserForm';
import UserRepoList from './UserRepoList';
import LanguageList from './LanguageList';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
class App extends Component {
    state = {
        users: [],
        repos: []
    }
    handleSearchFormSubmit = (searchTerm) => {
        this.setState({
            repos: []
        })
        return axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(({ data }) => {
                const { items: users } = data;
                if (users < 1) {
                    this.setState({
                        users: []
                    })
                    throw new Error('No results');
                }
                this.setState({
                    users: users
                });
            });
    }

    handleUserClick = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
    }
    render() {
        return (
            <Router>
                <div className="App container">
                    <h1>Github Viewer</h1>
                    <h3> search repository by username </h3>
                    <Route path="/" render={(props) => {
                        return <UserForm {...props} onSubmit={this.handleSearchFormSubmit} />
                    }}

                    />
                    <UserRepoList users={this.state.users} onClick={this.handleUserClick} />
                    <Route path="/:user/repos" render={(props) => {
                        if (this.state.users.length < 1) {
                            return <Redirect to="/" />
                        }
                        return <UserRepoList repos={this.state.repos} />
                    }} />
                </div>
            </Router>
        )
    }
}
export default App;

// Please see error.doc for a screen shot. I used the example you showed us as a starting point. I can’t seem to get past this error even if I attempt to use a very basic component file. Therefore, I was unable to make any additional progress from this point. I attempted to look this up on the internet and found no solution.
