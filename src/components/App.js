import React from 'react';
import axios from 'axios';
//import config from '../config'
import SearchBar from './SearchBar'

//const accessKey = config.access_key

class App extends React.Component {

    state = { images: []};


    onSearchSubmit = async (term) => {
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID gGDxFofEr0LMgcbkGIkYmOLZE-uoPn8_0oWF9n_t-k4'
            }
        });
        console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{margineTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} /> 
                Found: {this.state.images.length} images
            </div>
        );
    }
}




export default App;