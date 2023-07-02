import Tests from "./Tests";
import User from "./User"
import WordsContainer from "./WordsContaine/WordsContainer";
const products = [
  {name: 'Michael', lastname: 'Jackson', title: 'director'},
  {name: 'Ivan', lastname: 'Ianov', title: 'manager'},
  {name: 'Alex', lastname: 'Alexandrov', title: 'helper'},
]


function App() {
  return (
    <div>
      <div>
{
  products.map(item=> <User key={item.id} {...item}/>)
}

    </div>
    <p>Слова</p>
    <div>
      <WordsContainer />
    </div>
    </div>
  )
}


export default App;