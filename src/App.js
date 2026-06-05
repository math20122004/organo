import { useState } from 'react';
import Banner from './Components/Banner';
import Forms from './Components/Forms';
import Team from './Components/Team';
import Rodape from './Components/Rodape';

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondColor: "#D9F7E9"
    },
    {
      name: "Front End",
      primaryColor: "#82CFFA",
      secondColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondColor: "#F0F8E2"
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondColor: "#FDE7E8"
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9"
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF"
    },
  ]

  const [colaborators, setColaborators] = useState([])

  const onSaveColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms 
        onCadastredColaborator={onSaveColaborator} 
        team={teams.map(t => t.name)}
      />
      {teams.map(t => 
        <Team key={t.name} 
              name={t.name} 
              primaryColor={t.primaryColor} 
              secondColor={t.secondColor}
              colaborators={colaborators.filter(c => c.team === t.name)}/>
      )}
      <Rodape />
    </div>  
  );
}

export default App; 
