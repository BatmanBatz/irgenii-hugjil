import React from "react";
import "../container/home.css"
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image1.jpg"
import Image3 from "../assets/image1.jpg"
import Image4 from "../assets/image1.jpg"
import Image5 from "../assets/image1.jpg"
import Image6 from "../assets/image1.jpg"
import Image7 from "../assets/image1.jpg"
import Image8 from "../assets/image1.jpg"


const Home =()=>{
    const data=[
        {
            key: 1,
            img: Image1,
            description: "Иргэний боловсрол |||",
            Read: "Унших"
        },
        {
            key: 2,
            img: Image2,
            description: "Иргэний боловсрол ||",
            Read: "Унших"
        },
        {
            key: 3,
            img: Image3,
            description: "Дарам Дэрэм хоёр эрх мэдэлд суралцсан нь",
            Read: "Унших"
        },
        {
            key: 4,
            img: Image4,
            description: "Bears learn justice, teacher's manual",
            Read: "Унших"
        },
        {
            key: 5,
            img: Image5,
            description: "Justice",
            Read: "Унших"
        },
        {
            key: 6,
            img: Image6,
            description: "Privacy",
            Read: "Унших"
        },
        {
            key: 7,
            img: Image7,
            description: "Responsibility",
            Read: "Унших"
        },
        {
            key: 8,
            img: Image8,
            description: "Authority",
            Read: "Унших"
        },
    ];

    return(
        <div className="bigbox">
            <h2>Иргэний боловсрол ном</h2>
            <div className="Grid">
                {
                    data.map ((row) =>(
                        <div className="Roww">
                            <div className="columnn">
                                <img src={row.img} alt="//"/>
                                <p className="bookname">{row.description}</p>
                                <p className="unshih">{row.Read}</p>
                            </div>
                        </div>
                    ))
                } 

            </div>
            <h2>Илүүг унших</h2>
        </div>
    )
}
export default Home;