import Layout from "../../components/layoutContainer";
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import style from '../../styles/post.module.scss'

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className={style.post_wrap}>
                <div className={style.post_wrap__head}>
                    <h2 className={style.title}>{postData.title}</h2>
                    <p>{postData.id}</p>
                    <small>
                        <Date dateString={postData.date} />
                    </small>
                </div>
                <div className={style.content}>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}


