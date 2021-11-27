import React, { useContext } from 'react'
import { HackerNewsContext } from 'context/HackerNewsContext'
import Layout from '@/components/ui/layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import timeConverter from '@/utils/time-converter'
import Comments from '@/components/comments'

export default function StoryDetail() {
  const { selectedStory, commentsStoryData } = useContext(HackerNewsContext)

  const commentsWithoutNull = commentsStoryData
    .filter((item) => item !== null)
    .filter((item) => !item.deleted)
    .slice(0, 20)

  return (
    <Layout>
      <Container fixed>
        <Box sx={{ height: '100vh' }}>
          <Typography sx={{ fontSize: 24 }} mb={2} variant="h1" component="div">
            {selectedStory.title}
          </Typography>
          <Typography mb={4} color="text.secondary">
            by {selectedStory.by} - {timeConverter(selectedStory.time)}
          </Typography>
          <Typography sx={{ fontSize: 24 }} mb={4} variant="h2" component="div">
            Comments
          </Typography>
          <Box sx={{ bgcolor: '#cfe8fc' }} p={2}>
            <Comments commentsData={commentsWithoutNull} />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
