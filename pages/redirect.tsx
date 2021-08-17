import { NextRouter, useRouter } from "next/router";
import { Banner, Layout } from "../components/layout";
import { Redirect } from "../components/redirect";

export default function RedirectPage({ data }) {
    const router: NextRouter = useRouter()
    const link: string = router.query.link ? decodeURIComponent(router.query.link.toString()) : ''

    return (
        <Layout page="/booking" title="Booking">
            <Banner path="5Q0A8733.jpg">
                <h1>redirecting</h1>
            </Banner>
            <div className="content">
                <Redirect link={link}></Redirect>
            </div>
        </Layout>
    )
    return <div><h1>Redirecting</h1></div>
}