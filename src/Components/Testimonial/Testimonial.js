import "./Testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testImg from "../../assets/Images/profileIcon.svg";

const Testimonial = () => {
  const data = [
    {
      name: "Esther Nduka",
      position: "Data analyst and SQL pro.",
      description: "",
      image: testImg,
    },
    {
      name: "Ayinla Omokeji",
      position: "Full stack developer",
      description: "",
      image: testImg,
    },
    {
      name: "Habeeb",
      position: "Back-end engineer",
      description: "",
      image: testImg,
    },
    {
      name: "Noel Emmanuel",
      position: "Front-end developer and UI/UX",
      description: "",
      image: testImg,
    },
    {
      name: "Ayomide Giwa",
      position: "Computer software solutions",
      description: "",
      image: testImg,
    },
    {
      name: "Samson",
      position: "Accountant",
      description: "",
      image: testImg,
    },
    {
      name: "Christy Ifeoma",
      position: "project manager and content creator",
      description: "",
      image: testImg,
    },
    {
      name: "Ezekiel Mcfadipe",
      position: "software solutions",
      description: "",
      image: testImg,
    },
    {
      name: "Kolawole Adeboyejo",
      position: "",
      description: "",
      image: testImg,
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="testimonial-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index, arr) => {
            return (
              <div key={index}>
                <div className="slider-content">
                  <img
                    src={item.image}
                    alt="Testimonial Pic"
                    className="centerImage "
                  ></img>
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
