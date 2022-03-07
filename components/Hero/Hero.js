import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src='/images/site/web_development.jpg' alt='An image' width={350} height={350} />
            </div>
            <h1>Hi, I love Web Development!</h1>
            <p>I blog about web development, especially about JS and React!</p>
        </section>
    );
}

export default Hero;