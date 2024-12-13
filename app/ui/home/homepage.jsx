"use client"
import style from "./hompage.module.css"
import Link from "next/link"

const SinglePagePortfolio = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.headerContainer}>
                <nav className={style.nav}>
                    <h1>Tanushree Makeovers</h1>
                    <ul>
                        <li><Link className={style.anchorTag} href="#banner" >Home</Link></li>
                        <li><Link className={style.anchorTag} href="#about">About</Link></li>
                        <li><Link className={style.anchorTag} href="#service">Services</Link></li>
                        <li><Link className={style.anchorTag} href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <section id="banner">
                <div className={style.bannerContainer}>
                  <div className={style.bannerImage}>
                   <img src="https://ik.imagekit.io/tanushree/banner3.jpg?tr=w-fill" />
                  </div>  
                </div>
            </section>
        </div>
    )
}

export default SinglePagePortfolio