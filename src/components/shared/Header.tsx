export default function Header({ location }: { location: string }) {
    return (
        <header style={{
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 10,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Portfolio.</h1>
                <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <a onClick={() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) }}>About</a>
                    {location === "/acts" ? <a onClick={() => { document.getElementById("acts")?.scrollIntoView({ behavior: "smooth" }) }}>Activities</a> : <a onClick={() => { document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }) }}>Works</a>}
                    <a onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}>Contact</a>
                </nav>
            </div>
        </header>
    )
}