import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render() {
        return(
                <div className="SearchResults">
                    <h2>Results</h2>
                    <TrackList tracks= {this.props.searchResults} onAdd= {this.props.onAdd} />
                </div>
            )
        }

    }



// class SearchResults extends React.Component {
//     render() {
//         return (
//             <div className="SearchResults">
//                 <h2>Results</h2>
//                 {this.props.SearchResults ? (
//                     <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         );
//     }
// }

export default SearchResults;