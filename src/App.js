import axios from 'axios';
import React from 'react';

class App extends React.Component{

  state = {
    isLoading : true,
    movies : [],
  };

   //axios 통해 영화 리스트 api 호출
    /*
    Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
    Ajax, fetch와 같은 웹 통신 기능을 제공하는 라이브러리입니다.
    HTTP 요청 취소 및 요청과 응답을 JSON 형태로 자동으로 변경해 줍니다.
    브라우저 호환성이 뛰어납니다.
    */
  getMovies = async () =>{
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  };


  //생명 주기 함수 -> render() 함수가 실행 되면 호출
  //영화 데이터 로딩  
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading: false});
    // },6000);

   this.getMovies();
  };

  render(){
    const { isLoading } = this.state;  
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  };

// 생성자 //x`
//   constructor(props){
//     super(props);
//     console.log('hello');
//   }

/* 생명 주기 함수 

//   componentDidMount(){
//     console.log('component rendered');
//   }
  
//   componentDidUpdate(){
//     console.log('I just updated');
//   }
//   componentWillUnmount(){
//     console.log("goodbye~~~~");
//   }
//   state={
//     count : 0,
//   };
*/

//   add = () =>{
//     console.log('add');
// //  this.setState({count:this.state.count + 1});
//     this.setState(current => ({
//       count: current.count+1,
//     }))
//   }
//   minus = () =>{
//     console.log('minus');
// //    this.setState({count:this.state.count - 1});
//     this.setState(current => ({
//       count: current.count-1,
//     }))
//   }

//   render(){
//     console.log("I'm render");
//     return( 
//     <div>
//     <h1>The number is :{this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//     </div>
//     )
//   };
}

export default App;
