import React, { useEffect, useState } from "react";
import "./App.css";
import codingBear from "./coding-bear.png";
import headshot from "./headshot.png";
import resume from "./resume.pdf";
import Typewriter from "./typewriter.js";
import Footer from "./footer.js";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const App = () => {
  const [introText, setIntroText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const introData = [
    "writing code to help people.",
    "equitable CS opportunities.",
    "promoting accessibility in tech.",
    "strawberries.",
    "growing my plushie collection.",
    "developing with my friends.",
    "going to music festivals.",
    "leg day.",
    "that you are on my website!",
  ];

  useEffect(() => {
    const type = () => {
      if (typingIndex < introData.length) {
        const text = introData[typingIndex];
        setIntroText(text);
        setTypingIndex(typingIndex + 1);
      } else {
        setTypingIndex(0);
        setIntroText("");
      }
    };

    const typingInterval = setInterval(type, 4000);

    return () => clearInterval(typingInterval);
  }, [typingIndex]);

  const [isComputerScienceExpanded, setComputerScienceExpanded] =
    useState(false);
  const [isMathematicsExpanded, setMathematicsExpanded] = useState(false);
  const [isLinguisticsExpanded, setLinguisticsExpanded] = useState(false);
  const [isMiscellaneousExpanded, setMiscellaneousExpanded] = useState(false);

  const toggleComputerScience = () => {
    setComputerScienceExpanded(!isComputerScienceExpanded);
  };

  const toggleMathematics = () => {
    setMathematicsExpanded(!isMathematicsExpanded);
  };

  const toggleLinguistics = () => {
    setLinguisticsExpanded(!isLinguisticsExpanded);
  };

  const toggleMiscellaneous = () => {
    setMiscellaneousExpanded(!isMiscellaneousExpanded);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="intro-section">
          <div className="top-container">
            <div className="headshot-container">
              <div className="headshot">
                <div className="circle" />
                <img src={headshot} alt="Headshot" className="headshot-img" />
              </div>
            </div>
            <div className="intro-text-container">
              <h1 className="intro-name">Hi! I'm Elizabeth Kim.</h1>
              <div className="typewriter-container">
                <Typewriter texts={introData} />
              </div>
            </div>
          </div>
          <div className="about-section">
            <div className="blurb-container">
              <p className="blurb">
                I'm an incoming third year at <b>UCLA</b>, where I study
                computer science and linguistics. <br />
                <br /> Currently, I am working at <b>SAIC</b> on the{" "}
                <b>SpaceDEN</b> team, where I am building a data visualization
                app used by the U.S. Space Force to detect and display satellite
                maneuvers.
              </p>
            </div>
            <div className="more-about-me">
              <h2>More about me:</h2>
              <div className="social-links">
                <a
                  className="social-button"
                  href="https://www.github.com/elizabethkim11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="button-icon" /> GitHub
                </a>
                <a
                  className="social-button"
                  href="https://www.linkedin.com/in/elizabethkim11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="button-icon" /> LinkedIn
                </a>
                <a
                  className="social-button"
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="button-icon" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="experience-section">
        <div className="section-container">
          <h1 className="section-title">Experience</h1>
          <h2 className="position">SWE Intern @ SAIC</h2>
          <p className="date">June 2023 - August 2023</p>
          <p className="description">
            Built a five-page carousel style Dash app used by the U.S. Space
            Force to track satellites of interest. Used Cesium and Warpcore APIs
            to visualize satellite maneuvers detected live by an unsupervised
            model. Scraped and displayed dozens of relevant news articles, past
            launches, and future launches on responsive cards.
          </p>
          <h2 className="position">SWE @ ACM at UCLA</h2>
          <p className="date">November 2022 - Present</p>
          <p className="description">
            Developed a content management system for ACM committee use with
            React, Next.js, and Google Sheets APIs. Led team of 3 developers
            over 10 weeks by organizing weekly sync sessions and regularly
            delegating tasks.
          </p>
          <h2 className="position">SWE @ Bruinwalk</h2>
          <p className="date">July 2022 - Present</p>
          <p className="description">
            Used Python, Django, and Selenium to develop a web scraper that
            retrieves UCLA professor headshots from department websites for
            Bruinwalk, a course review tool used by 50,000+ students annually.
            Developed apartment review branch using Python, Django, HTML, CSS,
            and Docker.
          </p>
          <h2 className="position">Database Manager @ LA Elder Law</h2>
          <p className="date">April 2022 - June 2022</p>
          <p className="description">
            Updated forms and queries to collect data for hundreds of clients in
            the firm database using Microsoft Access. Modified database
            relationships to update records for dozens of lawyers’ task lists
            and appointments with SQL.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* <section className="skills-section">
        <div className="section-container">
          <h1 className="section-title">Skills</h1>
        </div>
      </section>

      <div className="section-divider" /> */}

      <section className="education-section">
        <div className="section-container">
          <h1 className="section-title">Education</h1>
          <h2 className="school">University of California, Los Angeles</h2>
          <h3 className="degree">B.A. in Computer Science and Linguistics</h3>
          <p className="date">September 2021 - June 2025</p>
          <h3 className="coursework">Coursework:</h3>
          <p className="date" style={{ fontStyle: "italic" }}>
            Click on a subject to see what I've taken!
          </p>
          {/* <p className="date">click a subject to see more!</p> */}
          <ul className="coursework-list">
            <li>
              <p onClick={toggleComputerScience}>
                <span
                  className={`subject-title ${
                    isComputerScienceExpanded ? "expanded" : ""
                  }`}
                  onClick={toggleComputerScience}
                  onMouseEnter={() => {
                    document.getElementById(
                      "computerScienceTitle"
                    ).style.textDecoration = "underline";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      "computerScienceTitle"
                    ).style.textDecoration = "none";
                  }}
                  style={{ cursor: "pointer" }}
                  id="computerScienceTitle"
                >
                  <strong>👩🏻‍💻 Computer Science</strong>
                </span>
              </p>
              {isComputerScienceExpanded && (
                <ul className="course-sublist">
                  <li>
                    Data Structures and Algorithms (CS 32): Object-oriented
                    programming, abstraction, overloading, inheritance,
                    polymorphism.
                  </li>
                  <li>
                    Software Construction (CS 35L): Python, React, Git, Lisp,
                    full-stack development.
                  </li>
                  <li>
                    Algorithms and Complexity (CS 180): Dynamic programming,
                    divide-and-conquer, greedy algorithms, NP, time and space
                    complexity measurements.
                  </li>
                  <li>
                    Operating Systems (CS 111): Processes and threads,
                    scheduling, file systems, distributed systems, security.
                  </li>
                  <li>
                    Intro to C++ (CS 31): Arrays, strings, pointers, functions.
                  </li>
                  <li>
                    Computer Organization (CS 33): Computer architecture,
                    assembly, C, memory allocation.
                  </li>
                  <li>
                    Theory of Computing (CS 181): Grammars, automata, languages,
                    Turing machines.
                  </li>
                  <li>
                    Computer Graphics (CS 174A): Camera transformations,
                    modeling, perspective and orthographic projections,
                    illumination, texture mapping, collision detection, WebGL.
                  </li>
                </ul>
              )}
            </li>
            <li>
              <p onClick={toggleMathematics}>
                <span
                  className={isMathematicsExpanded ? "expanded" : ""}
                  onMouseEnter={() => {
                    document.getElementById(
                      "mathematicsTitle"
                    ).style.textDecoration = "underline";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      "mathematicsTitle"
                    ).style.textDecoration = "none";
                  }}
                  style={{ cursor: "pointer" }}
                  id="mathematicsTitle"
                >
                  <strong>🧮 Mathematics</strong>
                </span>
              </p>
              {isMathematicsExpanded && (
                <ul className="course-sublist">
                  <li>
                    Discrete Mathematics (MATH 61): Sets and relations,
                    permutations and combinations, graphs and trees, induction.
                  </li>
                  <li>
                    Linear Algebra (MATH 33A): Matrices, bases, eigenvalues and
                    eigenvectors, orthogonality, linear independence.
                  </li>
                  <li>
                    Probability (MATH 70): Statistics, chance trees, conditional
                    probability, random variables, normal and conditional
                    distributions.
                  </li>
                </ul>
              )}
            </li>
            <li>
              <p onClick={toggleLinguistics}>
                <span
                  className={isLinguisticsExpanded ? "expanded" : ""}
                  onMouseEnter={() => {
                    document.getElementById(
                      "linguisticsTitle"
                    ).style.textDecoration = "underline";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      "linguisticsTitle"
                    ).style.textDecoration = "none";
                  }}
                  style={{ cursor: "pointer" }}
                  id="linguisticsTitle"
                >
                  <strong>🗣️ Linguistics</strong>
                </span>
              </p>
              {isLinguisticsExpanded && (
                <ul className="course-sublist">
                  <li>
                    Intro to Linguistics (LING 1): Structure of language,
                    language diversity, languages in sociocultural settings,
                    language and human cognition.
                  </li>
                  <li>
                    Linguistic Analysis (LING 20): Phonetics, phonology,
                    morphology, syntax, semantics, grammar.
                  </li>
                  <li>
                    Syntax I (LING 120B): Syntax trees, morphology in natural
                    languages.
                  </li>
                  <li>
                    Syntax II (LING 165B): Form of grammars, word formation,
                    syntax universals.
                  </li>
                  <li>
                    Semantics (LING 120C): Meaning in natural language, lambda
                    calculus, set theory in language, formal semantic
                    derivations and proofs.
                  </li>
                  <li>
                    Computational Linguistics I (LING 185A): Recursion,
                    probabilities and grammars, parsing algorithms, natural
                    language processing, Haskell.
                  </li>
                </ul>
              )}
            </li>
            <li>
              <p onClick={toggleMiscellaneous}>
                <span
                  className={isMiscellaneousExpanded ? "expanded" : ""}
                  onMouseEnter={() => {
                    document.getElementById(
                      "miscellaneousTitle"
                    ).style.textDecoration = "underline";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(
                      "miscellaneousTitle"
                    ).style.textDecoration = "none";
                  }}
                  style={{ cursor: "pointer" }}
                  id="miscellaneousTitle"
                >
                  <strong>💗 Miscellaneous</strong>
                </span>
              </p>
              {isMiscellaneousExpanded && (
                <ul className="course-sublist">
                  <li>
                    Classical Mythology (CLASSICS 30): Myths and legends of
                    ancient Greece and Rome, applications to ancient societies,
                    modern analysis.
                  </li>
                  <li>
                    History of Dinosaurs (EPS SCI 17): Paleontology, biology and
                    evolution, geology, extinction.
                  </li>
                  <li>
                    America in the 60's (CLUSTER 60A, 60B, 60CW): Civil rights,
                    Vietnam War, counterculture, changes in technology and
                    media, role of music in social movements.
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </section>

      <div className="section-divider" />

      <section className="extracurriculars-section">
        <div className="section-container">
          <h1 className="section-title">Involvements</h1>
          <h2 className="status">Currently</h2>
          <h2 className="position">
            Advocacy Director @ Upsilon Pi Epsilon at UCLA
          </h2>
          <p className="description">
            Serves as a bridge between the student body and UCLA CS department
            to foster equitable experiences for students in tech. Organizes
            events such as Computer Science Welcome Day for 500+ incoming CS
            students, biannual town halls with CS professors and faculty, and
            EDI panels.
          </p>
          <h2 className="position">Internal Vice President @ UCLA KASA </h2>
          <p className="description">
            Leads winter internship program across five different teams. Manages
            weekly newsletter to publicize club events and announcements to
            general members. Organizes logistics of club retreats, banquets, and
            fundraisers.
          </p>
          <h2 className="status">Previously</h2>
          <h2 className="position">UI/UX Designer @ Creative Labs at UCLA</h2>
          <p className="description">
            Spearheaded archival project compiling history of CL branding,
            logos, and graphics. Led Figma workshops for beginner designers by
            teaching basic design principles and delivering Figma function
            tutorials.
          </p>
          <h2 className="position">Graphic Designer @ UCLA KASA</h2>
          <p className="description">
            Used Canva and Adobe Photoshop to design 100+ event graphics and
            flyers. Created a new color scheme with higher contrast to increase
            accessibility for colorblind and other visually impaired audiences.
            Ran Instagram (900+ followers), TikTok (72,000+ views), Facebook,
            and website.
          </p>
        </div>
      </section>
      <div className="section-divider" />
      <Footer />
    </div>
  );
};

export default App;
