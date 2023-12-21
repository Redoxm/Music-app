import React from "react";

import "./TrackList.css"
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        console.log("props.tracks: ", this.props.tracks)
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                        return(
                        <Track 
                        track = {track}
                        key = {track.id}
                        onAdd = {this.props.onAdd}
                        isRemoval = {this.props.isRemoval}
                        onRemove = {this.props.onRemove}
                        />
                        )
                    
                })
            }
            </div>
        )
    }
}

// export default TrackList;

// import React from "react";
// import "./TrackList.css";
// import Track from "../Track/Track";

// class TrackList extends React.Component {
//     render() {
//         return (
//             <div className="TrackList">
//                 {this.props.tracks.map(track => (
//                     <Track
//                         track={track}
//                         key={track.id}
//                         onAdd={this.props.onAdd}
//                         isRemoval={this.props.isRemoval}
//                         onRemove={this.props.onRemove}
//                     />
//                 ))}
//             </div>
//         );
//     }
// }

TrackList.defaultProps = {
    tracks: [] // Set a default empty array if tracks is not provided
}

export default TrackList;