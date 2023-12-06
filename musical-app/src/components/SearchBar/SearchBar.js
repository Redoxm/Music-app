import React, {Component} from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
    constructor(props) {
         super(props);
         this.state = {
            term: "",
         }
         this.handleTermChange = this.handleTermChange.bind(this);
         this.Search = this.Search.bind(this);
         this.handleEnter = this.handleEnter.bnd(this);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    Search() {
        this.props.onSearch(this.state.term);
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            this.Search();
        }
    }

    render() {
        <div className="SearchBar">
            <input placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter}/>
            <button className="SearchButton" onClick={this.Search}>SEARCH</button>
        </div>
    }
}