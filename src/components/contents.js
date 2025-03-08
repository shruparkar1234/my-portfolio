import image from './images/pricelessit.png';
import movies from './images/moviedb.png';
import oyawi from './images/oyawiorgs.png';
import chatcord from './images/chatcord.png';
import ipadress from './images/ipaddress.png';
import estaltech from './images/estaltech.png';
import meety from './images/meety.png';
import strapi from './images/strapi.png';
import netflix from './images/netflix.png';
import zomato from './images/zomato.png';
import shelter from './images/shelter.png';
import accident from './images/accident.png'
// links import
import {
  FaEnvelope,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaCode,
} from 'react-icons/fa';

const FullstackContent = [
  {
    content: 'Building responsive Single-Page-Apps (SPA) & PWA in React.js',
  },
  {
    content: 'Building SSR websites with Next.js',
  },
  {
    content: 'Building responsive static websites using Next.js',
  },
  {
    content: 'Building RESTful APIs in Nodejs',
  },
  {
    content: 'Building beautifull wordpress websites in PHP',
  },
];
const DataScienceContent = [
  {
    content: 'Building and optimizing machine learning models using Python (scikit-learn, TensorFlow, PyTorch)',
  },
  {
    content: 'Performing exploratory data analysis (EDA) and data visualization using Pandas, Matplotlib, and Seaborn',
  },
  {
    content: 'Working with large datasets and data pipelines using SQL, Apache Spark, and Pandas',
  },
  {
    content: 'Developing and deploying predictive models with Flask/FastAPI and Docker',
  },
  {
    content: 'Implementing deep learning techniques for NLP and Computer Vision',
  },
  {
    content: 'Building data dashboards and reports using Power BI, Tableau, and Streamlit',
  },
  {
    content: 'Experimenting with generative AI and large language models (LLMs)',
  },
];
const FrontendUIContent = [
  {
    content: 'Building modern, responsive UI with React.js and Next.js',
  },
  {
    content: 'Creating interactive user experiences using JavaScript and TypeScript',
  },
  {
    content: 'Developing pixel-perfect designs with Tailwind CSS, SCSS, and Styled Components',
  },
  {
    content: 'Optimizing frontend performance for faster load times and better UX',
  },
  {
    content: 'Building design systems and reusable component libraries',
  },
  {
    content: 'Implementing animations and microinteractions using Framer Motion and GSAP',
  },
  {
    content: 'Integrating RESTful APIs and GraphQL for dynamic web applications',
  },
  {
    content: 'Ensuring accessibility (a11y) and best UX practices in web applications',
  },
  {
    content: 'Deploying and maintaining frontend applications with Vercel, Netlify, and Firebase',
  },
];

const Mobiledevelopment = [
  {
    content: 'Building crossplatform applications in flutter and dart',
  },
  {
    content: 'Building native android applications in kotlin and java',
  },
  {
    content: 'Designing mobile applications UI using adobe XD',
  },
  {
    content: 'Intergrating android and web application with firebase',
  },
];

const CloudContent = [
  {
    content: 'Experience of working on multiple cloud platforms',
  },
  {
    content:
      'Hosting and maintaining websites on virtual machine instances along with integration of databases',
  },
  {
    content:
      'Building CI/CD pipelines for automated testing & deployment using Github Actions and Heroku',
  },
];

const Experiences = [
  {
    company: 'Edureka',
    image: image,
    position: 'AI Developer Intern',
    dates: 'April 2023 – June 2023',
    description: 'Developed and implemented machine learning algorithms to enhance data processing efficiency and accuracy, collaborated with cross-functional teams to design AI solutions, conducted exploratory data analysis (EDA), optimized deep learning model training, and applied NLP for customer sentiment analysis.',
  },
  {
    company: 'Ureka',
    image: image,
    position: 'Software Engineer Intern',
    dates: 'October 2022 – November 2022',
    description: 'Worked on the Student Management System project using Java for backend logic, MySQL for database management, and implemented authentication and CRUD operations, contributing to a 20% performance improvement within a month.',
  },
];
const PersonalProjects = [
  {
    name: 'Netflix Clone',
    images: netflix,
    description: 'A full-stack Netflix clone with Firebase authentication, interactive movie lists, a detailed movie info page, and an immersive video player with playback controls.',
    link: '', // Add link if available
  },
  {
    name: 'Zomato Clone',
    images: zomato,
    description: 'A responsive restaurant listing app with sorting features, user reviews, secure login, and payment integration using Razorpay.',
    link: '', // Add link if available
  },
  {
    name: 'Shelter Animals Data Analysis',
    images: shelter,
    description: 'A machine learning project analyzing shelter animal adoption trends, predicting adoption outcomes, and debunking myths like Black Dog Syndrome.',
    link: '', // Add link if available
  },
  {
    name: 'Montgomery County Accident Data Analysis',
    images: accident,
    description: 'Used KNN for accident severity classification, conducted cluster analysis, and created density-based maps to identify high-risk areas.',
    link: '', // Add link if available
  },
];


const Links = [
  {
    icons: FaCode,
    url: '/my-portfolio/codes',
    name: 'codes',
  },
  {
    icons: FaEnvelope,
    url: 'mailto:sparkar@csumb.edu',
    name: 'mail',
  },
  // {
  //   icons: FaInstagram,
  //   url: 'https://www.instagram.com/a0x001/',
  //   name: 'Instagram',
  // },
  {
    icons: FaGithubSquare,
    url: 'github.com/shruparkar1234',
    name: 'Github',
  },
  {
    icons: FaLinkedin,
    url: 'www.linkedin.com/in/shrushti-parkar |',
    name: 'Linkedin',
  },
  // {
  //   icons: FaTwitterSquare,
  //   url: 'https://twitter.com/a0x001',
  //   name: 'Twitter',
  // },
  // {
  //   icons: FaMedium,
  //   url: 'https://medium.com/@allanmuturi',
  //   name: 'Medium',
  // },
];

export {
  FullstackContent,
  Mobiledevelopment,
  CloudContent,
  Experiences,
  PersonalProjects,
  Links,
  DataScienceContent,
  FrontendUIContent
};
