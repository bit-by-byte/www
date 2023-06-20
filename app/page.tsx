"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Typed from "typed.js";

import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import logo from "@/public/bbblogo.svg";

import Section from "@/components/section";
import Card from "@/components/card";
import Button from "@/components/button";
import SocialIcon from "@/components/socialicon";

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
    <main className="flex flex-col">
      <section className="bg-gray-100">
        <div className="h-screen flex flex-col container mx-auto">
          <nav className="flex p-5 justify-between">
            <Image src={logo} alt="logo" height={50} />
            <div className="flex items-center gap-5">
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Button href="/#initiatives">Join Us</Button>
            </div>
          </nav>
          <div className="flex flex-col items-center justify-center flex-1 gap-3">
            <div className="typed-phrases hidden">
              <p>
                Welcome to <br className="lg:hidden" />
                Coding!
              </p>
              <p>
                Welcome to <br className="lg:hidden" />
                <span className="orange">Bit by Byte!</span>
              </p>
            </div>
            <h1 className="text-[10vw] lg:text-[6vw] text-center font-bold">
              <div className="typed inline"></div>
            </h1>
            <p className="text-center text-gray-500">
              Get ready for the start of your programming adventure!
            </p>
            <div className="flex flex-row gap-2 font-bold">
              <Button href="/#initiatives">Join Us</Button>
              <Button href="https://bank.hackclub.com/donations/start/bit-by-byte">
                Donate
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-5 pb-10">
            <SocialIcon
              href="https://www.instagram.com/bit.by.byte/"
              icon={FaInstagram}
            />
            <SocialIcon
              href="https://twitter.com/bitbybyteinc"
              icon={FaTwitter}
            />
            <SocialIcon href="mailto:ayush@bitbybyte.org" icon={FaEnvelope} />
          </div>
        </div>
      </section>
      <Section title="Initiatives" id="initiatives">
        <p className="text-gray-500 text-xl">
          Check out what we&apos;re working on!
        </p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <Card title="queen_city_hacks">
            <div className="p-5 text-gray-500">
              <p>
                Queen City Hacks is a 12-hour, in-person, high-school hackathon
                that celebrates the creativity and innovation of Charlotte’s
                high school students.
              </p>
              <br />
              We plan to host the <strong>
                biggest high school hackathon
              </strong>{" "}
              in the Greater Charlotte Area.
            </div>
            <div className="flex justify-between p-5">
              <Button href="https://www.queencityhacks.com/">Learn More</Button>
              <div className="flex gap-5">
                <SocialIcon
                  href="https://www.queencityhacks.com/"
                  icon={FaGlobe}
                />
                <SocialIcon
                  href="https://www.github.com/queen-city-hacks"
                  icon={FaGithub}
                />
              </div>
            </div>
          </Card>
          <Card title="QCH year two">
            <div className="p-5 text-gray-500">
              <p>Queen City Hacks will be returning! More info coming soon.</p>
            </div>
          </Card>
          <Card title="Coming soon">
            <div className="p-5 text-gray-500">...</div>
          </Card>
        </div>
      </Section>
      <Section title="Upcoming Classes" id="classes">
        <p className="text-gray-500 text-xl">See what we have in store!</p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <Card title="Make a Game with Scratch">
            <div className="p-5 text-gray-500">
              <p>
                Learn the basics of Scratch, a block-based programming language
                developed by MIT. You&apos;ll learn how to make a game from
                scratch (pun intended)!
              </p>
              <br />
              <p>
                This class is for beginners. No prior experience is required.
                This course is <strong>highly recommended</strong> to take first
                if you are new to programming.
              </p>
            </div>
            <div className="text-center p-5">Curriculum in development</div>
          </Card>
          <Card title="Python for Beginners">
            <div className="p-5 text-gray-500">
              <p>
                Learn the basics of Python, a popular programming language used
                by companies like Google and Facebook.
              </p>
              <br />
              <p>
                If you do not have prior experience with programming, we
                recommend taking Make a Game with Scratch first.
              </p>
            </div>
            <div className="text-center p-5">Curriculum in development</div>
          </Card>
          <Card title="Coming soon">
            <div className="p-5 text-gray-500">...</div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
