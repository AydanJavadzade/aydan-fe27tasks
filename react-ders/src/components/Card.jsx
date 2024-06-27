const Card = ({ name, username }) => {
    return <>
        <div className="card-item">
            <h3>{name}</h3>
            <p>{username}</p>
        </div></>
}
export default Card;