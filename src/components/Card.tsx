import {useState} from "react";
import './Card.css';
import Btn from './Btn';

type CardType = {
    onClick: () => void;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content: React.ReactNode;
    img: string;
    backContent?: React.ReactNode;
    buttonLink?: string;
}

type CardProps = {
    type: 'primary' | 'secondary';
    card: CardType;
    btnText?: string;
}

export default function Card({ type, card, btnText }: CardProps) {
    const [flipped, setFlipped] = useState(false);

    function handleClick(){
        setFlipped((prev) => !prev);
        card.onClick?.();
    }

    return (
        <section
            className={`card ${type} ${flipped ? "flipped" : ""}`}
            onClick={handleClick}
        >
            <div className="card-inner">
                <div className="card-front">
                    <h3>{card.title}</h3>
                    <h4>{card.subtitle}</h4>
                    <p>{card.content}</p>
                    <img src={card.img}/>
                    <Btn type={`${type}`} btn={{ onClick: () =>  window.open(card.buttonLink, "_blank"), children: btnText }}/>
                </div>
                <div className="card-back">
                    {card.backContent ?? <h3>Surprise !</h3>}
                </div>
            </div>
        </section>
    );
}