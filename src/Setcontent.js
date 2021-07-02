import './Style.css';

//!< 함수 컴포넌트 -> props 사용
//!< props 컴포넌트와 state 컴포넌트의 차이점 
//!< props는 부모 컴포넌트가 자식 컴포넌트에게만 주는 값이다.
//!< stae는 컴포넌트는 내부에서 값을 변경 할 수 있다. (this.setState)

function Setcontent(props) { 
    return (
        <div className="book-info">
        <img src={props.thumbnail}/>
        <p>{props.title}</p>
        <p>{props.authors}</p>
        <p>{props.publisher}</p>
        <p>{props.price}</p>
        <p>{props.status}</p>
        <p>{props.contents}</p>
        </div>
    )
}

export default Setcontent;

