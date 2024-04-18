import * as T from '@/types'
import * as Yup from 'yup';
import { Input } from "@/components/ui/input"
import { TbBrandMinecraft } from "react-icons/tb";
import { PiHandshakeThin } from "react-icons/pi";
import { PiClubFill } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea"
import {
  FaLinkedinIn, FaFacebookF, FaInstagram, FaSearchengin, FaAws, FaSalesforce,
  FaYoutube, FaArrowRight, FaUser, FaHome, FaShopify, FaRobot
} from "react-icons/fa";
import { FaXTwitter, FaBattleNet, FaQuoteLeft, FaLightbulb, FaMobileScreenButton, FaUserGroup, FaServicestack } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { BsPersonFillGear, BsClipboard2Data } from "react-icons/bs";
import { IoDocumentTextOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GiBigGear, GiVrHeadset, GiGiftOfKnowledge } from "react-icons/gi";
import { SiMulesoft, SiBlockchaindotcom, SiInternetcomputer, SiSinglestore, SiCyberdefenders, SiBugcrowd, SiMixcloud, SiPowerbi, SiJquery } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineHealthAndSafety, MdOutlineMail, MdOutlineWorkOutline, MdOutlineLocationOn } from "react-icons/md";



export const companyName: string = 'Tech Flow LLc'



export const navLinks: T.NavLink[] = [
  { title: "home", link: "/", menu: false },
  { title: "Services", link: "/services", menu: [{ title: 'comming soon', link: '/some' }] },
  { title: "company", link: "/company", menu: false },
  { title: "careers", link: "/careers", menu: false },
  { title: "work", link: "/our-work", menu: false },
];


