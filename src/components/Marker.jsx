function Marker({ description, title }) {
    const marker = description.split(title);
    const marked = marker.map((sentence, index) => {
        return (
            <span key={index}>
                {sentence} {(index < marker.length - 1) && <mark>{title}</mark>}
            </span>)
    })
    return <>{marked}</>
}

export default Marker