

function Opener({ isActive, setIsActive, title }) {
    function check() {
        { isActive ? setIsActive(false) : setIsActive(true) };
    }
    const className = `card-title btn btn-sm${isActive ? ' btn-warning' : ' btn-primary'}`;
    return <>

        <button className={className} onClick={check}> {title}</button >
    </>
}

export default Opener