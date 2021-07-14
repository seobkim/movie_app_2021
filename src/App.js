function Food({name,picture}){
  return (<div>
      <h2>I Like {name}</h2>
      <img src={picture} alt={name}/>
    </div>)
    ;
}
const foodILike=[
  {
    id:1,
    name:'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tY7yWP7-KjRrTilhGr6ZggHaE9%26pid%3DApi&f=1'
  },
  {
    id:2,
    name:'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1'
  },
  {
    id:3,
    name:'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbPzuedGhvUxXy7ufrwwAAHaE8%26pid%3DApi&f=1'
  },
  {
    id:4,
    name:'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.17X5iMJQXahTyhVOQ3nlfQHaEK%26pid%3DApi&f=1'
  },
  {
    id:5,
    name:'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K0ZVBZ76zesw6mZV3q3OcAHaFj%26pid%3DApi&f=1'
  }

];

/* 구조 분해 할당 ES6문법 중 하나 
  위와 같이 점 연산자를 사용하지않아도됨
function Food(props){
  console.log(props)
  return <h1>I Like {props.fav}</h1>
}
 */
function App() {
  return (
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name = {dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
