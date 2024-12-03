import React, { useState, useEffect } from "react";

// Icon Components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="black">
    <path d="M220-180h150v-220q0-12.75 8.63-21.38Q387.25-430 400-430h160q12.75 0 21.38 8.62Q590-412.75 590-400v220h150v-390L480-765 220-570v390Zm-60 0v-390q0-14.25 6.38-27 6.37-12.75 17.62-21l260-195q15.68-12 35.84-12Q500-825 516-813l260 195q11.25 8.25 17.63 21 6.37 12.75 6.37 27v390q0 24.75-17.62 42.37Q764.75-120 740-120H560q-12.75 0-21.37-8.63Q530-137.25 530-150v-220H430v220q0 12.75-8.62 21.37Q412.75-120 400-120H220q-24.75 0-42.37-17.63Q160-155.25 160-180Zm320-293Z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="black">
    <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-220v-34q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v34q0 24.75-17.62 42.37Q764.75-160 740-160H220q-24.75 0-42.37-17.63Q160-195.25 160-220Zm60 0h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
  </svg>
);

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="black">
    <path d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z" />
  </svg>
);

const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="black">
    <path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="black">
    <path d="M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h256q12.44 0 23.72 5t19.37 13.09L481-740h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z" />
  </svg>
);



const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>

);

// const MailIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="#000000" />
//   </svg>
// );

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
    />
  </svg>
);

// Main App Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-grow container mx-auto px-4 py-8 mb-20">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "work" && <WorkSection />}
        {activeSection === "education" && <EducationSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {/* {activeSection === 'contact' && <ContactSection />} */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: "home", icon: HomeIcon },
    { name: "about", icon: UserIcon },
    { name: "work", icon: WorkIcon },
    { name: "education", icon: EducationIcon },
    { name: "projects", icon: BriefcaseIcon },
    // { name: 'contact', icon: MailIcon }
  ];

  return (
    <nav className="bg-white shadow-md fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-center py-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveSection(item.name)}
            className={`flex flex-col items-center w-16 h-12 ${activeSection === item.name
              ? "text-blue-600"
              : "text-gray-500 hover:text-blue-400"
              }`}
          >
            <item.icon />
            <span className="text-xs capitalize mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const TypingEffect = () => {
  const [text, setText] = useState(''); // Ensure state is initialized with an empty string
  const fullText = "I  craft Java powered projects for the web."; // The full text to type
  const typingSpeed = 100; // Speed of typing effect (in ms)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setText((prev) => prev + '' + fullText[index]);  // Add one character at a time
        index++;
      } else {
        clearInterval(interval);  // Stop the interval when the full text is typed
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);  // Empty dependency array ensures this effect runs only once

  return (
    <div className="font-mono relative inline-block mb-12">
      <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700">
        {text}
        <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 cursor absolute animate-blink">|</span>
      </p>
    </div>
  );
};

// Home Section Component
const HomeSection = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div>
        <img
          src="/images/simpson.png"
          alt="Groot"
          className="mx-auto w-48 h-48 mb-6 object-cover"
        />
        <p className="text-xl font-mono text-gray-600 mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-800 mb-4 dynalight-regular">Santosh Kumawat</h1>
        <p className="text-xl text-gray-600 mb-6">
          Software Engineer | Full Stack Developer
        </p>
        <TypingEffect />
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/santoshkumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 w-8 h-8"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/santosh-kumawat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 w-8 h-8"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://instagram.com/santoshkumawat.7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 w-8 h-8"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://x.com/santoshkumawat_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 w-8 h-8"
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="/Santosh_Kumawat_Resume.pdf"
            className="button-64"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text">View Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  const skills = [
    "Java",
    "Spring",
    "Spring Boot",
    "Spring Data JPA",
    "Spring Security",
    "PostgreSQL",
    "Microservices",
    "RestAPI",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "React",
    "Git",
    "Github",
    "AWS",
    "RabbitMQ",
    "Kafka",
    "Docker",
    "Kubernetes",
    "Redis",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Software Engineer with 3 years of experience in Java, Spring Boot, and
          full-stack development. Experienced in building robust backend systems
          and user-friendly frontend applications. Passionate about coding
          excellence and delivering scalable software solutions.
        </p>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Work Section Component
