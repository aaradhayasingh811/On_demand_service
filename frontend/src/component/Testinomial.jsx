import React from "react";
import Rating from '@mui/material/Rating';

const Testinomial = () => {
  return (
    <>
      <section className="testimonials bg-gradient-to-r from-[#f9f9f9] to-[#fff7e1]">
        <h1 className="heading text-5xl text-center font-[700] text-[#2f4f4f] py-4">Testimonials 📋</h1>
        <section className="container p-12">
          <div className="item item1 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming"
              alt="Picture of Owner"
              className="image-testimonial"
            />
            <div className="name">Surbhi Sikkema</div>
           
            <div className="description">
            This company has been fantastic in providing reliable workers for our business. The cleaners, electricians, and mechanics they sent over were highly professional and always on time. Their attention to detail and the quality of their work really impressed us. We’ve seen a noticeable improvement in our workplace efficiency, thanks to the consistent, high-quality services we receive. The convenience and reliability of the personnel provided have made a significant difference in our daily operations, and I would highly recommend them. <br />
            <Rating name="read-only" value="4.5" className="mt-5" readOnly />

            </div>
          </div>
          <div className="item item2 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/stylish-bearded-guy-posing-against-white-wall-with-glasses_176420-33032.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming"
              alt="Picture of Owner"
              className="image-testimonial"
            />
            <div className="name">Rinku Sekhawat</div>
            <div className="description">
            The team at this company has been an absolute asset to our business. We were in need of skilled personnel for maintenance and cleaning, and they provided us with top-notch workers who understood our needs right away. I can confidently say that the facilities and the personnel they've provided have played a significant role in keeping our operations running smoothly. <br />
            <Rating name="read-only" value="4" className="mt-5" readOnly />

            </div>
          </div>
          <div className="item item3 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming"
              alt="Picture of Owner"
              className="image-testimonial"
            />
            <div className="name">Samriddhi Srivastva</div>
            
            <div className="description">
            We needed skilled labor for a variety of tasks, and this company came through with excellent personnel for everything from cleaning to electrical work. The team they sent was highly skilled, punctual, and extremely professional. Whether it was routine maintenance or urgent repairs, the staff ensured our operations continued without interruption. The service has been outstanding, and we are grateful for the high-quality work that has been consistently delivered. <br />
            <Rating name="read-only" value="4.5" className="mt-5" readOnly />

            </div>
          </div>
          <div className="item item4 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming"
              alt="Picture of Owner"
              className="image-testimonial"
            />
            <div className="name">Pushpa Rawat</div>
            <div className="description">
            I can't thank this company enough for providing us with such skilled workers. From cleaning staff to electricians, every worker they’ve sent has been highly professional and thorough in their work. 
            <br />
            <Rating name="read-only" value="4.5" className="mt-5" readOnly />

            </div>
          </div>
          <div className="item item5 rounded-lg shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming"
              alt="Picture of Owner"
              className="image-testimonial"
            />
            <div className="name">Amrita Paswan</div>
            
            <div className="description">
            This company has truly exceeded our expectations by supplying us with the best personnel for our needs. The cleaners, mechanics, and electricians have been incredibly reliable and efficient. They arrive on time, complete their tasks with care, and ensure everything runs smoothly without disruption. Their team’s professionalism and commitment to quality have made a real difference for us. We’re extremely pleased with the facilities and the workers provided, and we look forward to continuing our partnership.
            <br />
            <Rating name="read-only" value="4.5" className="mt-5" readOnly />

            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Testinomial;
