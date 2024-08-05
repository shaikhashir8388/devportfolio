import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [

    
    
    {
        id: 1,
        name: 'Khelao - Street Cricket Platform',
        description: "My team and I developed 'Khelao,' a web application that promotes street cricket. Users can create their own teams and register as all-rounders, batsmen, bowlers, or umpires. The frontend was built using Next.js and Tailwind CSS, while the backend was powered by Node.js, Express, and MongoDB. The app includes features like login/signup, admin and user views, and various components. We collaborated on different parts of the frontend and backend to create a seamless user experience.",
        tools: ['Next.js, Tailwind CSS, Node.js, Express, MongoDB'],
        role: 'Frontend, backend(nodejs)',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Admin Dashboard',
        description: 'I developed an eCommerce dashboard using Next.js and Tailwind CSS, connected to a MongoDB database. The dashboard displays essential metrics such as total views, total profit, total products, and total users. It includes comprehensive features like payment charts, sales revenue charts, received and due payment tracking, and total visitor analytics. I implemented both monthly and weekly statistics views and integrated a profile section, notifications, calendar view, and a search option at the top. Additionally, a form section is connected to the database for data collection and management..',
        tools: ['NextJS','Tailwind CSS','MONGODB'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Movie Application',
        description: ' I developed Movie Web, an application that fetches and displays movie data using the Netflix API. The site features a comprehensive collection of movies, with data dynamically retrieved through API calls. For user interaction, I created a contact section with a form where users can enter their information. Upon submission, the data is securely stored in a MongoDB database via a POST request. The project utilizes Next.js and Tailwind CSS for a seamless and responsive user experience.',
        tools: ['Next.js, Tailwind CSS, MongoDB, Netflix API'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'E-Commerce Web Application',
        description: " I developed a comprehensive e-commerce web application using Next.js and Tailwind CSS. The platform offers users a pure e-commerce experience, allowing them to browse and purchase products seamlessly. Key features include an add-to-cart section, product cart, and order item functionalities. The application also includes a categories section to help users easily find products. Additionally, I integrated various icons and utilized Google services to enhance the user experience. The backend is powered by MongoDB, ensuring secure and efficient data management.",
        tools: ['NextJS', 'Tailwind css', 'MongoDb'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
    
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },