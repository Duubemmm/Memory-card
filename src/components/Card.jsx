const Card = ({ id, name, image }) => {
const handleOnClick = () => {

}
    return (
        <div className="border-4 border-sky-900 flex-wrap" onclick={handleOnClick}>
            <img src={image} alt={name} key={id}/>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;