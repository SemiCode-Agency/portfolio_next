import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="img/about/1.jpg" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                My name is <span>Magdy Zahran.</span> I am a React.js and
                  Front-end developer, specializing in website design. With
                  expertise in HTML, CSS, JavaScript, Sass, Bootstrap, Tailwind
                  CSS, React.js, and Next.js.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Quality <span className="coloring">Services</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData.serviceLists &&
                    aboutData.serviceLists.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        {service}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                {aboutData.skills &&
                  aboutData.skills.programming &&
                  aboutData.skills.programming.map((programming, i) => (
                    <div
                      key={i}
                      className="progress_inner skillsInner___"
                      data-value={95}
                    >
                      <span>
                        <span className="label">{programming.name}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - programming.value}%` }}
                        >
                          {programming.value}%
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${programming.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="lang_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Language <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="circular_progress_bar">
                <ul>
                  {aboutData.skills &&
                    aboutData.skills.language &&
                    aboutData.skills.language.map((language, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="myCircle" data-value="0.95">
                            <CircularProgressbar
                              value={language.value}
                              text={`${language.value}%`}
                              strokeWidth={2}
                              styles={buildStyles({
                                // Colors
                                pathColor: color,
                              })}
                            />
                          </div>
                          <div className="title">
                            <span>{language.name}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Working <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="testimonial">
  <div className="about_title">
    <h3>
      <span>
      Clients <span className="coloring">Feedback</span>
      </span>
    </h3>
  </div>
  <div className="list">
    <Swiper {...testimonialSlider} className="owl-carousel">
      <SwiperSlide>
        <div className="list_inner">
          <div className="text">
            <i className="icon-quote-left" />
            <p>
              تعاملت مع المبرمج مجدي في تصميم موقع الشركة الخاص بي وكانت تجربة رائعة. أنا ممتن لسهولة التواصل والاطلاع على جميع التفاصيل بشكل دوري.
            </p>
          </div>
          <div className="details">
            <div className="info">
              <h3>أحمد عبد الله</h3>
              <span>رائد أعمال</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="list_inner">
          <div className="text">
            <i className="icon-quote-left" />
            <p>
              قمت بتصميم موقعي لشركتي مع مجدي وكان ممتازًا في العمل. إنه مبرمج محترف ويفهم احتياجات العميل بشكل جيد.
            </p>
          </div>
          <div className="details">
            <div className="info">
              <h3>سارة محمد</h3>
              <span>مديرة تسويق</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="list_inner">
          <div className="text">
            <i className="icon-quote-left" />
            <p>
              كان لدي مشكلة صغيرة وكان الدعم رائعًا في حلها بسرعة. استمروا في تقديم العمل الجيد!
            </p>
          </div>
          <div className="details">
            <div className="info">
              <h3>عبد الله مصطفى</h3>
              <span>معلم لغة إنجليزية</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
