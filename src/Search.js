import React, {Component} from 'react'
import './Style.css';
import logo from './logo.png';

class Search extends Component {
    state={
        value: '',
    };

    render() {
        return (
            <div className="searchbox">
                <input type="text" id="searchbar" placeholder="제목, 저자 등을 입력하세요!" onChange={this._inpTxt} onKeyDown={this._onEnter}></input>
                <div className="b" onClick={this._setQuery}>
                    <img src={logo} id="logo" />
                </div>
            </div>
        );
    }

    _onEnter = e => {
        if (e.keyCode === 13) {
          this.props.query(this.state.value);
        }
      };

    _inpTxt = e => {
        this.setState({value: e.target.value});
    };

    _setQuery = () => {
        this.props.query(this.state.value);
        
    };
}

export default Search;