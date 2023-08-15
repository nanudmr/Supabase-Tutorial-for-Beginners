const SmoothieCard = ({smoothie}) => {
    return ( 
        <div className="smoothie-card" key={smoothie.id}>
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
        </div>
     );
}
 
export default SmoothieCard;