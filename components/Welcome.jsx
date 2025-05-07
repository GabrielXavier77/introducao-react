export default function Welcome({name}) {
    const data = new Date().toLocaleDateString('pt-BR', {weekday: 'long'})
    
    return (
        <div className="welcome">
            <h2>Bem-vindo, {name}!</h2>
            <p>Hoje é {data}</p>
        </div>
    )
}