import React, { Component } from 'react';
import Search from './Search';
import Setcontent from './Setcontent';
class App extends Component {

  state = {
    query: null,
    bookInfo: null,
    authors: null,
    content: null,
    price: null,
    publisher: null,
    status: null,
    title: null,
    thumbnail: null,
  };

  //!< Async / Await 형식을 이용한 비동기 요청 처리
  //!< error 확인을 쉽게 할 수 있게 함
  
  _getQueryValue = async value => {
    await this.setState({ query: value });
    this._getBooks();
  };

  _getBooks = async () => {
    const bookInfo = await this._callApi();
    if(this.state.status === "- 판매 상태 : "){
      this.setState({status: "- 판매 상태 : 품절"});
    }
  };

  _callApi = () => {

    //!< Header
    let headers = { Authorization: 'KakaoAK '+ '227c557d727e7912353d9bcb15d9f333'}

    //!< url 연결 방식과 Header 설정
    const _init = {
      method: 'get',
      headers: headers,
    };
    //!< fetch : http 요청에 최적화 되어있는 네트워크 요청 함수
    fetch(`https://dapi.kakao.com/v3/search/book?query=${this.state.query}`, _init)
    .then(response => response.json()) //!< json 형식으로 요청
    .then(json => this.setState({ //!< 각종 정보 해당 경로로 받아오기
      title: "- 제목 : "+json.documents[0].title,
      authors: "- 저자 : "+json.documents[0].authors[0],
      price: "- 판매가 : "+json.documents[0].price,
      publisher: "- 출판 : "+json.documents[0].publisher,
      status: "- 판매 상태 : "+json.documents[0].status,
      content: "- 책 소개 : "+json.documents[0].contents+" ...중략",
      thumbnail: json.documents[0].thumbnail,
    })
    );
    //!< Search.js로 보낼 값을 json 형식으로 받아 리턴한다.
    return fetch(`https://dapi.kakao.com/v3/search/book?query=${this.state.query}`, { headers })
    .then(res => res.json)
    .then(json => json.documents)
    .catch(err => console.log(err))
  };
  render() {
    return (
      <div className="App">
        {/*Search에서 검색한 값으로 API값을 받아온다.*/ }
        <Search books={this._callApi} query={this._getQueryValue}/>
        {/*API에서 받아온 값을 가시화함*/ }
        <Setcontent 
        title={this.state.title} 
        authors={this.state.authors} 
        contents={this.state.content}
        price={this.state.price}
        publisher={this.state.publisher}
        status={this.state.status}
        thumbnail={this.state.thumbnail} />
      </div>

    )
  }
}

export default App;