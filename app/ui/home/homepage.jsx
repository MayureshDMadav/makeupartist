"use client"
import { useState, useEffect } from 'react';
import styles from "./hompage.module.css"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const SinglePagePortfolio = () => {
    const [activeSlides, setActiveSlides] = useState([0, 1, 2]);
    const [isMobile, setIsMobile] = useState(false);

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

        // Check initial screen size
        checkMobile();

        // Add event listener to check screen size
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveSlides(prevSlides => {
                if (isMobile) {
                    // For mobile, shift single slide
                    return [(prevSlides[0] + 1) % portfolioImages.length];
                } else {
                    // For desktop, shift three slides
                    return prevSlides.map(slide => 
                        (slide + 1) % portfolioImages.length
                    );
                }
            });
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, [isMobile, portfolioImages.length]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic (you might want to replace this with actual form submission)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
    };

    return (
        <div className={styles.mainContainer}>
            {/* Navigation */}
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
                        <p>Hi, I'm Tanushree, a passionate makeup artist with 1 year of experience in creating stunning looks for every occasion. My mission is to enhance your natural beauty and boost your confidence.</p>
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
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com/tanushreemakeovers" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                    <a href="https://facebook.com/tanushreemakeovers" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                </div>
                <div className={styles.contactInfo}>
                    <p><Mail /> tanushreemakeovers@email.com</p>
                    <p><Phone /> +91 12345 67890</p>
                </div>
                <p className={styles.copyrightText}>
                    © 2024 Tanushree Makeovers. All Rights Reserved.
                </p>
            </footer>
        </div>
    )
}

export default SinglePagePortfolio