import './Card.css'
function Card(props){

    const classe = 'card ' + props.className; 
    return <div className={classe}>{props.children}</div>;
}
export default Card;