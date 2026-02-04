export interface Image {
    id: number;
    urls: string[];
    alt: string;
    description: string;
    tools: string;
    tags: string[];
    link: string;
};

export const galleryImages: Image[] = [
    {
        id: 1,
        urls: ['/images/BobRossWaffleMaker.png'],
        alt: 'product review page',
        description: "A Product review site made in asp.net. The page displays a product, it's description, and the customer satisfaction level. At the bottom is a selectable dropdown menu to leave a review on the product by giving your name, comment, and 1 to 5 star review. When the review is uploaded it can be viewed along with any other submitted comments below.",
        tools: "tools: asp.net, bootstrap, mysql",
        tags: ['ASP.NET', 'MySQL', 'Bootstrap'],
        link: ""
    },
    {
        id: 2,
        urls: ['/images/PhotoAlbum.png'],
        alt: 'photo album gallery',
        description: 'A photo album application made using next.js, where you can move between a set number of photographs and leave comments. The web app accomodates for the dirtectional arrow keys for moving between photos, and a handy "jump-to" bar at the bottom makes it so you can click on any specific image to go there via the index of the photo.',
        tools: "tools: next.js, tailwind css, api integration, mongodb",
        tags: ['Next.JS', 'Tailwind CSS', 'MongoDB', 'API Integration'],
        link: ""
    },
    {
        id: 3,
        urls: ['/images/Projectioningallyifieditive.png', '/images/Projection...page2.png', '/images/Projection...page3.png'],
        alt: 'project management platform landing page',
        description: 'A single-page project management platform product landing page. While this is only the front end, it is meant to display what the features, prices, and sign-up area would be like if actually implemented as a working landing page for a project management platform.',
        tools: "tools: next.js, tailwind css",
        tags: ['Next.JS', 'Tailwind CSS'],
        link: "https://projectioningallyifieditive.vercel.app/"
    },
    // {
    //     id: 4,
    //     urls: ['/images/'],
    //     alt: '',
    //     description: '',
    //     tools: "Tools:"
    // },

];