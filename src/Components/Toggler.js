
const Toggler = (props) => {
    return (
        <label class="switch">
            <input type="checkbox" onChange={props.onChange} />
            <span class="slider round"></span>
        </label>
    )
}

export default Toggler