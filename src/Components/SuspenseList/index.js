import './SuspenseList.css'

const SuspenseList = (props) => {
    return (
        <div className='suspense-list'>
            <label>{props.label}</label>
            <select 
                onChange={event => props.onDigited(event.target.value)} 
                required={props.required} 
                value={props.value}
            >
                <option value=""></option>
                {props.itens.map(i => <option key={i}>{i}</option>)}
            </select>
        </div>
    )
}

export default SuspenseList