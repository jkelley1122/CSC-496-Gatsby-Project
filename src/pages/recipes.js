import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="John Kelley's Personal Site">
            <p>This is my personal website which I am making for CSC 496. This will serve as a small personal site to tell you a little bit about myself!</p>
            <StaticImage
                alt="A picture of a me"
                src="../images/20240423_160252.jpg"
            />

            <p>
                Hi! My name is John Kelley and I'm a senior at Eastern Kentucky University. I am an aspiring software developer and game designer.

            </p>
        </Layout>
    )
}


export const Head = () => <Seo title="About Me" />

export default IndexPage