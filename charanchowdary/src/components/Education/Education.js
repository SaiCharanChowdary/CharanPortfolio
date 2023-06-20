import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          Bachelor of technology[B-tech] <span>(2020)-Present</span>
                          </h2>
                          <p>
                          "I am currently pursuing a  <b>BTech degree in Computer Science and Engineering (CSE) </b> 
                            <i>
                              with a current CGPA of 7.5"
                            </i>
                         
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          Secondary Higher Education <span>2018 - 2020, </span>
                          </h2>
                          <p>
                            "I completed my higher education with major subjects as MPC (Maths, Physics, Chemistry)
                            from Sri Chaitanya Abdul Kalam with overall CGPA - 7.2 "
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          Secondary Education(10th)<span> 2017-2018</span>
                          </h2>
                          <p>
                           " I have completed my Secoundary education from Sri Chaitanya Techno Curriculum 
                             with 95% (CGPA - 9.5) in SSC board."
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
        
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;