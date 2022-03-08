import { Hero } from '../components/Hero';
import { FeaturedPosts } from '../components/FeaturedPosts';

const DUMMY_POSTS = [
    {
        title: 'Getting Started with ReactJS',
        slug: 'getting-started-with-reactjs',
        date: '2022-03-08',
        image: 'react-js.jpg',
        summary: 'React - is a JavaScript library for building user interfaces!',
    },
    {
        title: 'Getting Started with ReactJS 2',
        slug: 'getting-started-with-reactjs2',
        date: '2022-03-08',
        image: 'react-js.jpg',
        summary: 'React - is a JavaScript library for building user interfaces!',
    },
    {
        title: 'Getting Started with ReactJS 3',
        slug: 'getting-started-with-reactjs3',
        date: '2022-03-08',
        image: 'react-js.jpg',
        summary: 'React - is a JavaScript library for building user interfaces!',
    },
    {
        title: 'Getting Started with ReactJS 4',
        slug: 'getting-started-with-reactjs4',
        date: '2022-03-08',
        image: 'react-js.jpg',
        summary: 'React - is a JavaScript library for building user interfaces!',
    }
];

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
}

export default HomePage;