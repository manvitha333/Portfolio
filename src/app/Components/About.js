"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { useState, useEffect} from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");
  console.log("activeSection", activeSection);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 }; // Adjust threshold as needed

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("Intersecting section:", entry.target.id, "isIntersecting:", entry.isIntersecting);

        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.toUpperCase());
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="">
      {/* Main section with responsive styling */}
      <div className="min-h-screen bg-[#101D3C] text-white flex justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-[80px]">
        <div className="flex flex-col md:flex-row max-w-6xl w-full gap-[20px] lg:gap-10">
          {/* Left Section - becomes full width on mobile, half on medium screens and up */}
          <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 bg-[#101D3C] p-4 sm:p-6 overflow-hidden">
  {/* Top Section - Name & Role with responsive text sizing */}
  <div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 md:mt-6 font-[Poppins]">
      Manvitha Reddy
    </h1>
    <h2 className="text-lg sm:text-xl md:text-2xl text-[white] mt-1 sm:mt-3 md:mt-4 font-[Poppins]">
      Full Stack Developer
    </h2>
    <p className="text-gray-400 hover:text-white mt-2 sm:mt-3 md:mt-4 text-sm md:text-[20px] sm:text-base md:w-3/4 font-[Poppins]">
      I strive to build accessible, pixel-perfect digital experiences for the web while continuously learning and growing as a developer.
    </p>
  </div>

  {/* Navigation Section - adjusted for smaller screens */}
  <nav className="hidden flex-col sm:flex mt-3 sm:mt-4 md:mt-6 space-y-2 font-[Poppins]">
    {["ABOUT", "EXPERIENCE", "PROJECTS"].map((item) => (
      <Link key={item} href={`#${item.toLowerCase()}`}>
        <p
          className={`cursor-pointer p-2 rounded-md transition-all duration-300 ${
            activeSection === item
              ? "text-white underline decoration-[white] underline-offset-4 font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {item}
        </p>
      </Link>
    ))}
  </nav>

  {/* Social Media Icons - Reduced margin to decrease gap */}
  <div className="flex space-x-4 sm:space-x-6 text-gray-400 mt-2 sm:mt-3 md:mt-4">
    <Link href="https://github.com/manvitha333" target="_blank">
      <FaGithub className="text-xl sm:text-2xl hover:text-white cursor-pointer" />
    </Link>
    <Link href="https://www.linkedin.com/in/manvithareddyarimanda/" target="_blank">
      <FaLinkedin className="text-xl sm:text-2xl hover:text-white cursor-pointer" />
    </Link>
    <Link href="https://www.instagram.com/manvitha_reddy__/" target="_blank">
      <FaInstagram className="text-xl sm:text-2xl hover:text-white cursor-pointer" />
    </Link>
  </div>
</div>


          {/* Right Section - becomes full width on mobile, half on medium screens and up */}
          <div className="w-full md:w-1/2 sm:p-4 md:p-6 flex flex-col justify-center text-sm sm:text-base md:text-lg">
            <div className="">
            <h1 className="block sm:hidden text-xl font-bold mb-[10px] font-[Poppins]">About</h1>

              {/* about section */}
              <section id="about" className="mt-6 md:mt-0">
                <p className="text-gray-300 font-[Poppins]">
                  I&#39;m a passionate beginner in web development, eager to
                  learn and build engaging digital experiences. I enjoy creating
                  user-friendly and visually appealing websites while
                  continuously improving my problem-solving and technical
                  skills.
                </p>
                <p className="mt-3 sm:mt-4 text-gray-300 font-[Poppins]">
                  I&#39;ve worked on multiple projects that focus on enhancing
                  user experience and functionality. Beyond coding, I love
                  exploring new technologies and working on innovative ideas,
                  such as AI-powered tools and platforms that promote social
                  impact.
                </p>
                <p className="mt-3 sm:mt-4 text-gray-300 font-[Poppins]">
                  I also have a few product ideas that I&#39;m looking to invest
                  in with a proper partner, aiming to build impactful solutions
                  that solve real-world problems. With a strong passion for
                  business, I aspire to turn my ideas into successful ventures.
                </p>
                <p className="mt-3 sm:mt-4 text-gray-300 font-[Poppins]">
                  In my free time, I enjoy experimenting with web design,
                  learning new development techniques, and bringing creative
                  ideas to life. Additionally, I&#39;m interested in
                  freelancing—if anyone is looking for a dedicated developer,
                  feel free to reach out!
                </p>
              </section>
              
              {/* Experience Section - responsive spacing */}
              <section
                id="experience"
                className="mt-12 sm:mt-16 md:mt-[100px] space-y-4 sm:space-y-6"
              >
                <div className="">
                <h1 className="block sm:hidden text-xl font-bold mb-[10px] font-[Poppins]">Experience</h1>

                  <p className="text-sm sm:text-base text-gray-400 ">
                    June 2024 - Jan 2025
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold mt-1">
                    <Link
                      href="https://drive.google.com/file/d/1GVnCc2MAw0INd1GzdIvWAKDOT9moo4Cy/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      Full Stack Developer Intern | MERN Stack{" "}
                      <span className="inline-block">↗</span>
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 hover:text-white mt-1 sm:mt-2 font-[Poppins]">
                    Worked as a Full Stack Developer Intern at Hanvitec
                    Solutions, contributing to real-world projects alongside
                    senior developers. Gained practical experience in building
                    and managing web applications using the MERN stack.
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-400">
                    May - July 2023
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold mt-1">
                    <Link
                      href="https://drive.google.com/file/d/1m8avnDRpVxe6qu8IcG6apdXmv50ZSNrJ/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      Full Stack Java Intern | SkillDzire{" "}
                      <span className="inline-block">↗</span>
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 hover:text-white mt-1 sm:mt-2 font-[Poppins]">
                    Worked on real-world Java-based projects, collaborating with
                    senior developers to build and optimize web applications.
                    Gained hands-on experience in backend development and
                    application management.
                  </p>
                </div>

                {/* Resume Link */}
                <div className="mt-4 sm:mt-6">
                  <Link
                    href="https://drive.google.com/file/d/1a4Ny9YWwTnxhkAZKkyDLKWyf6I9W3hdw/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base cursor-pointer hover:text-blue-400"
                  >
                    View Resume <span className="ml-1">↗</span>
                  </Link>
                </div>
              </section>

              {/* Projects Section - responsive layout and spacing */}
              <section
                id="projects" 
                className="mt-12 sm:mt-16 md:mt-[100px] space-y-4 sm:space-y-6"
              
              >
                 <h1 className="block sm:hidden text-xl font-bold mb-[10px] font-[Poppins]">Projects</h1>
                {/* Project items with responsive flex layout and modern styling */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                 
                  <div className="w-full sm:w-auto sm:flex-shrink-0 flex justify-center">
                    <Image
                      src="/images/conscionestates.png"
                      width={150}
                      height={100}
                      alt="Conscion Estates"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray]"
                    />
                  </div>
                  <div>
                    <Link
                      href="https://www.conscionestates.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Conscion Estates <span className="inline-block">↗</span>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base mt-1 font-[Poppins]">
                      We help you find your perfect property with ease, offering
                      expert guidance and a seamless real estate experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="w-full sm:w-auto sm:flex-shrink-0 flex justify-center">
                    <Image
                      src="/images/portfolio.png"
                      width={150}
                      height={100}
                      alt="Portfolio"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray]"
                    />
                  </div>
                  <div>
                    <Link
                      href="https://www.conscionestates.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Portfolio <span className="inline-block">↗</span>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      My Portfolio
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="w-full sm:w-auto sm:flex-shrink-0 flex justify-center">
                    <Image
                      src="/images/5mags.png"
                      width={150}
                      height={100}
                      alt="5mags"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray]"
                    />
                  </div>
                  <div>
                    <Link
                      href="https://5mags.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      5Mags{" "}
                      <span className="inline-block">↗</span>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base mt-1 font-[Poppins]">
                      5Mags is an online platform specializing in mobile
                      accessories, offering a wide range of high-quality
                      products.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="w-full sm:w-auto sm:flex-shrink-0 flex justify-center">
                    <Image
                      src="/images/bingepro.png"
                      width={150}
                      height={100}
                      alt="Binge Pro"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray]"
                    />
                  </div>
                  <div>
                    <Link
                      href="https://www.bingepro.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Binge Pro <span className="inline-block">↗</span>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base mt-1 font-[Poppins]">
                      Binge Pro is the ultimate private theater and party venue,
                      where your special moments turn into unforgettable
                      celebrations.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="w-full sm:w-auto sm:flex-shrink-0 flex justify-center">
                    <Image
                      src="/images/civilden.png"
                      width={150}
                      height={100}
                      alt="Civilden"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray]"
                    />
                  </div>
                  <div>
                    <Link
                      href="https://www.civilden.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Civilden <span className="inline-block">↗</span>
                    </Link> 
                    <p className="text-gray-400 text-sm sm:text-base mt-1 font-[Poppins]">
                      Discover the innovative infrastructure solutions provided
                      by CIVILDEN.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] bg-[#1E1E2E] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="w-full sm:w-auto flex justify-center sm:flex-shrink-0">
                    <Image
                      src="/images/Carpooling.png"
                      width={150}
                      height={100}
                      alt="Carpooling"
                      className="w-full sm:w-[150px] h-auto object-cover rounded-lg border-3 border-[gray] "
                    />
                  </div>
                  <div>
                    <Link
                      href="http://127.0.0.1:8000/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Carpooling <span className="inline-block">↗</span>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      (Still in progress)
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
      </div>
{/* Contact section with responsive styling */}
<div className="">
        <div id="contact" className="text-center py-10 sm:py-16 px-4 sm:px-6  bg-[#101D3C] text-white">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-[50px] font-[Poppins]">Get In Touch</div>
          <div className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 max-w-lg mx-auto font-[Poppins]">
            I am actively seeking new opportunities. Please feel free to reach out!
          </div>
          <Link
            href="mailto:a.manvitha333@gmail.com"
            className="inline-block mt-4 sm:mt-6 border border-teal-400 text-teal-400 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-teal-400 hover:text-[#0A192F] transition text-sm sm:text-base"
          >
            Say Hello
          </Link>
          <div className="text-gray-500 text-xs sm:text-sm mt-10 sm:mt-16 font-[Poppins]">Designed & Built by Manvitha Reddy</div>
        </div>
      </div>

</div>
    
  
  );
};

export default About;