const WorkSection = () => {
  const workExperience = [
    {
      company: "Eupheus Learning",
      position: "Java Developer",
      duration: "May 2022 - Present",
      location: "New Delhi, Delhi",
      responsibilities: [
        "Designing and developing RESTful APIs using Java and Spring Boot to enable seamless communication between frontend and backend systems.",
        "Successfully migrated the email service from SES to SendGrid as part of the company's transition from AWS to GCP.",
        "Developed features to enable uploading of student marks entries via Excel files for both the school and teacher apps.",
        "Played a key role in the integration project for our group companies, ClassKlap and SchoolMitra, merging their separate school, student, and teacher applications into single unified entities.",
        "Responsible for building finance, examination and grading modules that cover assessment, results and student report cards.",
        "Developed backend features including Delete Student Rolllist and Regenerate Feedback to handle frequent queries from the finance, operations and product teams to resolve their issues.",
      ],
    },
    {
      company: "Mandasa Technologies",
      position: "Web Developer",
      duration: "June 2021 - May 2022",
      location: "Mandsaur, M. P.",
      responsibilities: [
        "Writing and styling the front - end elements using HTML, CSS, and JavaScript.",
        "Effectively maintaining the web page design.Additionally, documenting the same.",
        "Created a Schema for our Client's interface to improve the overall experience and quality.",
      ],
    },
  ];

  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Where I’ve Worked</h2>
      <div className="grid md:grid-cols-1 gap-8">
        {/* Company Selector */}
        <div className="space-y-4">
          {workExperience.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveCompany(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeCompany === index
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span className="font-semibold">{job.company}</span>
            </button>
          ))}
        </div>

        {/* Job Details */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {workExperience[activeCompany].position}
            </h3>
            <p className="text-gray-600 mb-2">
              {workExperience[activeCompany].company}
            </p>
            <div className="flex flex-col md:flex-row justify-between text-gray-500">
              {/* <Calendar className="mr-2 w-5 h-5" /> */}
              <span className="mb-2 md:mb-0">
                {workExperience[activeCompany].location}
              </span>
              <span>{workExperience[activeCompany].duration}</span>
            </div>
          </div>

          <ul className="space-y-4 text-left text-gray-600 list-disc pl-5">
            {workExperience[activeCompany].responsibilities.map(
              (resp, index) => (
                <li key={index} className="leading-relaxed">
                  {resp}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Education Section Component
const EducationSection = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "Sage University",
      location: "Indore, M. P.",
      graduationYear: "2020 - 2022",
      highlights: [
        "Graduated from Sage University Indore with a Master of Computer Applications (MCA) in Information Technology in June 2022",
        "Achieving a CGPA of 7.88. Proficient in a range of skills including Bootstrap, CSS including Flexbox and Grid Layout, HTML, Core Java, JDBC, JSP, Servlets, MySQL, PostgreSQL, Git, GitHub, and front-end development.",
        "Experienced in object-oriented programming, SQL, responsive web design, and developing web applications.",
      ],
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Mandsaur Institute of Science and Technology",
      location: "Mandsaur, M. P.",
      graduationYear: "2014 - 2017",
      highlights: [
        "During my tenure at Mandsaur Institute of Science & Technology, I pursued a Bachelor of Computer Applications (BCA) with a focus on Information Technology. This comprehensive program equipped me with a solid foundation in various aspects of computer science and web development.",
        "I graduated with a grade of 68.2%. Throughout my studies, I gained proficiency in HTML, CSS, JavaScript, Java, and SQL, enabling me to design and develop dynamic web applications.",
        "My education provided me with a diverse skill set and a strong theoretical understanding, complemented by practical experience, which has been instrumental in my professional journey.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Where I’ve Studied</h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 transform transition hover:scale-105"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <div className="flex justify-center md:justify-start items-center text-gray-600 mt-2">
                  {/* <GraduationCap className="mr-2 w-5 h-5" /> */}
                  <span>{edu.institution}</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="flex justify-center md:justify-end items-center text-gray-500">
                  {/* <MapPin className="mr-2 w-5 h-5" /> */}
                  <span>{edu.location}</span>
                </div>
                <p className="text-blue-600 font-semibold">
                  {edu.graduationYear}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text md:text-lg font-semibold mb-3 text-gray-900">
                Key Highlights
              </h4>
              <ul className="space-y-2 text-left text-gray-600 list-disc pl-5">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
              issuer: "Coursera",
              completionOn: "May 2021",
              certificationLink:
                "https://www.coursera.org/account/accomplishments/certificate/Y5XEDZYS3ZQL",
            },
            {
              name: "Responsive Web Design",
              issuer: "freeCodeCamp",
              completionOn: "Jan 2021",
              certificationLink:
                "https://www.freecodecamp.org/certification/santoshkumaawat/responsive-web-design",
            },
            {
              name: "The Complete Web Developer Course 2.0",
              issuer: "Udemy",
              completionOn: "July 2020",
              certificationLink:
                "https://www.udemy.com/certificate/UC-1bcf02da-5bfa-4bce-a2cd-9b0088317581",
            },
            {
              name: "Advance Java",
              issuer: "SSI Digital, Indore",
              completionOn: "May 2020",
              certificationLink:
                "https://drive.google.com/file/d/1FdvIK5MQByIDauF8yKMtukZwRk5ULMH6/view",
            },
            {
              name: "Core Java",
              issuer: "SSI Digital, Indore",
              completionOn: "Feb 2020",
              certificationLink:
                "https://drive.google.com/file/d/1GdSo9J0f5cM9bXsrOrJodoGCO1lJ2L60/view",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-blue-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-600 mb-2">Issued - {cert.completionOn}</p>
              <p className="text-gray-600">
                <a
                  href={cert.certificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 w-8 h-8"
                >
                  View Certificate
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      name: "E-Commerce Web Application",
      description:
        "A comprehensive e-commerce platform with features like user registration, product and category management, cart functionality, and seamless user interaction.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript",],
      githubLink: "https://github.com/santoshkumawat/advance-java-e-commerce-web-app",
      liveLink: "",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "An interactive Tic Tac Toe game built with React, offering a sleek and responsive design. The project showcases frontend development skills, including state management and dynamic user interaction.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/santoshkumawat/react-tictactoe-app",
      liveLink: "https://tictactoe-kidsgame.netlify.app",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Some Things I’ve Built</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between gap-2 items-center mb-4">
              <div>
                <span>
                  <BriefcaseIcon />
                </span>
              </div>
              <div className="flex items-center">
                <span className="custom-icon-1">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-blue-800">
                    <GitHubIcon />
                  </a>
                </span>
                {project.liveLink ? (
                  <span className="custom-icon-2 pl-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex justify-center hover:text-blue-800">
                      <LinkIcon />
                    </a>
                  </span>
                ) : null}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-8">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Section Component
// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message!');
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 space-y-4"
//       >
//         <div>
//           <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={4}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-white py-4 mt-4 mb-32 text-center">
//       <p className="text-gray-600">
//         © 2024 Santosh Kumawat. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

export default Portfolio;
