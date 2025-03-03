import React from 'react'
import linked from "./assets/Linked Path.png"
import img1 from "./assets/Rectangle 13.png"
import img2 from "./assets/Rectangle 37.png"
import img3 from "./assets/Rectangle 38.png"
import img4 from "./assets/human1.png"
import img5 from "./assets/human2.png"
import img6 from "./assets/human3.png"
import img7 from "./assets/Group 3258.png"
import logo from "./assets/Logo (9).png"
import socials from "./assets/Social media.png"
const About = () => {
  return (
    <div>
      <header className="w-[90%] m-auto mt-[100px]">
      <aside className="lg:w-[959px] m-0">
        <h2 className="text-[25px] lg:text-[72px] text-[#1D1E25] font-bold">
          Everything you need to get the attention of your audience
        </h2>
      </aside>
      <aside className="flex flex-col items-start justify-between lg:flex-row mt-[50px] m-0">
        <div className="lg:w-[838px] flex gap-[20px] m-0">
          <div className="">
            <img src="../images/Line.png" alt="" className="m-0 pb-[50px]" />
          </div>
          <div className="">
            <h2 className=" text-[15px] lg:text-[32px] text-[#1D1E25] font-bold">
              Our digital agency helps clients develop, implement and maintain
              successful digital marketing strategies across all channels. Also
              work with you to build your website and create online businesses
              that grow.
            </h2>
          </div>
        </div>
        <div className="">
          <img
            src={linked}
            alt=""
            className="m-0 w-[69px] h-[69px] lg:h-[162px] lg:w-[162px]"
          />
        </div>
      </aside>
    </header>
    <main>
      <section className="flex justify-center w-full lg:justify-end ">
        <aside className="w-[90%] flex gap-10 items-start lg:mt-[100px] m-0">
          <div className="hidden lg:block  lg:w-[502px] lg:h-[629px]">
            <img src={img1} alt="" className="m-0" />
          </div>
          <div className="lg:w-[502px] lg:h-[634px]">
            <img src={img2} alt="" className="m-0" />
            <h2 className="text-[32px] text-[#1D1E25] font-bold py-[10px]">
              What we believe in
            </h2>
            <p className="text-[#7E8492] text-[18px] py-[10px]">
              Over the years at Sans, we’ve put a lot of thought into what it is
              that makes us who we are. The qualities that unite us, that make
              us such an effective team, and...
            </p>
            <button
              id="but-1"
              className="w-[175px] h-[56px] rounded-[100px] bg-[#1D1E25] text-[#fff]"
            >
              See Details -&gt;
            </button>
          </div>
          <div className="hidden lg:block lg:h-[460px]">
            <img src={img3} alt="" className="m-0" />
          </div>
        </aside>
      </section>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <aside className="lg:w-[480px] m-0">
          <h2 className="text-[56px] text-[#1D1E25] font-bold">
            Powerful ideas &amp; sales acceleration
          </h2>
        </aside>
        <aside className="lg:w-[522px] m-0">
          <p className="text-[#1D1E25] text-[24px] ">
            We are a software development firm specializing in digital products.
            We build beautiful, functional and cross-platform solutions that are
            accessible to all.
          </p>
        </aside>
      </section>
      <section className="w-[90%] m-auto mt-[100px]">
        <aside className="m-0 lg:w-[903px]">
          <h2 className="text-[56px] text-[#1D1E25] font-bold">
            Meet our team of creators, designers, and world-class problem
            solvers
          </h2>
        </aside>
        <aside className="m-0 lg:w-[503px]">
          <h2 className="text-[18px] text-[#7E8492] py-[10px]">
            To become the company that customers want, it takes a group of
            passionate people. Get to know the people who lead
          </h2>
        </aside>
      </section>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row gap-10 mt-[50px]">
        <aside className="m-0">
          <img src={img4} alt="" className="m-0" />
        </aside>
        <aside className="m-0">
          <img src={img5} alt="" className="m-0" />
        </aside>
        <aside className="m-0">
          <img src={img6} alt="" className="m-0" />
        </aside>
      </section>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row gap-20 items-center mt-[100px]">
        <aside className="lg:w-[626px]">
          <h2 className="text-[53px] text-[#1D1E25] font-bold">
            Join our team, The one with the master touch
          </h2>
        </aside>
        <aside className="lg:w-[506px]">
          <h2 className="text-[18px] text-[#7E8492] py-[10px]">
            We believe it takes great people to make a great product. That’s why
            we hire not only the perfect professional fits, but people who
            embody our company values.
          </h2>
          <p className="py-[0px] text-[#1D1E25] text-[16px] from-black">
            See Open Position -&gt;
          </p>
        </aside>
      </section>
    </main>
    <footer>
          <div className="bg-[#1D1E25] mt-52 w-full">
            <div className="w-[100%] flex justify-between flex-col p-20 text-white lg:flex lg:flex-row">
              <div className="text-start">
                <h1 className="text-3xl lg:text-5xl">Think beyond the wave</h1>
                <p className="mt-2 text-lg lg:text-xl">
                  Ask about Sans products, pricing, implementation, or anything
                  <br />
                  else. Our highly trained reps are standing by, ready to help
                </p>
              </div>
              <div>
                <button
                  id="but-1"
                  className="bg-white text-[#1D1E25] p-3 rounded-full mt-3"
                >
                  Try for free
                </button>
              </div>
            </div>
            <div className="mt-0 lg:flex lg:mt-[50px] justify-between  text-[#7E8492] p-10 items-center">
              <div className="text-start">
                <img src={logo} alt="" className="ml-10" />
                <p className="mt-2">
                  We built an elegant solution. Our team
                  <br />
                  created a fully integrated sales and
                  <br />
                  marketing solution for SMBs
                </p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Company</h1>
                <p className="mt-2">About</p>
                <p className="mt-2">Pricing</p>
                <p className="mt-2">Jobs</p>
                <p className="mt-2">Blog</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Product</h1>
                <p className="mt-2">Sales Software</p>
                <p className="mt-2">Marketplace</p>
                <p className="mt-2">Terms &amp; Conditions</p>
                <p className="mt-2">Privacy Policy</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Discover</h1>
                <p className="mt-2">CRM Comparision</p>
                <p className="mt-2">Partner Program</p>
                <p className="mt-2">What is CRM</p>
                <p className="mt-2">Resource</p>
              </div>
              <div className="hidden lg:block text-start">
                <h1 className="text-lg font-bold text-white">Help Center</h1>
                <p className="mt-2">Community</p>
                <p className="mt-2">Knowledge Base</p>
                <p className="mt-2">Academy</p>
                <p className="mt-2">Support</p>
              </div>
            </div>
            <div className="flex flex-col text-white items-center justify-between lg:flex lg:flex-row mt-32 border-t-2 border-[#606060] lg:w-[1200]">
              <div className="flex flex-col lg:flex-row gap-10 items-center p-10">
                <img src={socials} alt="" />
                <div className="flex gap-3 lg:flex lg:gap-10">
                  <p>Privacy Policy</p>
                  <p>Terms &amp; Conditions</p>
                  <p>Support</p>
                </div>
              </div>
              <div>
                <p>© Copyright 2023,t All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default About
