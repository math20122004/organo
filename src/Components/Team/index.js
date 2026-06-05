import Colaborator from '../Colaborator'
import './Team.css'

const Team = (props) => {
    return (
        props.colaborators.length > 0 &&
        <section key={props.colaborators.name} className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(c => <Colaborator backgroundColor={props.primaryColor} key={c.name} name={c.name} position={c.position} image={c.image}/>)}
            </div>
        </section>
    )
}

export default Team