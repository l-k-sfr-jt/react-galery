import unsplash from "../api/unsplash";
import React from 'react';
import ImagesList from "./ImagesList";
import SearchBar from "./SearchBar";




class App  extends React.Component{

    state = { images: [] }

    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
           params : { query: term, per_page: 40 }
       });
       this.setState({ images: response.data.results})
    }

    render() {
      return(
          <div className="ui container">
              <SearchBar onSubmit={this.onSearchSubmit}/>
              <ImagesList images={this.state.images} />
        </div>
      )
    }
}

export default App;