function Food(props){
  return (<div>
      <h2>I Like {props.name}</h2>
      <img src={props.picture}/>
    </div>)
    ;

}
const foodILike=[
  {
    name:'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tY7yWP7-KjRrTilhGr6ZggHaE9%26pid%3DApi&f=1'
  },
  {
    name:'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1'
  },
  {
    name:'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbPzuedGhvUxXy7ufrwwAAHaE8%26pid%3DApi&f=1'
  },
  {
    name:'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.17X5iMJQXahTyhVOQ3nlfQHaEK%26pid%3DApi&f=1'
  },
  {
    name:'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K0ZVBZ76zesw6mZV3q3OcAHaFj%26pid%3DApi&f=1'
  }

];

/* 구조 분해 할당 ES6문법 중 하나 
  위와 같이 점 연산자를 사용하지않아도됨
function Food({fav}){
  console.log({fav})
  return <h1>I Like {fav}</h1>
}
 */

function renderFood(dish){
  return <Food name = {dish.name} picture={dish.image}/>;
}
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
