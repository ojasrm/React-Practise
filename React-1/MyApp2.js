import React from "react"
import ContactCard from "./ContactCard"

function MyApp2(){
    return(
        <div className="contacts">
            <ContactCard
                contact = {{name:"Mr. North",
                            imgUrl:"https://source.unsplash.com/300x300/?cat",
                            phone:"6736786444",
                            email:"dnjwbdnfw@dedf.com"}}
                 
            />
            <ContactCard 
                contact={{name:"Mr. East",
                        imgUrl:"https://source.unsplash.com/300x300/?dog",
                        phone:"6736786444",
                        email:"dnjwbdnfw@dedf.com" }}
                
            />
            <ContactCard 
                contact={{name:"Mr. South",
                        imgUrl:"https://source.unsplash.com/300x300/?rabbit",
                        phone:"6736786444",
                        email:"dnjwbdnfw@dedf.com"}}
                
            />
            <ContactCard 
                contact={{name:"Mr. West",
                        imgUrl:"https://source.unsplash.com/300x300/?bird",
                        phone:"6736786444",
                        email:"dnjwbdnfw@dedf.com" }}
                
            />
        </div>
        
    )
}

export default MyApp2