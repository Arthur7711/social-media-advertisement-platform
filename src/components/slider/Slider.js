import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        pauseOnHover={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        responsive={responsive}
        arrows={false}
      >
        {data.map((el, i) => (
          <div
            key={i}
            style={{
              color: el.color,
              fontFamily: "Poppins",
              userSelect: "none",
              width: 400,
              backgroundColor: "#fff",
              boxShadow: "0px 6px 25px rgba(101, 101, 101, 0.1)",
              borderRadius: "26px",
              padding: "150px 0 20px 0",
              margin: "0 20px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "#04118A",
                fontSize: 28,
                margin: 0,
              }}
            >
              {el.title}
            </h1>
            <h5
              style={{
                textAlign: "center",
                color: "#04118A",
                fontSize: 28,
                fontWeight: 600,
                margin: "20px 0",
              }}
            >
              {el.subTitle}
            </h5>
            <p
              style={{
                textAlign: "center",
                margin: "0 20px",
                color: "#475761",
              }}
            >
              {el.desc}
            </p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
