// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden w-full ">
      <div className="min-h-screen relative flex flex-col-reverse	 sm:flex-row justify-between items-center">


        {/* first col */}
        <div className="pb-16 pl-5 sm:pl-10 pr-4 pt-5 mb-[100px]" data-aos="fade-down">
          <h2 className='text-3xl sm:text-5xl'>{hero.title}</h2>
          <br />
          <div className="flex flex-col gap-3 ms:gap-5 mt-0 sm:mt-3">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                className={`flex items-center gap-5 `}
              >
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="slide-left"
          
          className=" relative h-[65vh] sm:min-h-screen min-w-[300px] flex flex-col items-center sm:w-1/3 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="text-[#EAF2FA] mt-8 sm:mt-16 ">
            {hero.firstName}

          </h1>
          <h1 className="text-dark_primary">{hero.LastName}</h1>
          <div className="h-[76%] absolute bottom-0 left-[30px] md:left-0 lg:left-[-60%] ">
            <img
              src={hero.image}
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>

        {/* sec col */}

      </div>
    </section>
  );
};

export default Hero;
