import ReactMarkdown from 'react-markdown';
import { PostHeader } from '../PostHeader';
import styles from './PostContent.module.css';

const DUMMY_POST = {
    title: 'Getting Started with ReactJS',
    slug: 'getting-started-with-reactjs',
    date: '2022-03-08',
    image: 'react-js.jpg',
    summary: 'React - is a JavaScript library for building user interfaces!',
    content: '# This is a first post',
}

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={styles.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;