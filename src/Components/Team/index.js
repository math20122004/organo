import hexToRgba from 'hex-to-rgba'
import Colaborator from '../Colaborator'
import './Team.css'

const Team = ({team, colaborators, onDelete, changeColor, onFavorite}) => {
    return (
        colaborators.length > 0 &&
        <section key={colaborators.name} className='team' style={{ backgroundColor: hexToRgba(team.color, '0.3') }}>
            <input onChange={e => changeColor(e.target.value, team.id)} value={team.color} type='color' className='input-color' />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((c, i) => {
                    return (
                        <Colaborator 
                            key={i} 
                            colaborator={c} 
                            backgroundColor={team.color} 
                            onDelete={onDelete}
                            onFavorite={onFavorite}/>
                        )
                    })}
            </div>
        </section>
    )
}

export default Team