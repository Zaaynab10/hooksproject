import {useState} from "react"
export default function MovieCardDeux(props){
const[title]=useState(props.title);
const[description]=useState(props.description);
const[posterUrl]=useState(props.posterUrl);
const[rating]=useState(props.rating);



    return(
    <div>
     <div style={{fontSize:"27px",fontFamily:"fantasy" ,position:"relative",right:"70px", top:"12px" ,backgroundColor:"red",width:"1160px"}}>{title}</div>
     <div style={{position:"relative",left:"245px",fontSize:"24px",top:"100px",height:"200px", width:"550px" ,textAlign:"justify" , wordSpacing:"7px"}}>{description}</div>
     <button style={{position:"relative",top:"100px", left:"480px", width:"200px",height:"40px",borderRadius:"5px 5px 5px 5px", backgroundColor:"hwb(60 8% 0%)",border:"none"}}>{posterUrl}</button>
     <div style={{position:"relative",bottom:"261px", left:"993px", fontFamily:"cursive",fontSize:"24px", backgroundColor:"rgba(07, 07, 0)",width:"35px",color:"white",height:"33px"}}>{rating}</div>
      

    </div>


    )
}
