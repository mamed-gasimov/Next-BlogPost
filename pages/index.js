import { Hero } from '../components/Hero';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { getFeaturedPosts } from '../helpers/posts-util';
import Head from 'next/head';

const HomePage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Blog about Web Development</title>
                <meta
                    name='description'
                    content='I post about programming and web development.'
                />
            </Head>
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