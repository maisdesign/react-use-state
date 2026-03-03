function BonusCard({ activeLanguage }) {

    return <>
        <div className="card my-3 p-2">
            <h3 className="card-title">{activeLanguage.title}</h3 >
            <div className="card-body p-0">{activeLanguage.description}</div>
        </div>
    </>
}

export default BonusCard