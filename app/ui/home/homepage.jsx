"use client"
import { useState, useEffect, useRef } from 'react';
import styles from "./hompage.module.css"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const SinglePagePortfolio = () => {
    const [activeSlides, setActiveSlides] = useState([0, 1, 2]);
    const [isMobile, setIsMobile] = useState(false);
    const form = useRef();

    const portfolioImages = [
        "https://ik.imagekit.io/tanushree/T/banner1/WhatsApp%20Image%202024-12-12%20at%2011.11.36%20PM.jpeg?updatedAt=1734184184190",
        "https://ik.imagekit.io/tanushree/T/banner1/WhatsApp%20Image%202024-12-12%20at%2011.11.35%20PM.jpeg?updatedAt=1734184184086",
        "https://ik.imagekit.io/tanushree/T/banner1/WhatsApp%20Image%202024-12-12%20at%2011.11.34%20PM.jpeg?updatedAt=1734184183938",
        "https://ik.imagekit.io/tanushree/T/banner2/WhatsApp%20Image%202024-12-12%20at%2011.11.36%20PM%20(2).jpeg?updatedAt=1734184182118",
        "https://ik.imagekit.io/tanushree/T/banner2/WhatsApp%20Image%202024-12-12%20at%2011.11.37%20PM%20(1).jpeg?updatedAt=1734184181403",
        "https://ik.imagekit.io/tanushree/T/banner2/WhatsApp%20Image%202024-12-12%20at%2011.11.36%20PM%20(1).jpeg?updatedAt=1734184181042",
        "https://ik.imagekit.io/tanushree/T/WhatsApp%20Image%202024-12-12%20at%2011.11.01%20PM.jpeg?updatedAt=1734184178926",
        "https://ik.imagekit.io/tanushree/T/WhatsApp%20Image%202024-12-12%20at%2011.10.59%20PM.jpeg?updatedAt=1734184178933",
        "https://ik.imagekit.io/tanushree/T/WhatsApp%20Image%202024-12-12%20at%2011.11.01%20PM%20(1).jpeg?updatedAt=1734184178808",
    ];

    const services = [
        { name: "Bridal Makeup", description: "Stunning looks for your special day" },
        { name: "Party Makeup", description: "Glamorous styles for every occasion" },
        { name: "Photoshoot Makeup", description: "Professional makeup for perfect shots" },
        { name: "Consultation", description: "Personalized makeup advice" }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveSlides(prevSlides => {
                if (isMobile) {
                    return [(prevSlides[0] + 1) % portfolioImages.length];
                } else {
                    return prevSlides.map(slide =>
                        (slide + 1) % portfolioImages.length
                    );
                }
            });
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [isMobile, portfolioImages.length]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let serviceId = process.env.NEXT_PUBLIC_API_SERVICE_ID;
        let templateId = process.env.NEXT_PUBLIC_API_TEMPLATE_ID;
        let secretKey= process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
        
        emailjs
            .sendForm(serviceId,templateId , form.current, {
                publicKey: secretKey,
            })
            .then(
                () => {
                    toast.success("Successfully submitted", {position:'top-right',style:{ fontSize:'14px',color:'green',fontWeight:'600'}})    
                    form.current.reset();
                },
                (error) => {
                    toast.error("Submitted Failed Please try again tommorrow", {position:'bottom-right',style:{ fontSize:'14px',color:'red',fontWeight:'600'}})    
                },
            );
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <nav className={styles.nav}>
                    <h1>Tanushree Makeovers</h1>
                    <ul>
                        <li><Link className={styles.anchorTag} href="#banner">Home</Link></li>
                        <li><Link className={styles.anchorTag} href="#aboutme">About</Link></li>
                        <li><Link className={styles.anchorTag} href="#portfolio">Portfolio</Link></li>
                        <li><Link className={styles.anchorTag} href="#services">Services</Link></li>
                        <li><Link className={styles.anchorTag} href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Banner Section */}
            <section id="banner" className={styles.bannerSection}>
                <div className={styles.bannerContainer}>
                    <div className={styles.bannerImage}>
                        <img
                            src="https://ik.imagekit.io/tanushree/banner3.jpg?tr=w-fill"
                            alt="Tanushree Makeovers Banner"
                        />
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="aboutme" className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutChild}>
                        <img
                            src="https://ik.imagekit.io/tanushree/WhatsApp_Image_2024-12-12_at_11.12.29_PM-removebg.png?updatedAt=1734182071265"
                            alt="Tanushree"
                        />
                    </div>
                    <div className={styles.aboutChild}>
                        <h2>About Me</h2>
                        <p>Hi, I'm Tanushree, a passionate makeup artist with good experience in creating stunning looks for every occasion. My mission is to enhance your natural beauty and boost your confidence.</p>
                    </div>
                </div>
            </section>

            {/* Portfolio Slider Section */}
            <section id="portfolio" className={styles.portfolioSection}>
                <h2>My Portfolio</h2>
                <div className={`${styles.sliderContainer} ${styles.autoSlider}`}>
                    {(isMobile
                        ? [activeSlides[0]]
                        : activeSlides).map((slideIndex, index) => (
                            <img
                                key={index}
                                src={portfolioImages[slideIndex]}
                                alt={`Portfolio ${slideIndex + 1}`}
                                className={styles.sliderImage}
                            />
                        ))}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={styles.servicesSection}>
                <h2>My Services</h2>
                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className={styles.contactSection}>
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"

                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://www.instagram.com/tanushree_makeovers_20/" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                    <a href="https://facebook.com/tanushreemakeovers" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                </div>
                <div className={styles.contactInfo}>
                    <p><Mail /> tanushreemadav@email.com</p>
                    <p><Phone /> +919326272150</p>
                </div>
                <p className={styles.copyrightText}>
                    © 2024 Tanushree Makeovers. All Rights Reserved.
                </p>
            </footer>
        </div>
    )
}

export default SinglePagePortfolio