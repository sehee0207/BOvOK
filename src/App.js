import React, { Component } from 'react';
import Search from './Search'
import Setcontent from './Setcontent'
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
  
  componentDidMount() {}

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

    let headers = { Authorization: 'KakaoAK '+ '227c557d727e7912353d9bcb15d9f333'}

    const _init = {
      method: 'get',
      headers: headers,
    };
    fetch(`https://dapi.kakao.com/v3/search/book?query=${this.state.query}`, _init)
    .then(response => response.json())
    .then(json => this.setState({
      title: "- 제목 : "+json.documents[0].title,
      authors: "- 저자 : "+json.documents[0].authors[0],
      price: "- 판매가 : "+json.documents[0].price,
      publisher: "- 출판 : "+json.documents[0].publisher,
      status: "- 판매 상태 : "+json.documents[0].status,
      content: "- 책 소개 : "+json.documents[0].contents+" ...중략",
      thumbnail: json.documents[0].thumbnail,
    })
    );

    return fetch(`https://dapi.kakao.com/v3/search/book?query=${this.state.query}`, { headers })
    .then(res => res.json)
    .then(json => json.documents)
    .catch(err => console.log(err))
  };
  render() {
    return (
      <div className="App">
        <Search books={this._callApi} query={this._getQueryValue}/>
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