import { languages } from './data/languages.js';
import Card from './components/CardGeneral.jsx';
import { useState } from 'react';
import BonusButton from './components/BonusButton.jsx';
import BonusCard from './components/BonusCard.jsx';

function App() {
  const [bonusIsActive, setBonusIsActive] = useState(languages[0].id);
  const activeLanguage = languages.find((language) => language.id === bonusIsActive);
  return (
    <div className="container-fluid">
      <h1>Learn Web development</h1>
      <div className="container">
        <h2>Version 1</h2>
        {
          languages.map(
            ({ id, title, description }) => (
              <div key={id} className="card">
                <Card title={title} description={description} />
              </div>
            )
          )
        }
      </div>
      <div className="container">
        <h2>Versione bonus</h2>
        <div className="d-grid gap-2 d-md-block">
          {languages.map(
            ({ id, title }) => (
              <BonusButton key={id} id={id} title={title} bonusIsActive={bonusIsActive} setBonusIsActive={setBonusIsActive} />
            )
          )}
        </div>
        <BonusCard activeLanguage={activeLanguage} />
      </div>
    </div>
  )
}

export default App