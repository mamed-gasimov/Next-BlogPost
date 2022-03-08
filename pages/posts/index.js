import { AllPosts } from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = ({ posts }) => {
    return (
        <AllPosts posts={posts} />
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        }
    }
}

export default AllPostsPage;