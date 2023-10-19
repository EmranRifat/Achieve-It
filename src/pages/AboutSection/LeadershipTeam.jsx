import image1 from "../../assets/AboutSection/women.png";
import md from "../../assets/images/MD.png";
import image35 from "../../assets/OfficeTeam/1.png";
import image9 from "../../assets/OfficeTeam/2.png";
import image10 from "../../assets/OfficeTeam/3.png";
import image11 from "../../assets/OfficeTeam/4.png";
import image12 from "../../assets/OfficeTeam/5.png";
import image13 from "../../assets/OfficeTeam/6.png";
import image14 from "../../assets/OfficeTeam/7.png";
import image15 from "../../assets/OfficeTeam/8.png";
import image16 from "../../assets/OfficeTeam/9.png";
import image917 from "../../assets/OfficeTeam/10.png";
import image18 from "../../assets/OfficeTeam/11.png";
import image19 from "../../assets/OfficeTeam/12.png";
import image20 from "../../assets/OfficeTeam/13.png";
import image21 from "../../assets/OfficeTeam/14.png";
import image22 from "../../assets/OfficeTeam/15.png";
import image23 from "../../assets/OfficeTeam/16.png";
import image24 from "../../assets/OfficeTeam/17.png";
import image25 from "../../assets/OfficeTeam/18.png";
import image26 from "../../assets/OfficeTeam/19.png";
import image27 from "../../assets/OfficeTeam/20.png";
import image28 from "../../assets/OfficeTeam/21.png";
import image29 from "../../assets/OfficeTeam/22.png";
import image30 from "../../assets/OfficeTeam/23.png";
import image40 from "../../assets/OfficeTeam/40.png";
import image41 from "../../assets/OfficeTeam/41.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LeadershipTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="">
      <h1 className="mt-10 text-2xl font-bold container mx-auto md:pl-32  pl-0">
        Management
      </h1>
      <div className="mt-10 grid md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500"
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image1}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5 ">
            Mrs. Sultana Jerin Anjum
          </h2>
          <h3 className="mt-2 text-center">Chairman of Achieve It Ltd</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998] ">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500"
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={md}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md Fazlay Rabbi{" "}
          </h2>
          <h3 className="mt-2 text-center">Managing Director </h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
{/* 
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image27}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Sazzad Hossain</h2>
          <h3 className="mt-2 text-center">Digital Marketing Executive </h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div> */}
      </div>

      <h1 className="mt-10 text-2xl font-bold container mx-auto md:pl-32  pl-0">
        Software Development Team
      </h1>
      <div className="mt-10 grid md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image12}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Firoz Al Mamun</h2>
          <h3 className="mt-2 text-center">DevOps  </h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image13}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Mahmudul Hasan Rakib
          </h2>
          <h3 className="mt-2 text-center">Project manager</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image41}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Emran Hasan Rifat
          </h2>
          <h3 className="mt-2 text-center">Full Stack Development</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image40}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Mahbub Ali</h2>
          <h3 className="mt-2 text-center">Full Stack Development</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image11}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Akash Nil</h2>
          <h3 className="mt-2 text-center">Front-End Developer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image14}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md. Anis Arafat
          </h2>
          <h3 className="mt-2 text-center">Backend Developer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image15}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md. Ataur Rahman
          </h2>
          <h3 className="mt-2 text-center">Front-End Developer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image16}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md. Habibur Rahman
          </h2>
          <h3 className="mt-2 text-center">Front-End Developer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image917}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md. Himel Chowdhury
          </h2>
          <h3 className="mt-2 text-center">Graphics Designer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        
      
       
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image21}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">
            Md. Skakib Hasan
          </h2>
          <h3 className="mt-2 text-center">UI/UX Designer</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
      </div>
      <h1 className="mt-10 text-2xl font-bold container mx-auto md:pl-32  pl-0">
        Marketing Team
      </h1>
      <div className="mt-10 grid md:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
      <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image27}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Sazzad Hossain</h2>
          <h3 className="mt-2 text-center">Head of Marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image10}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Rakibul Islam</h2>
          <h3 className="mt-2 text-center">Sr. Digital Marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image26}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Hridoy Hasan</h2>
          <h3 className="mt-2 text-center">Social media Marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image28}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Sajal Chowdhury</h2>
          <h3 className="mt-2 text-center">Google ads marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image20}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Rakibul Islam</h2>
          <h3 className="mt-2 text-center">Social media Marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image9}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Sakib Hasan</h2>
          <h3 className="mt-2 text-center">Google Ads Marketing</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image23}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Anis Arafad Hossain</h2>
          <h3 className="mt-2 text-center">SEO Expert</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-4 border-white mx-5 md:mx-0 pt-14 pb-20 shadow-xl hover:shadow-2xl hover:bg-white rounded-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-20  duration-500 "
        >
          <img
            className="h-52 w-52 rounded-full mx-auto object-contain bg-white shadow-2xl"
            src={image35}
            alt=""
          />
          <h2 className="text-xl font-bold text-center mt-5">Ataur Rahman</h2>
          <h3 className="mt-2 text-center">SEO Expert</h3>
          <div className="flex gap-3 justify-center mt-8">
            <p className="border-2 border-[#3b5998] p-1 font-bold rounded-full text-[#3b5998]">
              <FaFacebookF></FaFacebookF>
            </p>
            <p className="border-2 border-[#007bb5] p-1 font-bold rounded-full text-[#007bb5]">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className="border-2 border-[#55acee] p-1 font-bold rounded-full text-[#55acee]">
              <FaTwitter></FaTwitter>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
