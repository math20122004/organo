import { useState } from 'react'
import Button from '../Button'
import SuspenseList from '../SuspenseList'
import TextCamp from '../TextCamp'
import './Forms.css'

const Forms = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()       
        props.onCadastredColaborator({
            name,
            position,
            image,
            team
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
        </section>
    )
}

export default Forms