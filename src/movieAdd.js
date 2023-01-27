import {useState} from "react"
export default function MovieAddCard(){

    const myStyle={
        position:'relative',
        backgroundColor:'#211f1f8d',
        color:'white',
        width:"1090px",
        left:"89px",
        bottom:"310px",
        height:"406px",
        textAlign:"center",
        zIndex:"0.5"
        }
        
        const myStyleImage={
            width:"200px",
            zIndex:"1",
            position:'relative',
            bottom:"153px",
            left:"20px",
           
            }

    const  [ourImage,setOurImage]=useState("https://cdn.pixabay.com/photo/2014/09/20/23/44/website-454460__340.jpg")
    const [ourTitle,setOurTitle]=useState("TITLE")
    const [ourDescription,SetOurDescription]=useState("DESCRIPTION")
    const [ourPosterUrl,setOurPosterUrl]=useState("LINK SDFGHJKJHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    const [ourRating,setOurRating]=useState("0.0 ")
  
 function titleInputChangeHandler(event){
    console.log(ourTitle)
      return setOurTitle(event.target.value)
     
    }
    function descriptionInputChangeHandler(event){
        console.log(ourDescription)
        return SetOurDescription(event.target.value)
      
      }
      function urlInputChangeHandler(event){
        console.log(ourPosterUrl)
       return  setOurPosterUrl(event.target.value)
        
      }
      function ratingInputChangeHandler(event){
        console.log(ourRating)
       return setOurRating(event.target.value)
       
      }
      function imageInputChangeHandler(event){
        console.log(ourImage)
       return setOurImage(event.target.value)
       
      }
    
    function formSubmissionHandler(event){
    
    event.preventDefault();
    console.log(ourTitle)
    return(
      
   {titleInputChangeHandler}
    )

    }
   
    return (
      <div className="App">
        <form style={{position:"relative",top:"3200px",left:"123px" ,height:"123px",width:"123px"}} onSubmit={formSubmissionHandler}> 
        <input style={{width:"340px", backgroundColor:"black",color:"whitesmoke",border:" 2px solid white"}} type="text" placeholder="Inserez le titre du film" onChange={titleInputChangeHandler}/>
        <input  style={{width:"340px", backgroundColor:"black",color:"whitesmoke",border:"2px solid white "}} type="text" id="description" placeholder="Inserez la description du film" onChange={descriptionInputChangeHandler}/>
        <input style={{width:"340px", backgroundColor:"black",color:"whitesmoke",border:"2px solid white"}} type="text" id="url"  placeholder="Inserez le lien du film " onChange={urlInputChangeHandler}/>
        <input style={{width:"340px", backgroundColor:"black",color:"whitesmoke",border:"2px solid white"}} type="text" id="rating" placeholder="Inserez la note du film "  onChange={ratingInputChangeHandler}/>
        <input style={{width:"340px", backgroundColor:"black",color:"whitesmoke",border:"2px solid white"}} type="text" id="image" placeholder="Inserez le lien de l'image film "  onChange={imageInputChangeHandler}/>
        <button style={{backgroundColor:"yellow",color:"black" ,fontFamily:"fantasy"}}> Ajoutez votre film</button>

        
<div style={{position:"relative",left:"524px" ,height:"120px",width:"120px"}}>
<div style={myStyleImage}><img style={{border:"2px solid white"}} src={ourImage} /> </div>
<div style={{backgroundColor:"black", position:"absolute",top:"223px" ,left:"20px",width:"123px",color:"white",border:" 2px solid white"}}> Title: {ourTitle} </div>
<div style={{backgroundColor:"black", position:"absolute",width:"456px",height:"63px",top:"273px" ,left:"20px",color:"white",border:" 2px solid white"}}>Description: {ourDescription}</div>
<div style={{backgroundColor:"black", position:"absolute",bottom:"-245px" ,left:"20px", border:" 2px solid yellow"}}>  <a style={{color:"white",textDecoration:"none"}} href={ourPosterUrl}> Click the Link </a></div>
<div style={{backgroundColor:"black", position:"absolute",bottom:"-305px" ,left:"20px",color:"white",border:" 2px solid white"}}> rating: {ourRating}</div>
      
</div>

        </form>
       
      </div>
    );
}