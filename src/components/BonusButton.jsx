function BonusButton({ id, title, bonusIsActive, setBonusIsActive }) {
    function setterBonus() {
        setBonusIsActive(id)
    }
    const bonusClassName = `btn me-2 ${(bonusIsActive === id) ? 'btn-warning' : 'btn-primary'}`;
    return <>

        <button className={bonusClassName} onClick={setterBonus}>{title}</button >
    </>
}

export default BonusButton