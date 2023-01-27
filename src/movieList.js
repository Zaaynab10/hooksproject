import MovieCard from "./movieCard";
import myImage1 from "./myImage/myImage.jpg"
import myImage2 from "./myImage/myImage2.jpg"
import myImage3 from "./myImage/myImage3.jpg"
import myImage4 from "./myImage/myImage4.jpg"
import myImage5 from "./myImage/myImage5.jpg"
import myImage6 from "./myImage/myImage6.jpg"

export default function MovieList(){
    const styleMyImage={width:'390px',height:"460px", zIndex:"1" , boxShadow:"25px 0px 15px #556"}
    const styleMyLink={textDecoration:'none' ,color:"black", fontFamily:"fantasy",fontSize:"18px"}
//Information film1
  const photoFilm1=<img style={styleMyImage} src={myImage1} />
  const linkFilm1 =<a style={styleMyLink} href="https://t.me/bad_the_guy/775"> WATCH</a>
  const descriptionFilm1="When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen."
  //Information film2
  const photoFilm2=<img style={styleMyImage} src={myImage2} />
  const linkFilm2 =<a style={styleMyLink} href="https://t.me/bad_the_guy/776"> WATCH</a>
  const descriptionFilm2="Adam and his bride, Sarah are about to embark on the romantic honeymoon of a lifetime in Venice. But when the trip is gatecrashed by Adam's best friend, Ed, it inadvertently turns their perfect lovers' holiday into a complete disaster."
  //Information film3
  const photoFilm3=<img style={styleMyImage} src={myImage3}/>
  const linkFilm3 =<a style={styleMyLink} href="https://t.me/bad_the_guy/777"> WATCH</a>
  const descriptionFilm3="Set in the not-so-distant future, Dr. Jennifer Ashgrove - one of the world's top scientists - is battling to find a cure to a crisis that affects the world's water supply. As the weight of the world takes its toll, she retreats to the countryside with her husband in a bid to clear her mind."
  //Information film4
  const photoFilm4=<img style={styleMyImage}  src={myImage4}/>
  const linkFilm4 =<a style={styleMyLink} href="https://t.me/bad_the_guy/778"> WATCH</a>
  const descriptionFilm4="When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas)."
  //Information film5
  const photoFilm5=<img style={styleMyImage} src={myImage5}/>
  const linkFilm5 =<a style={styleMyLink} href="https://t.me/bad_the_guy/779"> WATCH</a>
  const descriptionFilm5="A cure for some and a curse for others, widely prescribed anti-anxiety medication is examined by patients and experts in this revealing documentary. "
  //Information film6
  const photoFilm6=<img style={styleMyImage} src={myImage6} />
  const linkFilm6 =<a style={styleMyLink} href="https://t.me/bad_the_guy/780"> WATCH</a>
  const descriptionFilm6="A ghost reaches out to two bumbling ghostbusters for a business idea. However, their plans go downhill as the eerie ghost reveals her plan."

  const myMovies= [{
    myTitle:"High Heat",
    myComponent:<div style={{ width:"123px",position:"absolute", top:"7vw" }}><MovieCard image={photoFilm1} title="High Heat" description={descriptionFilm1} posterUrl={linkFilm1} rating="7.5"/></div>
  },{
    myTitle:"Hooneymoon",
    myComponent:<div style={{ width:"123px",position:"absolute", top:"595px"}}><MovieCard  image={photoFilm2} title="The Honeymoon" description={descriptionFilm2} posterUrl={linkFilm2} rating="7.5"/></div>
  },{
    myTitle:"Ashgrove",
    myComponent:<div style={{width:"123px",position:"absolute",top:"70vw" }}><MovieCard image={photoFilm3} title="Ashgrove" description={descriptionFilm3} posterUrl={linkFilm3} rating="7.5"/></div>
  },{
    myTitle:"Violent Night",
    myComponent:<div style={{ width:"123px",position:"absolute",top:"101.5vw"  }}><MovieCard image={photoFilm4} title="Violent Night" description={descriptionFilm4} posterUrl={linkFilm4} rating="7.5"/></div>
  },{
    myTitle:"Take Your Pills: Xanax",
    myComponent:<div style={{ width:"123px",position:"absolute",top:"133vw"}}><MovieCard image={photoFilm5} title="Take Your Pills: Xanax" description={descriptionFilm5} posterUrl={linkFilm5} rating="7.5"/></div>
  },{
    myTitle:"Phone Boot",
    myComponent:<div style={{width:"123px",position:"absolute", top:"164.5vw"}}><MovieCard image={photoFilm6} title="Phone Boot" description={descriptionFilm6} posterUrl={linkFilm6} rating="7.5"/></div>,
  }
  
]




console.log(myMovies)

return myMovies

}