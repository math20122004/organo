import './TextCamp.css'

const TextCamp = (props) => {
    const onDigited = (event) => {
        props.onDigited(event.target.value)
    }

    return (
        <div className="text-camp">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigited} required={props.required} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextCamp