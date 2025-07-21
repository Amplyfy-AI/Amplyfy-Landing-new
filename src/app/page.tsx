import Image from "next/image";

import {IoChevronDown} from "react-icons/io5";
import { FaCheckCircle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { LuRocket } from "react-icons/lu";
import { CgLockUnlock } from "react-icons/cg";
import { LuAtom } from "react-icons/lu";
import { GrPowerCycle } from "react-icons/gr";
import { PiMapPinSimpleAreaDuotone } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { PiSparkle } from "react-icons/pi";


function Header() {
  return (
    <div className={'w-full grid py-2 grid-cols-1 md:grid-cols-3 border-b border-b-white/15 text-center'}>
      <div className={'flex justify-center items-center w-full'}>
        <Image
          src={'/Amplyfy.png'}
          alt={'Amplyfy'}
          width={70}
          height={70}
        />
      </div>
      <div className="flex flex-col items-center gap-6 w-full px-4 md:px-8">
        <div className="flex justify-center border border-white/15 rounded-full px-6 py-3 space-x-6">
          <div className="flex items-center text-sm font-medium text-white/60 space-x-1">
            <span>Page</span>
            <IoChevronDown />
          </div>
          <div className="flex items-center text-sm font-medium text-white/60">
            <span>Page</span>
          </div>
          <div className="flex items-center text-sm font-medium text-white/60 space-x-1">
            <span>Page</span>
            <IoChevronDown />
          </div>
          <div className="flex items-center text-sm font-medium text-white/60">
            <span>Page</span>
          </div>
          <div className="flex items-center text-sm font-medium text-white/60">
            <span>Page</span>
          </div>
        </div>
      </div>


      <div className={'flex justify-center items-center w-full'}>
        <div className={'p-2 border-white/15 rounded-xl border flex flex-row'}>
          <button className={'px-10 text-sm py-1 text-white font-medium rounded-lg bg-[#003B57] bg-gradient-to-b from-[#05445E] to-[#003B57] hover:shadow-none shadow-[inset_0_0_20px_#00bcd4] hover:opacity-50 transition duration-200 cursor-pointer'}>
            CTA
          </button>
        </div>
      </div>
    </div>
  );
};

function Homepage() {
  return(
    <section className="min-h-screen text-white py-16 lg:px-60 md:px-20 text-center bg-radial from-sky-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight px-40 md:px-20">Your AI-Powered <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-sky-700">
            Music Companion
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Amplyfy adapts to you, helping you grow, connect, and <br />
          automate your creative journey.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white border-gray-500 text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Explore Features
          </button>
        </div>
        <div className="flex flex-col items-center mt-20">
            <Image src={"/page1.png"} alt="Image" width="1000" height="150"/>
        </div>
        <h4 className="text-3xl sm:text-4xl mt-20 text-center">Meet the Most Personalized AI Ever <br/> Built for Music Creators</h4>
        <div className="flex flex-col items-center mt-8 gap-8">
            <Image src={"/Bento1.png"} alt="Image" width="1000" height="150"/>
            <br/><br/>
            <Image src={"/Bento2.png"} alt="Image" width="1000" height="150"/>
        </div>
      </div>
    </section>
  );
};

function EcosystemSection() {
  return(
    <section className=" bg-linear-to-r from-[#0a1a1c] to-black text-white py-16 px-4 md:px-20 text-center overflow-hidden">
      <div className="max-x-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-12">
          One Ecosystem, Built <br/> for Music Creators 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "AmpMap",
              description:
                "Discover studios, producers, and talent scouts. Get found, get connected, get serious.",
              Icon: <PiMapPinSimpleAreaDuotone />
            },
            {
              title: "AmpDrive",
              description:
                "Your personal creative vault. Store everything from stems to visuals - accessible from anywhere.",
              Icon: <GoGraph/>
            },
            {
              title: "AmpPoster",
              description:
                "Let the AI handle social media. Schedule, post, and write content with a simple command.",
              Icon: <PiSparkle/>
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">{item.Icon}</span>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function KeyPoints() {
  const items = [
    {
      icon: <BsLightning />,
      title: "10X more personal than any AI you've used",
      description:
        "Our proprietary learning algorithm adapts to your unique style, preferences, and goals faster than generic AI solutions.",
    },
    {
      icon: <GrPowerCycle />,
      title: "70% less time spent on planning, posting, or writing",
      description:
        "Reclaim your creative time by automating repetitive tasks while maintaining your authentic voice.",
    },
    {
      icon: <LuRocket />,
      title: "12X faster growth for consistent creators",
      description:
        "Musicians using Amplyf see dramatically accelerated audience growth and engagement across platforms.",
    },
    {
      icon: <CgLockUnlock />,
      title: "Access to networks via AmpMap",
      description:
        "Connect with industry professionals who are specifically looking for your style and sound.",
    },
    {
      icon: <LuAtom />,
      title: "Adaptive AI that evolves with you",
      description:
        "As your music and career develop, Amplyf grows with you, constantly optimizing its assistance.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 lg:px-60">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Built Different. Feels Personal. Works Fast.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex gap-4 ${
              i === items.length - 1
                ? 'md:col-span-2 justify-center text-center md:text-center'
                : 'text-left'
            }`}
          >
            <div className="text-3xl">{item.icon}</div>
            <div className="max-w-md">
              <h3 className="text-lg font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

function SmallText() {
  return(
    <section className="container mx-auto">
      <div className="bg-black text-center px-4 md:px-20">
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
        Simple Pricing. No Surprises.
        </h1>
        <h4 className="text-gray text-sm mb-1 lg:px-20">
          Choose the plan that fits your creative stage. 
        </h4>
        <h4 className="text-gray text-sm lg:px-20">
          Upgrade anytime.
        </h4>
      </div>
    </section>
  );
};

function Pricing() {
  return(
    <section className="flex flex-col items-center justify-center py-20 lg:px-64.5 md:px-10 text-center bg-radial from-sky-900 to-black overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full justify-center items-center">

        <div className="rounded-3xl border border-gray-600 p-8 text-white flex flex-col items-center w-full max-w-md bg-black">
          <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
          <p className="text-lg text-gray-300 mb-4">$9.99</p>
          <hr className="border-gray-600 w-full mb-4" />
          <ul className="text-left mb-6 space-y-2 w-full">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AI Assistant</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpMap</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpDrive</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="px-20 py-2 rounded-md font-medium w-full bg-gray-800 hover:bg-gray-700 text-white">
            Join
          </button>
        </div>

        <div className="rounded-2xl border border-gray-600 p-8 text-white flex flex-col items-center w-full max-w-md ">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-lg text-gray-300 mb-4">$19.99</p>
          <hr className="border-gray-600 w-full mb-4" />
          <ul className="text-left mb-6 space-y-2 w-full">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AI Assistant</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpMap</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpDrive</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpPoster</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>Early Access</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <button className="px-20 py-2 rounded-md font-medium w-full bg-gray-800 hover:bg-gray-700 text-white">
            Join
          </button>
        </div>

        <div className="rounded-2xl border border-gray-600 p-8 text-white flex flex-col items-center w-full max-w-md bg-black">
          <h2 className="text-2xl font-semibold mb-2">Business</h2>
          <p className="text-lg text-gray-300 mb-4">$34.99</p>
          <hr className="border-gray-600 w-full mb-4" />
          <ul className="text-left mb-6 space-y-2 w-full">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AI Assistant</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpMap</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpDrive</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>AmpPoster</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400"/>Early Access</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <button className="px-20 py-2 rounded-md font-medium w-full bg-gray-800 hover:bg-gray-700 text-white">
            Join
          </button>
        </div>

      </div>
    </section>
  );
};

function Email() {
  return(
    <section className=" bg-gradient-to-b from-sky-900 to-black flex items-center justify-center lg:px-107 md:px-20 text-center overflow-hidden">
      <div className="text-center max-w-2xl w-full mt-15">
        <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight mb-6">
          Level Up Your Music <br /> Career Today
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md w-full sm:w-64 text-gray outline-gray text-center" 
          />
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition w-full sm:w-auto"> 
            Join waitlist
          </button>
        </div>
        <p className="text-gray-400 text-sm">
          Amplyfy gives you the tools, the AI, and the access. You bring the music.
        </p>
      </div>
    </section>
  )
};

function Footer() {
  return(
    <>
      <div className="bg-black flex flex-col md:flex-row justify-center items-center px-4 md:px-20 py-12 gap-10 text-center overflow-hidden">
        <div className="flex flex-col">
          <div className={"text-white px-35 py-20 flex justify-end items-center"}>
            <div className={"max-w-7xl mx-auto grid grid-cols-5 gap-8"}>
              <div className={"flex flex-col justify between"}>
                <div className="flex flex-col items-center mt-[-100px]">
                  <Image src={'/Amplyfy.png'} alt={'Amplyfy'} width="70" height="70" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-10 px-35 mt-4">
            <FaXTwitter></FaXTwitter>
            <FaInstagram></FaInstagram>
            <FaYoutube></FaYoutube>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20 text-sm text-gray-400">
          <div>
            <h3 className={"text-sm font-semibold mb-3"}>Product</h3>
            <ul className={"space-y-4 text-gray-400 text-sm"}>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
      
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start px-24">
      
      <Header/>
      <Homepage/>
      <EcosystemSection/>
      <KeyPoints/>

      <SmallText/>
      <Pricing/>

      <Email/>
      <Footer/>
      
      

    </div>
  );
}


