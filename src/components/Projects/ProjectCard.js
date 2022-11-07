import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: "/projects/mancini.png",
      name: "e-Commerce App.",
      tech: "Adobe Magento",
    },
    {
      img: "/projects/genesis.png",
      name: "Healthcare App",
      tech: "React",
    },
    {
      img: "/projects/quizApp.png",
      name: "Quiz App",
      tech: "React",
    },
    {
      img: "/projects/weatherApp.PNG",
      name: "Weather App",
      tech: "React",
    },
    {
      img: "/projects/memoryMagic.PNG",
      name: "Memory Game",
      tech: "React",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={process.env.PUBLIC_URL + card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.tech}>{card.tech}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
