"use client";
import Image from "next/image";
// import bulma
import "bulma/css/bulma.min.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/bbblogo.svg";

export default function Home() {
  useEffect(() => {
    let typed = new Typed(".typed", {
      stringsElement: ".typed-phrases",
      // showCursor: false,
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="">
      <section className="tw-h-screen tw-flex tw-flex-col">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a href="/" className="navbar-item">
                  {/* <img src="/images/logo2.2.svg" /> */}
                  <Image src={logo} height={200} alt="Bit by Byte Logo" />
                </a>

                <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navMenu"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className="navbar-menu" id="navMenu">
                <div className="navbar-end">
                  <a href="/" className="navbar-item">
                    Home
                  </a>
                  <div className="navbar-item">
                    <a href="#classes" className="button is-rounded is-danger">
                      Classes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="tw-flex-grow tw-flex tw-flex-col tw-justify-center">
          <div className="tw-container tw-text-center tw-mx-auto ">
            <div className="typed-phrases">
              <p>Welcome to Coding!</p>
              <p>
                Welcome to{" "}
                <span className="tw-bg-gradient-to-r tw-from-orange-400 tw-to-red-500 tw-text-transparent tw-bg-clip-text">
                  Bit by Byte!
                </span>
              </p>
            </div>
            <div className="tw-text-[6vw] tw-mb-6 tw-font-bold">
              <div className="typed is-inline"></div>
            </div>
            <h1 className="subtitle">
              Get ready for the start of your programming adventure!
            </h1>
          </div>
        </div>
        <Socials />
      </section>
      <main>
        <div className="section" id="initiatives">
          <div className="content is-medium">
            <h1>Initiatives</h1>
            <p>Check out what we're planning!</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">queen_city_hacks</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>
                      <a href="https://www.queencityhacks.com">
                        Queen City Hacks
                      </a>
                      is a 12-hour, in-person, high-school hackathon that
                      celebrates the creativity and innovation of Charlotte’s
                      high school students.
                    </p>
                    <p>
                      We plan to host the{" "}
                      <strong>biggest high school hackathon</strong> in the
                      Greater Charlotte Area.
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item has-text-grey">
                    Percent Completed
                    <progress className="progress" value="60" max="100">
                      60%
                    </progress>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Coming Soon</div>
                </div>
                <div className="card-content">
                  <div className="content">...</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Coming Soon</div>
                </div>
                <div className="card-content">
                  <div className="content">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="classes">
          <div className="content is-medium">
            <h1>Upcoming Classes</h1>
            <p>See what we have in store!</p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">
                    Make a Game with Scratch!
                  </div>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>
                      <a href="https://scratch.mit.edu/">Scratch</a> is a basic
                      block-based programming langange. In this class, we will
                      learn the basics of Scratch by programming our own game!
                    </p>
                    <p>
                      This course is <strong>highly recommended</strong> to take
                      first if you are new to programming.
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item has-text-grey">
                    Curriculum in Development
                    <progress className="progress" value="20" max="100">
                      20%
                    </progress>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Python Programming</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>
                      <a href="https://www.python.org/">Python</a> is a popular
                      programming language used in many applications. In this
                      class, we will learn the basics of Python by programming
                      our own game!
                    </p>
                    <p>
                      If you do not have prior experience with programming, we
                      recommend taking Make a Game with Scratch first.
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-footer-item has-text-grey">
                    Curriculum in Development
                    <progress className="progress" value="65" max="100">
                      65%
                    </progress>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Coming Soon</div>
                </div>
                <div className="card-content">
                  <div className="content">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bit by Byte</strong> is a NC Nonprofit Organization.
            <br />
            Copyright © 2021 Bit by Byte under the
            <a href="https://raw.githubusercontent.com/bit-by-byte/bit-by-byte.github.io/master/LICENSE">
              MIT License.
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              {/* <img src="/images/logo2.2.svg" /> */}
              <Image src={logo} height={200} alt="Bit by Byte Logo" />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <a href="/" className="navbar-item">
                Home
              </a>
              <div className="navbar-item">
                <a href="#classes" className="button is-rounded is-danger">
                  Classes
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex-grow">
      <div className="container has-text-centered">
        <div className="typed-phrases">
          <p>Welcome to Coding!</p>
          <p>
            Welcome to <span className="orange">Bit by Byte!</span>
          </p>
        </div>
        <div className="title mb-6">
          <div className="typed is-inline"></div>
        </div>
        <h1 className="subtitle">
          Get ready for the start of your programming adventure!
        </h1>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="hero-foot">
      <div className="social-bar columns has-text-centered mb-6">
        <div className="column"></div>
        <div className="column narrow orange !tw-flex tw-flex-row tw-justify-center tw-text-xl">
          <Link href="https://www.instagram.com/bit.by.byte/">
            {/* <i className="fab fa-instagram" aria-hidden="true"></i> */}
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com/bitbybyteinc">
            {/* <i className="fab fa-twitter" aria-hidden="true"></i> */}
            <FaTwitter />
          </Link>
          <Link href="mailto:ayush@bitbybyte.org">
            {/* <i className="far fa-envelope" aria-hidden="true"></i> */}
            <FaEnvelope />
          </Link>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
