import React, {Component} from 'react'
import './Style.css';
import logo from './logo.png';

class Search extends Component {
    state={
        value: '',
    };

    render() {
        return (
            //!< 검색창과 찾기 버튼
            <div className="searchbox">
                <input type="text" id="searchbar" placeholder="제목, 저자 등을 입력하세요!" onChange={this._inpTxt} onKeyDown={this._onEnter}></input>
                <div className="b" onClick={this._setQuery}>
                    <img src={logo} id="logo" />
                </div>
            </div>
        );
    }

    _onEnter = e => {
        if (e.keyCode === 13) { //!< Enter 키가 눌렸다면 
        //!< 검색어 받아오기
          this.props.query(this.state.value);
        }
      };

    _inpTxt = e => { //!< input에 치는 값 받아오기
        this.setState({value: e.target.value});
    };

    _setQuery = () => { //!< 검색어 받아오기
        this.props.query(this.state.value);
        
    };
}

export default Search;