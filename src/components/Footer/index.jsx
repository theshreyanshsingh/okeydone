import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 m-only footer-logo">
                        <Image width={200} height={200} quality={100} src={logo.src} alt="okaydone-logo" />
                    </div>
                    <div className="col-5 col-sm-12">
                        <h2 className="footer-title-small">
                            STAY UP TO DATE
                        </h2>
                        <h3 className='footer-title'>
                            get our<br />newsletter
                        </h3>
                        <div className="footer-newsletter">
                            <input type="email" className="footer-newsletter-input" placeholder='Enter your email' />
                            <button aria-label="subscribe to newsletter" className="footer-newsletter-button">
                                <i className='bx bx-right-arrow-alt'></i>
                            </button>
                        </div>
                    </div>
                    {/* <div className="col-2 d-only footer-logo">
                        <img src="/logo.svg" alt="okaydone-logo" />
                    </div> */}
                    <div className="col-7 col-sm-12 footer-title-contact">
                        <h2 className="footer-title-small">
                            GET IN TOUCH
                        </h2>
                        <a aria-label="contact@okaydone.in" href="mailto:contact@okaydone.in">contact@okaydone.in</a>
                        <a aria-label="careers@okaydone.in" href="mailto:careers@okaydone.in">careers@okaydone.in</a>
                        <a aria-label="+91 98860 98992" href="tel:+91 98860 98992">+91 98860 98992</a>
                        {/* <p>#17, 13th Cross Road,<br />7th Main Rd, Indiranagar,<br /> Bengaluru, Karnataka - 560038</p> */}
                    </div>
                </div>
                <div className="footer-divider" />
                <div className="row footer-bottom">
                    <div className="col-6 col-sm-12">
                        <ul className="footer-bottom-links left">
                            <li><span className='m-only'>© 2023 | Okay Done<br /></span> All Rights Reserved. All Wrongs Reversed.</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-12">
                        <ul className="footer-bottom-links">
                            <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
                            {/* <li><Link href={"/disclaimer"}>Disclaimer</Link></li> */}
                            <li><Link href={"/terms-conditions"}>Terms & Conditions</Link></li>
                            <li className='d-only'>© 2023 | Okay Done</li>
                        </ul>
                    </div>
                    {/* <div className="col-6 col-sm-12">
                        <div className="footer-bottom-rights">
                        <span>SEE WHAT WE&apos;RE UP TO</span>
                        <ul className="footer-socials">
                            <li><a className="footer-socials-box" href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a className="footer-socials-box" href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a className="footer-socials-box" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a className="footer-socials-box" href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer