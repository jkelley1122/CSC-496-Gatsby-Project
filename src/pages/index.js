import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="John Kelley's Personal Site">
      <p>This is my personal website which I am making for CSC 496. This will serve as a small personal site to tell you a little bit about myself!</p>
      <StaticImage
        alt="A picture of a basketball goal that has been made out of an old TV Satellite Dish"
        src="../images/basketball.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage