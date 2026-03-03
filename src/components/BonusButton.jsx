function BonusButton({ id, title, bonusIsActive, setBonusIsActive }) {
    const bonusClassName = `btn me-2 ${bonusIsActive === id ? 'btn-warning' : 'btn-primary'}`;
    return (
        <button className={bonusClassName} onClick={() => setBonusIsActive(id)}>{title}</button>
    )
}

export default BonusButton