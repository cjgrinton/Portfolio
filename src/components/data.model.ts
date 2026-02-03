export interface Image {
    id: number;
    urls: string[];
    alt: string;
    description: string;
    tools: string;
    tags: string[];
};

export const galleryImages: Image[] = [
    {
        id: 1,
        urls: ['/images/BobRossWaffleMaker.png'],
        alt: 'Product Review Page',
        description: "A Product review site made in asp.net. The page displays a product, it's description, and the customer satisfaction level. At the bottom is a selectable dropdown menu to leave a review on the product by giving your name, comment, and 1 to 5 star review. When the review is uploaded it can be viewed along with any other submitted comments below.",
        tools: "Tools: ASP.NET, Bootstrap, MySQL",
        tags: ['ASP.NET', 'MySQL', 'Bootstrap']
    },
    {
        id: 2,
        urls: ['/images/PhotoAlbum.png'],
        alt: 'Photo Album Gallery',
        description: 'A photo album application made using next.js, where you can move between a set number of photographs and leave comments. The web app accomodates for the dirtectional arrow keys for moving between photos, and a handy "jump-to" bar at the bottom makes it so you can click on any specific image to go there via the index of the photo.',
        tools: "Tools: NextJS, Tailwind CSS, API Integration, MongoDB",
        tags: ['Next.JS', 'Tailwind CSS', 'MongoDB', 'API Integration']
    },
    {
        id: 3,
        urls: ['/images/Projectioningallyifieditive.png', '/images/Projection...page2.png', '/images/Projection...page3.png'],
        alt: 'Project Management Platform Landing Page',
        description: 'A single-page project management platform product landing page. While this is only the front end, it is meant to display what the features, prices, and sign-up area would be like if actually implemented as a working landing page for a project management platform.',
        tools: "Tools: Next.js, Tailwind CSS",
        tags: ['Next.JS', 'Tailwind CSS']
    },
    // {
    //     id: 4,
    //     urls: ['/images/'],
    //     alt: '',
    //     description: '',
    //     tools: "Tools:"
    // },

];