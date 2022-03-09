import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PostHeader } from '../PostHeader';
import styles from './PostContent.module.css';

const PostContent = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;
            let result = null;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                result = (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>

                )
            } else {
                result = <p>{paragraph.children}</p>
            }
            return result;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

            return (
                <SyntaxHighlighter style={solarizedlight} language={language}>
                    {children}
                </SyntaxHighlighter>
            );
        }
    }

    return (
        <article className={styles.content} >
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article >
    )
}

export default PostContent;