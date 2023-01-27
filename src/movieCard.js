import MovieList from "./movieCard2";
export default function MovieCard(props){
const myStyle={
position:'relative',
backgroundColor:'#211f1f8d',
color:'white',
width:"1090px",
left:"389px",
bottom:"310px",
height:"406px",
textAlign:"center",
zIndex:"0.5"
}

const myStyleImage={
width:"120px",
zIndex:"1",
position:'relative',
top:'100px',
left:"20px"
}

    return (
        <div style={{position:'relative',bottom:"62px"}} >
        <div style={myStyleImage}> {props.image}</div>
        <div style={myStyle}><MovieList title={props.title} description={props.description} posterUrl={props.posterUrl} rating={props.rating}/> </div>
        </div>
    )
}