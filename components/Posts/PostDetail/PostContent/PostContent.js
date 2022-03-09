import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import { PostHeader } from '../PostHeader';
import styles from './PostContent.module.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);

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