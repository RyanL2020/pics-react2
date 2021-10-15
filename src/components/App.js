import React from 'react';
import unsplash from '../api/unsplash';
//import config from '../config'
import SearchBar from './SearchBar'
import ImageList from './ImageList';

//const accessKey = config.access_key

class App extends React.Component {

    state = { images: []};


    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: { query: term}
        });
    
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{margineTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} /> 
                <ImageList images={this.state.images} /> 
            </div>
        );
    }
}




export default App;