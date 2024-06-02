import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { profile1 } from '../../images'
import Facts from './Facts'
import "./Header.css"

const Header = () => {
    const container = useRef();
    gsap.registerPlugin(useGSAP)
    //const timeline = gsap.timeline();

    useGSAP(()=>{
       gsap.fromTo(".profile__photo__container",{
        scale:0.5,
        duration:1,
        opacity:0.5,
      },
      {
        scale:1,
        duration:1,
        ease:"sine.in",
        opacity:1,
      })
      gsap.from('.intro__text',{
        fontSize:100,
        duration:1,
        delay:1,
        ease:"sine.in",
      })
      const timeline = gsap.timeline();
      timeline
      .from(".header__info__top",{
        opacity:0,
      })
      .from(".header__title",{
        opacity:0,
        y:-30,
      })
      .from(".header__decription",{
        opacity:0,
      })
      .from(".btn",{
        x:-40,
        opacity:0,
        stagger:.5,
      })
    },{scope:container});
  return (
    <header id="header" className='blur-effect' ref={container}>
        <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
           <div className="header__info">
                <div className="header__info__top">
                   Hello There! I'm <span className="color__primary">Aboyeji Emmanuel Olusola</span>
                </div>
                <div className="header__info__middle">
                    <h1 className="primary__title header__title">I'M A SOFTWARE ENGINEER</h1>
                    <p className="header__decription text__muted">I tackle complex software engineering challenges to develop robust, user-centric solutions that positively impact millions of users worldwide.</p>
                </div>
                <Facts/>
                <div className="header__info__bottom">
                      <button className="btn">Download CV</button>
                      <a href="mailto:mradinuba@gmail.com" className="btn">Email Me</a>
                </div>
           </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
               <img src={profile1} alt="" className='profile__photo'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
