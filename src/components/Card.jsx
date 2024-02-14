import './card.scss';

function Card(props){
    return(
        <div className="card__content">
            <p className="word">{props.word}</p>
            <p className="transcription">{props.transcription}</p>
        </div>
    )
}

export default Card;