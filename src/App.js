import { useState } from 'react';
import Banner from './Components/Banner';
import Forms from './Components/Forms';
import Team from './Components/Team';
import Rodape from './Components/Rodape';
import { v4 as uuidv4} from 'uuid'

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ])

  const [colaborators, setColaborators] = useState([])

  const onSaveColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator])
  }

  const onDeleteColaborator = (id) => {
    setColaborators(colaborators.filter((v) => v.id !== id))
  }

  const changeColorTeam = (color, id) => {
    setTeams(teams.map(t => {
      if(t.id === id) {
        t.color = color
      }
      return t
    }))
  }

  const onCadastredTeam = (newTeam) => {
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  const changeFavorite = (id) => {
    setColaborators(colaborators.map(c => {
      if(c.id === id) c.favorite = !c.favorite
      return c
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        onCadastredTeam={onCadastredTeam} 
        onCadastred={onSaveColaborator} 
        team={teams.map(t => t.name)}
      />
      {teams.map(t => 
        <Team key={t.name}
              onFavorite={changeFavorite}
              changeColor={changeColorTeam}
              team={t}
              colaborators={colaborators.filter(c => c.team === t.name)}
              onDelete={onDeleteColaborator}
        />
      )}
      <Rodape />
    </div>  
  );
}

export default App; 
