import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import Layout, {siteTitle} from "../components/layoutContainer";
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.section}>
                <p className={styles.txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className={styles.txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            <section className={styles.blog_Wrap}>
                <h2 className={styles.title}>Blog</h2>
                <ul>
                    {allPostsData.map(({id, date, title}) => (
                        <li key={id} className={styles.item}>
                            <Link href={`/posts/${id}`}>
                                <a>
                                    <h3>{title}</h3>
                                    <small>
                                        <Date dateString={date}/>
                                    </small>
                                </a>
                            </Link>

                        </li>
                    ))}
                </ul>

            </section>
        </Layout>
    )
}
