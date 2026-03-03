function Opener({ isActive, setIsActive, title }) {
    const className = `btn ${isActive ? 'btn-warning' : 'btn-primary'}`;
    return (
        <button className={className} onClick={() => setIsActive(!isActive)}>{title}</button>
    )
}

export default Opener