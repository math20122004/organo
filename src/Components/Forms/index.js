import { useState } from 'react'
import Button from '../Button'
import SuspenseList from '../SuspenseList'
import TextCamp from '../Camp'
import './Forms.css'
import { v4 as uuidv4 } from 'uuid'

const Forms = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (event) => {
        event.preventDefault()       
        props.onCadastred({
            id: uuidv4(),
            name,
            position,
            image,
            team,
            favorite: false
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='forms'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextCamp
                    required={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={name}
                    onDigited={value => setName(value)}
                />
                <TextCamp 
                    required={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    value={position}
                    onDigited={value => setPosition(value)}
                />
                <TextCamp 
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    value={image}
                    onDigited={value => setImage(value)}
                />
                <SuspenseList 
                    required={true} 
                    itens={props.team} 
                    label='Time' 
                    value={team}
                    onDigited={value => {setTeam(value)}}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.onCadastredTeam({ name: teamName, color: teamColor })
                setTeamName('')
                setTeamColor('')
                }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextCamp
                    required
                    label='Nome'
                    placeholder='Digite o nome do time'
                    value={teamName}
                    onDigited={value => setTeamName(value)}
                />
                <TextCamp 
                    required
                    label='Cor'
                    placeholder='Digite a cor do time'
                    typeCamp='color'
                    value={teamColor}
                    onDigited={value => setTeamColor(value)}
                />
                <Button>
                    Criar novo time
                </Button>
            </form>
        </section>
    )
}

export default Forms