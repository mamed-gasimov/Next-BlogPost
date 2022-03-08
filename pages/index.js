import { Hero } from '../components/Hero';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export const getStaticProps = async () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        }
    }
}

export default HomePage;