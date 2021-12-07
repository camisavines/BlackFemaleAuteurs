const Tooltip = ({label, text}) => {
    return (
        <span class="btn" data-toggle="tooltip" data-placement="bottom" title={label}>
            {text}
        </span>
    )
}

export default Tooltip;