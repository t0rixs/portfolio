type Props = {
    acttype: string[]
    setActType: (actType: string) => void
    selected_acttype: string
}
export default function ActMenu({ acttype, setActType, selected_acttype }: Props) {
    return (
        <div>
            <nav style={{ fontSize: '1.5rem', marginBottom: '2rem', paddingBottom: '0.5rem', display: 'inline-block' }}>
                {acttype.map((at: string) => {
                    return (
                        <div className="menu-button-box" data-text={at}>
                            <a href={`#${at}`} onClick={(e) => { e.preventDefault(); setActType(at) }} className={at === selected_acttype ? "selectWorks" : "unselectWorks"}>{at}</a>
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}