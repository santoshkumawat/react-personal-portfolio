import React, { useState } from 'react';

// Icon Components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 20H20V9.48908L12 3.26686L4 9.48908V20H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V20ZM10 20V13H14V20H10Z" fill="#000000" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1ZM8.5 6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5C15.5 8.433 13.933 10 12 10C10.067 10 8.5 8.433 8.5 6.5Z" fill="#000000" />
    <path d="M8 14C4.68629 14 2 16.6863 2 20V22C2 22.5523 2.44772 23 3 23C3.55228 23 4 22.5523 4 22V20C4 17.7909 5.79086 16 8 16H16C18.2091 16 20 17.7909 20 20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V20C22 16.6863 19.3137 14 16 14H8Z" fill="#000000" />
  </svg>
);

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6472 4.2755C18.3543 3.89891 19.8891 3.97968 20.8292 4.10203C20.8592 4.10592 20.8911 4.11927 20.9256 4.16303C20.9637 4.21127 21 4.29459 21 4.40561V17.5662C21 17.8531 20.7538 18.0756 20.4978 18.0671C19.2792 18.027 17.4886 18.0635 15.7992 18.4717C14.6384 18.7522 13.7101 19.2206 13 19.7021V6.46564C13 6.22541 13.0548 6.10361 13.0945 6.05233C13.2183 5.89268 13.5973 5.55172 14.2498 5.18356C14.8798 4.82813 15.7 4.48446 16.6472 4.2755ZM21.0873 2.11876C19.9976 1.97693 18.2169 1.88113 16.2164 2.32246C15.0613 2.57728 14.0561 2.99648 13.2671 3.44169C12.5005 3.87417 11.8669 4.37162 11.514 4.82683C11.1078 5.35069 11 5.96564 11 6.46564V22C11 22.4411 11.289 22.83 11.7112 22.9574C12.1314 23.0841 12.5849 22.922 12.8297 22.5583L12.8315 22.5555L12.8304 22.5572L12.8297 22.5583C12.8297 22.5583 12.831 22.5564 12.8322 22.5546C12.8365 22.5485 12.8455 22.536 12.8591 22.5178C12.8864 22.4814 12.9324 22.4224 12.9974 22.3467C13.1277 22.195 13.3329 21.9779 13.6163 21.7398C14.1824 21.2641 15.0549 20.7091 16.269 20.4158C17.7048 20.0688 19.2899 20.0284 20.4319 20.066C21.8117 20.1115 23 18.9895 23 17.5662V4.40561C23 3.34931 22.2946 2.27587 21.0873 2.11876Z" fill="#000000" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35275 4.2755C5.64572 3.89891 4.11089 3.97968 3.17076 4.10203C3.14084 4.10592 3.10885 4.11927 3.07437 4.16303C3.03635 4.21127 3 4.29459 3 4.40561V17.5662C3 17.8531 3.24619 18.0756 3.50221 18.0671C4.72076 18.027 6.51143 18.0635 8.20077 18.4717C9.36161 18.7522 10.2899 19.2206 11 19.7021V6.46564C11 6.22541 10.9452 6.10361 10.9055 6.05233C10.7817 5.89268 10.4027 5.55172 9.75015 5.18356C9.12019 4.82813 8.29995 4.48446 7.35275 4.2755ZM2.91265 2.11876C4.00241 1.97693 5.78311 1.88113 7.78361 2.32246C8.9387 2.57728 9.94388 2.99648 10.7329 3.44169C11.4995 3.87417 12.1331 4.37162 12.486 4.82683C12.8922 5.35069 13 5.96564 13 6.46564V22C13 22.4411 12.711 22.83 12.2888 22.9574C11.8686 23.0841 11.4151 22.922 11.1703 22.5583L11.1685 22.5555L11.1696 22.5572L11.1703 22.5583C11.1703 22.5583 11.169 22.5564 11.1678 22.5546C11.1635 22.5485 11.1545 22.536 11.1409 22.5178C11.1136 22.4814 11.0676 22.4224 11.0026 22.3467C10.8723 22.195 10.6671 21.9779 10.3837 21.7398C9.81759 21.2641 8.94511 20.7091 7.73105 20.4158C6.2952 20.0688 4.71011 20.0284 3.56807 20.066C2.18834 20.1115 1 18.9895 1 17.5662V4.40561C1 3.34931 1.70543 2.27587 2.91265 2.11876Z" fill="#000000" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V8C21 7.73478 20.8946 7.48043 20.7071 7.29289C20.5196 7.10536 20.2652 7 20 7H11.5352C10.8665 7 10.242 6.6658 9.87108 6.1094L8.46482 4H4ZM1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H8.46482C9.13352 2 9.75799 2.3342 10.1289 2.8906L11.5352 5H20C20.7957 5 21.5587 5.31607 22.1213 5.87868C22.6839 6.44129 23 7.20435 23 8V19C23 19.7957 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7957 22 20 22H4C3.20435 22 2.44129 21.6839 1.87868 21.1213C1.31607 20.5587 1 19.7957 1 19V5C1 4.20435 1.31607 3.44129 1.87868 2.87868Z" fill="#000000" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="#000000" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Main App Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gray-50 flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'work' && <WorkSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'home', icon: HomeIcon },
    { name: 'about', icon: UserIcon },
    { name: 'work', icon: WorkIcon },
    { name: 'education', icon: EducationIcon },
    { name: 'projects', icon: BriefcaseIcon },
    { name: 'contact', icon: MailIcon }
  ];

  return (
    <nav className="bg-white shadow-md fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-center py-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveSection(item.name)}
            className={`flex flex-col items-center w-16 h-12 ${activeSection === item.name
              ? 'text-blue-600'
              : 'text-gray-500 hover:text-blue-400'
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

// Home Section Component
const HomeSection = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div>
        <img src="/images/groot.jpg" alt="Groot"
          className="mx-auto rounded-full w-48 h-48 mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Santosh Kumawat
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Software Engineer | Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
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
        </div>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  const skills = [
    'Java', 'Spring', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'PostgreSQL',
    'Microservices', 'RestAPI', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'React',
    'Git', 'Github', 'AWS', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes', 'Redis'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Software Engineer with 3 years of experience in Java, Spring Boot, and full-stack development. Experienced in building
          robust backend systems and user-friendly frontend applications. Passionate about coding excellence and delivering
          scalable software solutions.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3 text-center">
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
      company: 'TechInnovate Solutions',
      position: 'Senior Software Engineer',
      duration: 'Jan 2021 - Present',
      responsibilities: [
        'Led development of scalable web applications using React and Node.js',
        'Implemented microservices architecture improving system performance',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'WebCraft Innovations',
      position: 'Full Stack Developer',
      duration: 'Jun 2018 - Dec 2020',
      responsibilities: [
        'Developed responsive web applications using modern JavaScript frameworks',
        'Integrated third-party APIs and optimized database queries',
        'Collaborated with cross-functional teams to deliver high-quality software'
      ]
    },
    {
      company: 'StartUp Tech',
      position: 'Junior Developer',
      duration: 'Jan 2017 - May 2018',
      responsibilities: [
        'Assisted in development of client-side applications',
        'Performed debugging and troubleshooting of existing systems',
        'Learned and applied agile development methodologies'
      ]
    }
  ];

  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Company Selector */}
        <div className="md:col-span-1 space-y-4">
          {workExperience.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveCompany(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeCompany === index 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="font-semibold">{job.company}</span>
            </button>
          ))}
        </div>

        {/* Job Details */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {workExperience[activeCompany].position}
            </h3>
            <p className="text-gray-600 mb-2">
              {workExperience[activeCompany].company}
            </p>
            <div className="flex items-center text-gray-500">
              {/* <Calendar className="mr-2 w-5 h-5" /> */}
              <span>{workExperience[activeCompany].duration}</span>
            </div>
          </div>

          <ul className="space-y-4 text-gray-600 list-disc pl-5">
            {workExperience[activeCompany].responsibilities.map((resp, index) => (
              <li key={index} className="leading-relaxed">
                {resp}
              </li>
            ))}
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
      degree: 'Master of Science in Computer Science',
      institution: 'Tech University',
      location: 'San Francisco, CA',
      graduationYear: 2020,
      highlights: [
        'Specialized in Machine Learning and Artificial Intelligence',
        'GPA: 3.8/4.0',
        'Research Assistant in Advanced Algorithms Lab'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Engineering College',
      location: 'Seattle, WA',
      graduationYear: 2018,
      highlights: [
        'Minor in Data Science',
        'Dean\'s List for Academic Excellence',
        'Led university\'s tech innovation club'
      ]
    }
  ];  

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-8 transform transition hover:scale-105"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <div className="flex items-center text-gray-600 mt-2">
                  {/* <GraduationCap className="mr-2 w-5 h-5" /> */}
                  <span>{edu.institution}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-500">
                  {/* <MapPin className="mr-2 w-5 h-5" /> */}
                  <span>{edu.location}</span>
                </div>
                <p className="text-blue-600 font-semibold">
                  Graduated {edu.graduationYear}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-lg font-medium mb-3 text-gray-700">
                Key Highlights
              </h4>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
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
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
            { name: 'React Developer Certification', issuer: 'React Academy' },
            { name: 'Advanced JavaScript', issuer: 'Online Tech Institute' }
          ].map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-blue-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600">{cert.issuer}</p>
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
      name: 'Task Management App',
      description: 'Full-stack task tracking application with real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: '#'
    },
    {
      name: 'E-commerce Platform',
      description: 'Scalable online marketplace with payment integration.',
      technologies: ['React', 'GraphQL', 'Stripe'],
      githubLink: '#'
    },
    {
      name: 'AI Chatbot',
      description: 'Machine learning powered conversational interface.',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      githubLink: '#'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="w-5 h-5 mr-2">
                <GitHubIcon />
              </span>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-4 mb-32 text-center">
      <p className="text-gray-600">
        © 2024 Santosh Kumawat. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Portfolio;