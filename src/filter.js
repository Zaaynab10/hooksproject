
import { useState } from "react";
import MovieList from "./movieList";
  
export default function FilterMyData(){
    const [searchItem,setSearchItem]=useState("")
    const tableau=MovieList()
    console.log(searchItem)
    
    return (
        <>
            <div className="searchBar">
                <input style={{width:"520px" ,position:"relative",left:"520px",top:"40px", border:"2px solid red",height:"25px",backgroundColor:"black",color:"white"}} placeholder="Tapez votre film ... et defilez afin de voir les propositions qui s'offrent à vous " onChange={event=>{setSearchItem(event.target.value)}} />
               {
                tableau.filter((val)=>{
                    if(searchItem==""){
                          return val
                    }else if(val.myTitle.toLowerCase().includes(searchItem.toLowerCase())){
                            return val
                    }
                })
                .map((val,key)=>{
                return (
                    <>
                    
                <div className="user" key={key}  > {val.myComponent}</div>
                </>
                )
               }
              
               
               )
            }
               
                
            </div>
        </>
      )
}




