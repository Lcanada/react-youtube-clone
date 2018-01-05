import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';
const API_KEY = 'AIzaSyCN3l_qRDwJAGE5zaAyaWG2ILKnIe3XrYk';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('pokemon');
}
    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
         });
      });
    }


  render(){
    return (
      <div className="App">
      "Searchin with Youtube"
      <br/>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>
    );
  }

}

export default App;


export default App;
