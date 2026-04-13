import './Card.css';

function Card ({title, children}) {
    return (
        <section className="generic-card">
            <h3>{title}</h3>
            <div className='card-content'>
                {children}
            </div>
        </section>
    );
}

export default Card;