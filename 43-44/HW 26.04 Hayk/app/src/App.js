import { useState } from 'react';
import './App.css';
import { words } from './components/Data/words';
import CardsContainer from './components/CardsContainer';
import AddCardForm from './components/AddCardForm';

function App() {



const [cards, setCards] = useState(words)

const newCard = (word) => {
  const newState = [...cards, word]
  setCards(newState)}

  const deleteCard = (delId) => {
    const newState = cards.filter(({id}) => id !== delId  )
    setCards(newState)
  }

  return (
    <div>
        <AddCardForm newCard={newCard}/>
        <CardsContainer cards={cards} deleteCard={deleteCard}/>
        

    </div>
  );
}

export default App;
