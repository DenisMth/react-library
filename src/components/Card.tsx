import './Card.css';

type CardType = {
    onClick: () => void;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content: React.ReactNode;
    img: React.ReactNode;
}

type CardProps = {
    type: 'primary' | 'secondary';
    card: CardType;
}

export default function Card({ type, card }: CardProps) {
    return (
        <section
            className={`card ${type}`}
            onClick={card.onClick}
        >
            <h3>{card.title}</h3>
            <h4>{card.subtitle}</h4>
            <p>{card.content}</p>
            <img src={card.img}/>
        </section>
    );
}