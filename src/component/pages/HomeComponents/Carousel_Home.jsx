import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/pages/Home/carousel.css";
import "../../styles/pages/Home/Carousel_Home.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6.2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4.2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1.5
    }
};

  

export default function CarouselHome(props) {
    const [isDesktop, setIsDesktop] = useState(false);
    function MediaQuery() {
        useEffect(() => {
          const media = window.matchMedia("(min-width: 1040px)");
          const listener = () => setIsDesktop(media.matches);
          listener();
          window.addEventListener("resize", listener);
    
          return () => window.removeEventListener("resize", listener);
        }, [isDesktop]);
    
        return <div className="App">{isDesktop ? null : null}</div>;
      }
    return (
        <div style={{ margin: isDesktop?  "60px": "15px", marginTop: "20px" }}>
        <MediaQuery />
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px"
            }}>
                <p style={{ fontSize: "25px" }}>{props.title}</p>
                <button type="button" class="btn btn-danger" style={{ height: "40px" }}>View All</button>
            </div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {props.datas.map((datas) => <div style={{ width: "auto", textAlign: "center" }}>
                    <div style={{
                        display: "flex",
                        height: "220px",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden"
                    }}>
                        <img src={datas.image} alt="Product Images" style={{}} />
                    </div>
                    <p>{datas.title}</p>
                    <p style={{ fontWeight: "700" }}>{datas.price}</p>
                    <p>{datas.discription}</p>
                </div>)}

            </Carousel>
        </div >
    );
}
