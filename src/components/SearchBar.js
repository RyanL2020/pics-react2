import React from 'react';


class SearchBar extends React.Component {
    
    state = {term: ''};
       
    render() {
        return (
        <div className="ui segment"> 
            <form className="ui form">
                <div className="field">     
                <label>Image Search</label>
                </div>
                <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
            </form>
        </div>
        );
    };
}

//did this go to main
export default SearchBar;