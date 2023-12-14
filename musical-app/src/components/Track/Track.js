import React, {Component} from "react";
import "./Track.css";

export default class Track extends Component {
    constructor(props) {
         super(props);
        
         this.addTrack = this.addTrack.bind(this);
         this.removeTrack = this.removeTrack.bind(this);
    }

   addTrack(event) {
    this.props.onAdd(this.props.track);
   }

   removeTrack(event) {
    this.props.onRemove(this.props.track);
   }

   renderAction() {
    if (this.props.isRemoval) {
        return(
            <button className="Track-action" onClick={this.removeTrack}>-</button>
        )
    }
    return(
        <button className="Track-action" onClick={this.addTrack}>+</button>
    )
   }

    render() {
        return(
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>
                    {this.props.track.name} | {this.props.track.album}
                </p>
                <iframe
                    src={"https://open.spotify.com/embed/track/".concat(this.props.track.id)}
                    width= "300"
                    height= "80"
                    frameborder= "0"
                    allowtransparency = "true"
                    allow="encrypted-media"
                    title="preview"
                />
            </div>
            {this.renderAction()}
        </div>
        )
    }
}