export const socialLinks: T.SocialLinks[] = [
  { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/tech-flowllc/' },
  { Icon: FaXTwitter, url: 'https://www.some.com/' },
  { Icon: FaFacebookF, url: 'https://www.some.com/' },
  { Icon: FaInstagram, url: 'https://www.some.com/' },
  { Icon: FaYoutube, url: 'https://www.some.com/' },

]


export const formValidation: T.FormValidation = {
  fullName: Yup.string()
    .required("Full name is Required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),
  organization: Yup.string().required("Organization is Required").min(3, "Message must be at least 3 characters").max(200, "Message cannot exceed 200 characters"),
  message: Yup.string().required("Message is Required").min(10, "Message must be at least 10 characters").max(200, "Message cannot exceed 200 characters"),
};


export const formInputs: T.FormInputs[] = [
  { label: 'Your Name', type: 'text', name: 'fullName', field: Input },
  { label: 'Your Email', type: 'email', name: 'email', field: Input },
  { label: 'Your Number', type: 'tel', name: 'phone', field: Input },
  { label: 'Your Organization', type: 'text', name: 'organization', field: Input },
  { label: 'Your message...', type: '', name: 'message', field: Textarea },
]


export const careerFormValidation: T.FormValidation = {
  fullName: Yup.string().required("Full name is Required").min(2, "Full name must be at least 2 characters")
  .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),  
  cv:Yup.string().required('C.V is required'),  
};


export const careerFormInputs: T.FormInputs[] = [
  { label: 'Your Name', type: 'text', name: 'fullName', field: Input },
  { label: 'Your Email', type: 'email', name: 'email', field: Input },
  { label: 'Your Number', type: 'tel', name: 'phone', field: Input },  
  { label: 'Your CV', type: 'file', name: 'cv', field: Input }, 
]




export const formInfo: T.FormInfo = {
  image: '/form-info.jpg',
  title: 'qasim shamim',
  heading: 'Business Expert Manager',
  email: 'qasim@tekcoflow.com',
  phone: '617 658 4171',
  link: {
    Icon: FaLinkedinIn,
    url: 'https://linkedin.com/in/qasim-shamim'
  }
}


export const companyCard: T.CompanyCard[] = [
  {
    Icon: PiHandshakeThin,
    heading: 'building partnerships that last',
    description: 'we nurture long-term relationships by creating value for our clients in all industries.'
  },
  {
    Icon: TbBrandMinecraft,
    heading: 'creating value',
    description: 'our world-class team of engineers is ready to take on diverse and challenging projects to create real value.'
  },
  {
    Icon: FaBattleNet,
    heading: 'proven capability',
    description: 'give us a problem and we will engineer a solution! we build enterprise and analytical software for every industry.'
  }
]


export const jobsCard: T.JobsCard[] = [
  {
    heading: 'Artificial Intelligence',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'artificial-intelligence'
  },
  {
    heading: 'Internet of Things (IoT)',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'internet-of-things'
  },
  {
    heading: 'Data & Analytics',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'data-analytics'
  },
  {
    heading: 'Blockchain',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'blockchain'
  },
  {
    heading: 'Application Security Services',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'application-security-services'
  },
  {
    heading: 'System Integration',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'system-integration'
  },
]


export const ourPeople: T.OurPeople = {
  image: '/ourWork.jpg',
  heading: 'Meet Our Exceptional Team at Tech Flow LLC',
  description: `At Tech Flow LLC, we're powered by a diverse team of over 50 professionals across two global offices. With 150+ successful projects under our belt and a stellar rating of 4.9, we're renowned for our dedication to excellence. Our team brings together expertise from various backgrounds, united by a shared commitment to driving innovation and exceeding client expectations. Behind every success story is a talented individual, and at Tech Flow LLC, our team is the driving force behind our achievements. Join us on our journey of innovation and excellence.`,
  btn: 'learn more',
  url: '/company',
}


export const homePartnership: T.HomePartnership = {
  image: '/worker.png',
  heading: 'Our Technology Partnerships',
  description: `Tech Flow LLC fosters strategic alliances with leading technology providers to elevate our solutions to new heights. These partnerships enable us to access cutting-edge tools, platforms, and resources, empowering our team to deliver innovative solutions that exceed client expectations. By staying closely aligned with industry leaders, we ensure that our offerings are always at the forefront of technological advancements, driving superior results and value for our clients.`
}


export const homePartnership2: T.HomePartnership2 = {
  image: '/Illustration2.webp',
  heading: 'Decades of Partnership Excellence',
  description: `Tech Flow LLC takes immense pride in the enduring relationships we've cultivated over decades of partnership with industry leaders. These long-standing collaborations signify our commitment to excellence and continuous innovation. Through mutual trust and shared goals, we've navigated technological shifts and market trends, consistently delivering exceptional solutions to our clients. Our enduring partnerships serve as a testament to our reliability, adaptability, and unwavering dedication to driving success for all stakeholders involved.`,
  btn: 'view our technical skill set',
  url: '/our-work'
}


export const testimonial: T.Testimonial[] = [

  {
    tagLine: 'Exceptional Quality!',
    description: 'I was blown away by the exceptional quality of service provided. The team went above and beyond to meet my expectations.',
    Icon: FaQuoteLeft,
    heading: 'Emily Smith, Director of Marketing',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Outstanding Support!',
    description: 'The support team was outstanding! They were prompt, knowledgeable, and resolved my issue in no time. Highly recommended!',
    Icon: FaQuoteLeft,
    heading: 'David Johnson, IT Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Impressive Results!',
    description: `I'm thoroughly impressed with the results delivered by this service. It has exceeded my expectations and added tremendous value to our project.`,
    Icon: FaQuoteLeft,
    heading: 'Sarah Williams, Project Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Unbeatable Performance!',
    description: 'The performance of this product/service is unbeatable. It has significantly improved our efficiency and productivity.',
    Icon: FaQuoteLeft,
    heading: 'Michael Brown, Operations Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Exceptional Experience!',
    description: 'Working with this team has been an exceptional experience. Their professionalism and dedication are commendable.',
    Icon: FaQuoteLeft,
    heading: 'Jessica Miller, HR Director',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  }
];


export const journey: T.Journey[] = [
  {
    count: 100,
    p: 'Employees',
    plus: true,
    Icon: FaUser
  },
  {
    count: 2,
    p: 'global offices',
    plus: false,
    Icon: FaHome
  },
  {
    count: 150,
    p: 'projects completed',
    plus: true,
    Icon: FaLightbulb
  },
  {
    count:250000,
    p: 'USD Annual Turnover',
    plus: false,
    Icon: PiClubFill
  },
]

export const marqueeImageLinks: string[] = [
  '/projects/1.png',
  '/projects/2.png',
  '/projects/3.png',
  '/projects/4.png',
  '/projects/5.png',
  '/projects/6.png',
  '/projects/7.png',
  '/projects/8.png',
  '/projects/9.png',
]


export const workCards: T.WorkCards[] = [
  {
    image: "/work-cards/1.png",
    text: "Arbisoft helped edX create apps, courses, and data analytics for 20M+ learners.",
    url: '/some'
  },
  {
    image: "/work-cards/2.png",
    text: "With zero downtime, we have expanded six continents.",
    url: '/some'
  },
  {
    image: "/work-cards/3.png",
    text: "Developing an award-winning app that helped the company expand into Europe & North America.",
    url: '/some'
  },
  {
    image: "/work-cards/4.png",
    text: "Building the world’s leading travel search engine from scratch.",
    url: '/some'
  },
  {
    image: "/work-cards/5.png",
    text: "Reducing crawl time from 168 hours to 4 hours to save millions in revenue.",
    url: '/some'
  },
  {
    image: "/work-cards/6.png",
    text: "Arbisoft and Philanthropy University partnered to create a learning platform that transforms the impact of local organizations.",
    url: '/some'
  }
]


export const teamCards: T.TeamCards[] = [
  {
    image: '/team/1.webp',
    heading: 'Qasim Ali',
    tagline: 'Founder and CEO',
    description: 'Meet Qasim Shahmin, the pioneering CEO and Founder of Tech Flow LLC, leading our dynamic team towards a future of technological brilliance.',
    linkedin: 'https://www.linkedin.com/in/qasim-shamim/'
  },
  {
    image: '/team/2.webp',
    heading: 'Muneeb ur Rehman',
    tagline: 'Project Manager',
    description: 'Introducing Muneeb ur Rehman, our dedicated Project Manager at Tech Flow LLC, orchestrating seamless execution and delivery of cutting-edge tech solutions.',
    linkedin: 'https://www.linkedin.com/in/muneeb-ur-rehman-929647177/'
  },
  {
    image: '/team/8.jpg',
    heading: 'Aleem Ahmed',
    tagline: 'Technical Projects',
    description: 'Introducing Aleem Ahmed, our dedicated Technical Projects at Tech Flow LLC, orchestrating seamless execution and delivery of cutting-edge tech solutions.',
    linkedin: 'https://www.linkedin.com/in/aleem-ahmed-47399268'
  },
  {
    image: '/team/7.jpg',
    heading: 'Sohail Nawaz',
    tagline: 'Senior Full Stack Developer',
    description: 'Meet Sohail Nawaz, our dedicated Senior Full Stack Developer at Tech Flow LLC, orchestrating seamless execution and delivery of cutting-edge tech solutions.',
    linkedin: 'https://www.linkedin.com/in/muhammad-sohail-nawaz-4b0b40222'
  },
  {
    image: '/team/5.png',
    heading: 'Arbab Zafar',
    tagline: 'Full Stack Web Developer',
    description: 'Meet Arbab Zafar, our dedicated Full Stack Web Developer at Tech Flow LLC, driving strategic partnerships and fostering growth opportunities in the ever-evolving tech landscape.',
    linkedin: 'https://www.linkedin.com/in/arbab-zafar-web-developer/'
  },
  {
    image: '/team/3.webp',
    heading: 'Ahmed Afzal Khan',
    tagline: 'Business Development Officer',
    description: 'Meet Ahmed Afzal Khan, our dynamic Business Development Officer at Tech Flow LLC, driving strategic partnerships and fostering growth opportunities in the ever-evolving tech landscape.',
    linkedin: 'https://www.linkedin.com/in/ahmed-afzal-khan-800077140/'
  },
  {
    image: '/team/4.png',
    heading: 'Tahir Hussain',
    tagline: 'Content Manager',
    description: 'Meet Tahir Hussain, our visionary Content Manager at Tech Flow LLC, sculpting narratives that breathe life into our technological journey and connect with our audience on a deeper level.',
    linkedin: 'https://www.linkedin.com/in/tahir-hussain-5861b7211/'
  },
  {
    image: '/team/6.png',
    heading: 'Farhan Awan',
    tagline: 'shopify developer',
    description: 'Meet Farhan Awan, our visionary shopify developer at Tech Flow LLC, sculpting narratives that breathe life into our technological journey and connect with our audience on a deeper level.',
    linkedin: 'https://www.linkedin.com/in/farhan-awan-shopifyexpert-web-developer/'
  },
]

export const serviceCards: T.ServiceCards[] = [
  {
    heading: 'Software Development',
    description: 'Named among top 1% global companies by Clutch, we have the trust of 500+ companies when it comes to bespoke software solutions.',
    bg: false,
    services: [
      {
        Icon: FaSearchengin,
        title: 'q/a testing',
        url: 'qa-testing'
      },
      {
        Icon: LuPenTool,
        title: 'ui/ux design',
        url: 'ui-ux-design'
      },
      {
        Icon: SiInternetcomputer,
        title: 'dev ops',
        url: 'dev-ops'
      },
      {
        Icon: FaMobileScreenButton,
        title: 'mobile development',
        url: 'mobile-development'
      },
      {
        Icon: CgWebsite,
        title: 'custom software development',
        url: 'custom-software-development'
      },
      {
        Icon: SiInternetcomputer,
        title: 'embedded software development',
        url: 'embedded-software-development'
      },
      {
        Icon: GrIntegration,
        title: 'web app development',
        url: 'web-app-development'
      },
    ]
  },
  {
    heading: 'Consultation Services',
    description: 'We will help you accelerate your digital transformation journey.',
    bg: true,
    services: [
      {
        Icon: FaUserGroup,
        title: 'discovery workshop',
        url: 'discovery-workshop'
      },
      {
        Icon: IoDocumentTextOutline,
        title: 'product strategy',
        url: 'product-strategy'
      },
      {
        Icon: BsPersonFillGear,
        title: 'process consulting',
        url: 'process-consulting'
      },
      {
        Icon: GiBigGear,
        title: 'poc',
        url: 'poc'
      },
    ]
  },
  {
    heading: 'Solution Implementation',
    description: 'As a trusted partner of world’s leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.',
    bg: false,
    services: [
      {
        Icon: FaSalesforce,
        title: 'salesforce',
        url: 'salesforce'
      },
      {
        Icon: FaServicestack,
        title: 'services now',
        url: 'services-now'
      },
      {
        Icon: SiMulesoft,
        title: 'mulesoft',
        url: 'mulesoft'
      },
      {
        Icon: FaAws,
        title: 'aws',
        url: 'aws'
      },
      {
        Icon: SiCyberdefenders,
        title: 'cyber security',
        url: 'cyber-security'
      },
      {
        Icon: SiBugcrowd,
        title: 'bpo',
        url: 'bpo'
      },
      {
        Icon: SiMixcloud,
        title: 'cloud migration',
        url: 'cloud-migration'
      },
      {
        Icon: FaShopify,
        title: 'shopify',
        url: 'shopify'
      },
      {
        Icon: SiPowerbi,
        title: 'power bi',
        url: 'power-bi'
      },
    ]
  },
  {
    heading: 'Emerging Technologies',
    description: 'We help companies become an early adopter of emerging technologies to stay ahead of their competitors.',
    bg: true,
    services: [
      {
        Icon: BsClipboard2Data,
        title: 'data science & ai',
        url: 'data-science-ai'
      },
      {
        Icon: SiBlockchaindotcom,
        title: 'blockchain',
        url: 'blockchain'
      },
      {
        Icon: SiSinglestore,
        title: 'internet of things',
        url: 'internet-of-things'
      },
      {
        Icon: GiVrHeadset,
        title: 'ar/vr',
        url: 'ar-vr'
      },


      {
        Icon: MdOutlineHealthAndSafety,
        title: 'healthcare',
        url: 'healthcare'
      },
      {
        Icon: GiGiftOfKnowledge,
        title: 'e-learning',
        url: 'e-learning'
      },
      {
        Icon: FaRobot,
        title: 'robotic process automation',
        url: 'robotic-process-automation'
      },
    ]
  },
]

export const companyAbout: T.CompanyAbout[] = [
  {
    heading: 'our vision',
    description: `Tech Flow LLC Vision: Excelling Today, Innovating Tomorrow
    At Tech Flow LLC, our vision is concise: to excel in the present and innovate for tomorrow. As an IT company, we're committed to leading the industry with cutting-edge solutions. We envision a future where Tech Flow LLC is synonymous with technological prowess, delivering unparalleled excellence in IT services. Our focus on constant innovation ensures that we remain at the forefront of the ever-evolving tech landscape. In essence, Tech Flow LLC is not just an IT company; we are the catalyst for progress, shaping the digital future.`,
    image: '/com.png',
    tagline: `Qasim Shamim - CEO`
  },
  {
    heading: 'our mission',
    description: `Elevate IT Excellence
    Tech Flow LLC is on a mission to redefine IT excellence through innovation, client-centricity, and precision. We provide top-tier services, integrating cutting-edge technologies to empower our clients. Our commitment to execution excellence, agile adaptability, and sustainability sets a new standard in the dynamic IT landscape. In essence, we are shaping the future of IT services with focused, exceptional solutions.`,
    image: '/mission.png',
    tagline: 'project manager'
  },
]




export const faqs: T.Faq[] = [
  {
    question: "What is custom software development?",
    answer: "Custom software development is the process of creating software solutions that are tailored to meet the specific needs of a particular business or organization."
  },
  {
    question: "What are the benefits of custom software development?",
    answer: "Benefits of custom software development include increased efficiency and productivity, improved data security, better alignment with business goals and processes, and the ability to scale and adapt to changing needs."
  },
  {
    question: "What are the steps involved in custom software development?",
    answer: "Steps involved in custom software development include requirements gathering, design, development, testing, and deployment."
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "The length of time it takes to develop a custom software solution can vary depending on the size and complexity of the project, but typically ranges from several months to a year."
  },
  {
    question: "What are the different types of custom software development services?",
    answer: "Types of custom software development services include web development, mobile app development, desktop application development, and custom software integration."
  },
  {
    question: "How much does custom software development cost?",
    answer: "The cost of custom software development can vary greatly depending on the size and complexity of the project, but typically ranges from several thousand to hundreds of thousands of dollars."
  },
  {
    question: "What is the role of the software development company in custom software development?",
    answer: "The role of the software development company is to work with the client to understand their needs and requirements, design and develop a custom software solution, and provide ongoing support and maintenance."
  },
  {
    question: "What is the process for choosing a software development company?",
    answer: "The process for choosing a software development company typically involves researching potential companies, reviewing their portfolio and client references, and evaluating their experience and expertise in custom software development."
  }
];



export const jobFormValidation: T.FormValidation = {
  fullName: Yup.string()
    .required("Full name is Required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),
};




export const contactInfo: T.ContactInfo = {
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.3806981299067!2d-96.75231972424571!3d32.99373727287896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c22075fa8a2b1%3A0x554644fe60946337!2s3000%20Northside%20Blvd%20%231440%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2s!4v1709130406979!5m2!1sen!2s',
  img: '/contact.png',
  email: {
    url: 'info@tekcoflow.com',
    Icon: MdOutlineMail
  },
  query: {
    url: 'queries@tekcoflow.com',
    Icon: SiJquery
  },
  career: {
    url: 'careers@tekcoflow.com',
    Icon: MdOutlineWorkOutline
  },
  address: {
    url: '3000 northside blvd, appartment 1440, richardson, texas 75080, us',
    Icon: MdOutlineLocationOn
  },
  number: {
    url: 6176584171,
    Icon: IoPhonePortraitOutline
  }
}


