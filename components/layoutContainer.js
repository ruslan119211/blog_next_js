import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'


const nameSite = 'Blog Next js'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <title>{siteTitle}</title>
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>

            </Head>
            <header className={styles.header}>
                <div className={styles.container}>
                    {home ? (
                        <>
                            <div className={styles.img}>
                                <Image
                                    src="/images/profile.jpg" // Route of the image file
                                    height={144} // Desired size with correct aspect ratio
                                    width={144} // Desired size with correct aspect ratio
                                    alt="First image"
                                />
                            </div>

                            <h1 className={styles.title}>{nameSite}</h1>
                        </>
                    ) : (
                        <>
                            <Link href='/'>
                                <a>
                                    <Image
                                        src="/images/profile.jpg" // Route of the image file
                                        height={144} // Desired size with correct aspect ratio
                                        width={144} // Desired size with correct aspect ratio
                                        alt="First image"
                                    />
                                </a>
                            </Link>
                            <h1 className={styles.title}>{nameSite}</h1>
                        </>
                    )}
                </div>

            </header>
            <div className={styles.container}>
                {children}
                {!home && (
                    <div className={styles.navigation}>
                        <Link href="/">
                            <a>
                                back to home
                            </a>
                        </Link>
                    </div>
                )}
            </div>

        </>
    )
}
