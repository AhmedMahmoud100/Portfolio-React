import { content } from "../Content";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 pb-6 min-h-screen flex flex-col justify-around ">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="custom-grid grid grid-cols-autoFit gap-[25px] justify-center mx-0 lg:mx-[100px]  ">
          {Projects.project_content.map((content, i) => {
            return <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className=" flex flex-col items-center gap-[10px] p-[20px] bg-white rounded-[20px] shadow-primary">
              <a href={content.link} className="w-full h-full" target="_blank">
                <img src={content.image} alt="" className="rounded-[10px] w-full  cursor-pointer hover:scale-110 shadow-primary" />
              </a>
              <h5 className="font-bold font-Poppins">{content.title}</h5>
            </div>
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;


function test() {
  return {
    // 
    // className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
  }
}