import WorkList from "./WorkList";

const WorkProcess = () => {
    const workingProcess = [
        {
          number: "01",
          title: "Consultation",
          desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          number: "02",
          title: "Research and Strategy Development",
          desc: "We will conduct thorough research on your industry, competitors, and target audience. Based on this research, we will develop a customized marketing strategy that aligns with your business goals.",
        },
        {
          number: "03",
          title: "Implementation",
          desc: "Our team will execute the marketing strategy, implementing various tactics across different channels to achieve the desired outcomes. This may include content creation, social media management, paid advertising, and more.",
        },
        {
          number: "04",
          title: "Monitoring and Optimization",
          desc: "We continuously monitor the performance of our marketing efforts, analyzing data and making adjustments as needed to ensure optimal results. This includes A/B testing, performance tracking, and ongoing optimization.",
        },
        {
          number: "05",
          title: "Reporting and Communication",
          desc: "We provide regular reports on the progress and effectiveness of our marketing campaigns. Open communication ensures you are always informed about what is happening and the results we are achieving.",
        },
        {
          number: "06",
          title: "Continual Improvement",
          desc: "Based on our findings and your feedback, we make ongoing improvements to our strategy and tactics. Our goal is to continuously enhance your marketing efforts and drive long-term success.",
        },
      ];
    return ( 
        <div className="px-4 md:px-24 py-2 lg:mt-3">
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-[#B9FF66] px-4 text-kanit ">
          Our Work Process
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className='mt-10'>
        {
          workingProcess.map((items,index)=>(
            <div key={items.number}>
              <WorkList {...items} />
            </div>
          ))
        }
      </div>
    </div>
     );
}
 
export default WorkProcess;