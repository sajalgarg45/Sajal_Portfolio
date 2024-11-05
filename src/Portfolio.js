import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Typewriter({ text, speed = 150 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (!typing) return;

        const fullText = text;
        let timer;

        if (displayedText.length < fullText.length && !isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
            }, speed);
        } else if (displayedText.length === fullText.length && !isDeleting) {
            // Pause before deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && displayedText.length > 0) {
            timer = setTimeout(() => {
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
            }, speed / 2);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, speed, text, typing]);

    return (
        <span className="typewriter">
            {displayedText}
            <span className="cursor">|</span>
        </span>
    );
}

function Portfolio() {
    const [selectedSection, setSelectedSection] = useState('experience');
    const [currentProject, setCurrentProject] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const projects = [
        {
            title: 'WEALTHWISE',
            description: 'Wealth Wise is a comprehensive financial platform offering expense tracking, money management, loans, crypto, stocks, and expert financial advice for smarter decisions.',
            technologies: 'HTML5, CSS3, JavaScript, Firebase, Bootstrap, GSAP, Chart.js',
            hostingUrl: 'https://sajalgarg45.github.io/Wealthwise/',
            sourceCodeUrl: 'https://github.com/sajalgarg45/Wealthwise',
            imageUrl: process.env.PUBLIC_URL + '/photos/Wealthwise.png',
        },
        {
            title: 'BLOGSPHERE',
            description: 'Blogsphere is a dynamic platform for writing, sharing blogs, and engaging with a vibrant community of passionate writers and readers.',
            technologies: 'HTML5, CSS3, JavaScript, Bootstrap, GSAP',
            hostingUrl: 'https://sajalgarg45.github.io/Blogsphere/',
            sourceCodeUrl: 'https://github.com/sajalgarg45/Blogsphere',
            imageUrl: process.env.PUBLIC_URL + '/photos/Blogosphere.png',
        },
        {
            title: 'FINO WORKS',
            description: 'Fino Works is an efficient task management system designed for assigning tasks to employees, streamlining workflow, and improving productivity through organized task tracking.',
            technologies: 'HTML5, CSS3, JavaScript, Bootstrap, GSAP, Chart.js',
            hostingUrl: 'https://sajalgarg45.github.io/2310992357_task_assign/',
            sourceCodeUrl: 'https://github.com/sajalgarg45/2310992357_task_assign',
            imageUrl: process.env.PUBLIC_URL + '/photos/FinoWorks.png',
        },
        {
            title: 'TIC-TAC-TOE',
            description: 'Tic Tac Toe is a classic strategy game designed for fun, offering simple yet engaging gameplay for two players',
            technologies: 'React.js, Firebase',
            hostingUrl: 'https://yourproject4.com',
            sourceCodeUrl: 'https://github.com/yourusername/project4',
            imageUrl: process.env.PUBLIC_URL + '/photos/Tic-Tac-Toe.png',
        },
        {
            title: 'DESUITE',
            description: 'DeSuite is a mobile application providing seamless day-to-day task management in the cloud, enabling users to access, organize, and store their data anywhere, anytime.',
            technologies: 'Flutter, Firebase, Google Cloud',
            hostingUrl: 'https://yourproject4.com',
            sourceCodeUrl: 'https://github.com/yourusername/project4',
            imageUrl: process.env.PUBLIC_URL + '/photos/Desuite.jpeg',
        },
    ];

    const certifications = [
        {
            title: 'Postman API Fundamentals',
            issuer: 'Canvas Credentials (Badgr)',
            year: '2024',
            imageUrl: process.env.PUBLIC_URL + '/photos/API.png',
        },
        {
            title: 'Introduction to Data Science',
            issuer: 'Cisco',
            year: '2024',
            imageUrl: process.env.PUBLIC_URL + '/photos/cisco.png',
        },
        {
            title: 'Full Stack Web3 Developer',
            issuer: 'C# Corner',
            year: '2014',
            imageUrl: process.env.PUBLIC_URL + '/photos/web3.png',
        },
        {
            title: 'Introduction to Python',
            issuer: 'Coding Ninjas',
            year: '2024',
            imageUrl: process.env.PUBLIC_URL + '/photos/cn.png',
        },
    ];

    const prevProject = () => {
        setCurrentProject(
            currentProject === 0 ? projects.length - 1 : currentProject - 1
        );
    };

    const nextProject = () => {
        setCurrentProject(
            currentProject === projects.length - 1 ? 0 : currentProject + 1
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="portfolio">
            <nav className={isScrolled ? 'scrolled' : ''}>
                <div className="logo">SAJAL.</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#se">Services</a></li>
                    <li><a href="#re">Resume</a></li>
                    <li><a href="#wo">Work</a></li>
                    <li><a href="#co">Contact</a></li>
                </ul>
            </nav>

            <section id="home" className="section home-section">
                <div className="home-content">
                    <div className="text-section">
                        <h1>
                            Hello, <Typewriter text="I'm Sajal Garg" />
                        </h1>
                        <p>
                            Software Developer | MERN Stack Development | Proficient in Java, C++, Python | AI & ML Enthusiast | Building Solutions with Code
                        </p>
                        <p>
                            My goal is to build products that not only function efficiently but also provide an excellent user experience. I'm always eager to learn new technologies and take on challenging projects.
                        </p>
                        <button>Download CV</button>
                        <div className="social-icons">
                            <a href="https://github.com/sajalgarg45" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sajal-garg-31044a282/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/SajalGarg45" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={process.env.PUBLIC_URL + '/photos/pp.jpg'} alt="Sajal Garg" />
                    </div>
                </div>
            </section>

            <section id="services" className="section services-section">
                <h2 id="se">SERVICES</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-number">01</span>
                        <h3 id="hh3">WEB DEVELOPMENT</h3>
                        <p>
                            I create responsive, dynamic websites using modern web technologies, ensuring seamless user experiences across all devices with optimized performance.
                        </p>
                    </div>
                    <div className="service-card">
                        <span className="service-number">02</span>
                        <h3 id="hh3">UI/UX DESIGN</h3>
                        <p>
                            I design intuitive user interfaces and craft exceptional user experiences, focusing on usability, aesthetics, and functionality to enhance user engagement and satisfaction across digital platforms.
                        </p>
                    </div>
                    <div className="service-card">
                        <span className="service-number">03</span>
                        <h3 id="hh3">SOFTWARE PROGRAMMING</h3>
                        <p>
                            I develop robust, efficient software solutions in various programming languages, solving complex problems while optimizing performance and ensuring scalability for future growth and technological needs.
                        </p>
                    </div>
                    <div className="service-card">
                        <span className="service-number">04</span>
                        <h3 id="hh3">APP DEVELOPMENT</h3>
                        <p>
                            Build cross-platform mobile applications with a focus on user-friendly interfaces, high-performance code, and seamless integration, delivering cutting-edge experiences for Android and iOS users.
                        </p>
                    </div>
                </div>
            </section>

            <section id="resume" className="section resume-section">
                <h2 id="re">RESUME</h2>
                <div className="resume-content">
                    <div className="resume-left">
                        <div
                            className={`resume-tab ${selectedSection === 'experience' ? 'active' : ''}`}
                            onClick={() => setSelectedSection('experience')}
                        >
                            Experience
                        </div>
                        <div
                            className={`resume-tab ${selectedSection === 'certifications' ? 'active' : ''}`}
                            onClick={() => setSelectedSection('certifications')}
                        >
                            Certifications
                        </div>
                        <div
                            className={`resume-tab ${selectedSection === 'skills' ? 'active' : ''}`}
                            onClick={() => setSelectedSection('skills')}
                        >
                            Skills
                        </div>
                        <div
                            className={`resume-tab ${selectedSection === 'about' ? 'active' : ''}`}
                            onClick={() => setSelectedSection('about')}
                        >
                            About Me
                        </div>
                    </div>
                    <div className="resume-right">
                        <div className="resume-section-content" style={{ display: selectedSection === 'experience' ? 'block' : 'none' }}>
                            <h3 id="hh3">Professional Experience</h3>
                            <p>A brief overview of my work experience.</p>
                            <div className="experience-grid">
                                
                                <div className="experience-card">
                                    <h4 id="hh3">Web Team Executive</h4>
                                    <p>The Institution of Engineers (India) · Full-time</p>
                                    <p>Sep 2024 - Present · 3 mos</p>
                                    <p>
                                        Starting as a Web Developer Executive at IEI Student Chapter Club, focusing on creating innovative and impactful digital experiences
                                    </p>
                                </div>
                                <div className="experience-card">
                                    <h4 id="hh3">Discipline and Logistics Executive</h4>
                                    <p>IEEE-CIET Student Branch · Full-time</p>
                                    <p>Sep 2024 - Present · 3 mos</p>
                                    <p>
                                        As the Discipline and Logistics Executive for the IEEE Club, I will uphold club standards, enforce rules, ensure smooth conduct during events, and promote a respectful and orderly environment for all members.
                                    </p>
                                </div>
                                <div className="experience-card">
                                    <h4 id="hh3">Open Source Contributor</h4>
                                    <p>Hacktoberfest · Self-employed</p>
                                    <p>Oct 2024 - Oct 2024 · 1 mo</p>
                                    <p>
                                        Participated in Hacktoberfest 2024, contributed to various open source projects. Engaged in collaborative coding, resolved issues, and enhanced various websites to improve project usability.
                                    </p>
                                </div>
                                <div className="experience-card">
                                    <h4 id="hh3">Open Source Contributor</h4>
                                    <p>GirlScript Summer of Code · Self-employed</p>
                                    <p>Oct 2024 - Nov 2024 · 2 mos</p>
                                    <p>
                                        Contributed to open source in Girl Script Summer of Code 2024, primarily focusing on front-end development. It was an amazing experience collaborating with others on various projects
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section-content" style={{ display: selectedSection === 'certifications' ? 'block' : 'none' }}>
                            <h3 id="hh3">Certifications</h3>
                            <p>A brief overview of my certifications.</p>
                            <div className="certifications-grid">
                                {certifications.map((cert, index) => (
                                    <div className="certification-card" key={index}>
                                        <img src={cert.imageUrl} alt={cert.title} />
                                        <h4 id="hh3">{cert.title}</h4>
                                        <p>{cert.issuer}</p>
                                        <span>{cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="resume-section-content" style={{ display: selectedSection === 'skills' ? 'block' : 'none' }}>
                            <h3 id="hh3">Skills</h3>
                            <p>My technical proficiencies.</p>
                            <div className="skills-grid">
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/html.png'} alt="HTML5" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/css-3.png'} alt="CSS3" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/js.png'} alt="JavaScript" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/science.png'} alt="Science" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/bootstrap.png'} alt="Bootstrap" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/postman.png'} alt="Postman" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/mysql.png'} alt="MySQL" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/github.png'} alt="GitHub" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/java.png'} alt="Java" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/c-.png'} alt="C++" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/python.png'} alt="Python" />
                                </div>
                                <div className="skill-item">
                                    <img src={process.env.PUBLIC_URL + '/photos/figma.png'} alt="Figma" />
                                </div>
                            </div>
                        </div>
                        <div className="resume-section-content" style={{ display: selectedSection === 'about' ? 'block' : 'none' }}>
                            <h3 id="hh3">About Me</h3>
                            <p>Get to know me better.</p>
                            <ul className="about-list">
                                <li><strong>Name: </strong>Sajal Garg</li>
                                <li><strong>Age:</strong> 18</li>
                                <li><strong>Address: </strong>Dera Bassi, Punjab, India</li>
                                <li><strong>Email:</strong> sajalgarg9646@gmail.com</li>
                                <li><strong>Phone: </strong>+91 7986839646</li>
                                <li><strong>Hobbies: </strong>Designing, Video Games</li>
                                <li><strong>Education:</strong> B.Tech in Computer Science</li>
                            </ul>
                            <p>👨🏻‍💻 Hi there! I’m Sajal Garg, a passionate Software Developer with a strong focus on Full Stack Development, Java, C++, Python, and AI/ML technologies.</p>
                            <p>With a deep interest in building scalable solutions, I’ve honed my skills across multiple programming languages and frameworks to create efficient and impactful applications. My experience spans designing websites, developing mobile apps, and solving complex problems with innovative technologies.</p>
                            <p>💡 What I bring to the table:</p>
                            <p>🔸 Full Stack Development: From frontend frameworks to backend APIs, I enjoy creating dynamic and user-friendly digital experiences.</p>
                            <p>🔸 Programming Expertise: Skilled in Java, C++, and Python, I continuously explore how these languages can drive both high-performance systems and easy-to-use interfaces.</p>
                            <p>🔸 AI & Machine Learning: Leveraging AI/ML models to build smart, data-driven applications for better insights and predictions.</p>
                            <p>🔸 Project Involvement: Participated in multiple hackathons and projects, delivering on-time, high-quality solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="section work-section">
                <h2 id="wo">PROJECTS</h2>
                <div className="project-display">
                    <button className="scroll-button" onClick={prevProject}>❮</button>
                    <div className="project-content">
                        <div className="project-left">
                            <h3 id="hh3">{projects[currentProject].title}</h3>
                            <p>{projects[currentProject].description}</p>
                            <p id="hh3"><strong>Technologies:</strong> {projects[currentProject].technologies}</p>
                            <p>
                                <a href={projects[currentProject].hostingUrl} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </p>
                            <p>
                                <a href={projects[currentProject].sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                                    Source Code
                                </a>
                            </p>
                        </div>
                        <div className="project-right">
                            <img src={projects[currentProject].imageUrl} alt={projects[currentProject].title} />
                        </div>
                    </div>
                    <button className="scroll-button" onClick={nextProject}>❯</button>
                </div>
            </section>

            <section id="contact" className="section contact-section">
                <h2 id="co">CONTACT ME</h2>
                <div className="contact">
                    <div className="contact-form">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email Address" />
                        <textarea placeholder="Message"></textarea>
                        <button>Send Message</button>
                    </div>
                    <div className="contact-details">
                        <p><strong>Phone:</strong> +91 7986839646</p>
                        <p><strong>Email:</strong> sajalgarg9646@gmail.com</p>
                        <p><strong>Address:</strong> Dera Bassi, Punjab, India</p>
                        <div className="social-icons">
                            <a href="https://github.com/sajalgarg45" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sajal-garg-31044a282/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/SajalGarg45" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;