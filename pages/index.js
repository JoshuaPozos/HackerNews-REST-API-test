import { useContext } from 'react'
import Layout from '@/components/ui/layout'
import Head from 'next/head'
import StoryCard from '@/components/story-card'
import Grid from '@mui/material/Grid'
import { HackerNewsContext } from 'context/HackerNewsContext'

export default function Home() {
  const { storiesData } = useContext(HackerNewsContext)

  return (
    <Layout>
      <Head>
        <title>HackerNewsTest - Joshua Pozos</title>
        <meta
          property="og:image"
          content="https://og-image.vercel.app/HackerNews%20Test.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
        />
      </Head>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {storiesData.length > 0 &&
          storiesData.map((story, idx) => (
            <StoryCard
              key={idx}
              title={story.title}
              by={story.by}
              time={story.time}
              id={story.id}
              data={story}
            />
          ))}
      </Grid>
    </Layout>
  )
}
