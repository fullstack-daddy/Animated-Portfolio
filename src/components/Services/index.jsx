import React, { useEffect, useRef } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  //Register plugin
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".service__head",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );

    gsap.fromTo(
      ".service",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "-100% bottom",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={container} id="services">
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <h3 className="text__muted description">
            I take your ideas and turn them into amazing software projects that
            excite you and engage your customers, whether it's a website, app,
            or something else entirely.
          </h3>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className="icon" />
              </div>
              <h3 className="title">Mobile App Development</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I excel in developing mobile apps that are user-friendly and
                impactful, compatible with both iOS and Android platforms.
                Throughout the entire process, from conception to launch, I
                prioritize crafting apps that are intuitive, visually
                captivating, and operate flawlessly. Collaborate with me to
                transform your concepts into compelling mobile experiences,
                elevating your online presence and captivating your audience.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END UI/UX */}

          <article
            className="service"
            style={{ "--color-primary": "var(--color-success)" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">Web Development</h3>
            </div>

            <div className="service__middle">
              <p className="text__muted description">
              My expertise lies in developing dynamic and user-friendly websites that engage visitors and yield measurable outcomes. From the initial design stage to the final launch, my commitment is to create websites that are intuitive, visually appealing, and smoothly operational on all devices. Let's work together to realize your online goals, bolstering your digital footprint and effectively connecting with your audience.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END WEB DEVELOPMENT */}

          <article
            className="service"
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <TfiWrite className="icon" />
              </div>
              <h3 className="title">Desktop App Development</h3>
            </div>

            <div className="service__middle">
              <p className="text__muted description">
              My expertise also lies in creating user-friendly desktop applications that meet diverse needs, from productivity tools to multimedia software. Additionally, I excel in developing reliable system applications critical for seamless operation and top performance in computing setups. Let's collaborate to turn your software concepts into reality, whether it means boosting user productivity with desktop apps or fine-tuning system functionality with tailored solutions.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* END CONTENT CREATION */}
        </div>
      </div>
    </section>
  );
};

export default Services;
