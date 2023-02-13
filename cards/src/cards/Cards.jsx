import './Cards.css'
function Cards(props){
    
return <div id="Container">
    <img id='image' src={props.image} />
    <h2>{props.title}</h2>
    <h4>{props.descreption}</h4>
    <div id="buttons"><button>Share</button>
    <button>Explore</button>
    </div>
</div>
}
export default Cards;