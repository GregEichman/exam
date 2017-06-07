import React, { Component } from 'react';
import UserForm from './UserForm';
import UserRepoList from './UserRepoList';
import LanguageList from './LanguageList';

class App extends Component {
    render() {
        return (
        	<div>
	            <h1>Github viewer</h1>
	            <h3> search repository by username </h3>
	            <input type="text" placeholder="username" />
	            <br></br>
	            <button>Search</button>
	            <h2> person's-name-here repository </h2>
	            <form>
					<select name="language">
					    <option value="PLI">PLI</option>
					    <option value="JavaScript">JavaScript</option>
					    <option value="react">react</option>
					    <option value="html">html</option>
				  	</select>
				  	
				</form>
				<h2> language-filtered-repo-name-here repository </h2>
				<table className="table" >
					<tr>
					    <th>Stats</th>
					    <th>Forks</th>
					    <th>Language</th>
				 	</tr>
                    <tr> 
                        <td>stats-data-here</td>
                        <td>forks-data-here</td>
                        <td>flanguage-data-here</td>
                    </tr>
                </table>
            </div>
        )
    }
}
//I'm unable to debug why my component files will not render so I've done the static version in app
export default App;
