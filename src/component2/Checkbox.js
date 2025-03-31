const checkbox = ({title, state, onChange}) => {
    return (
        <div key={index}>
        <input 
            type="checkbox" 
            onChange={onChange} 
            checked={state} />
            <label>{checkbox.title}</label>
        </div>
    )
}