import { PostContent } from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

const PostDetailPage = ({ post }) => {
    return (
        <PostContent post={post} />
    );
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    }
}

export const getStaticPaths = async () => {
    const postFiles = getPostsFiles();
    const slugs = postFiles.map(postFile => postFile.replace(/\.md$/, ''));
    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    }
}

export default PostDetailPage;