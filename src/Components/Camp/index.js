import './Camp.css'

const Camp = (props) => {
    const onDigited = (event) => {
        props.onDigited(event.target.value)
    }

    return (
        <div className={`camp camp-${props.typeCamp}`}>
            <label>{props.label}</label>
            <input type={props.typeCamp ?? 'text'} value={props.value} onChange={onDigited} required={props.required} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Camp