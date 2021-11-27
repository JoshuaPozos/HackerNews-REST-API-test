import React, { useContext } from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import timeConverter from '@/utils/time-converter'
import { HackerNewsContext } from 'context/HackerNewsContext'

export default function StoryCard({ title, by, time, id, data }) {
  const { setSelectedStory } = useContext(HackerNewsContext)
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {timeConverter(time && time)}
          </Typography>
          <Typography sx={{ fontSize: 20 }} variant="h2" component="div">
            {title && title}
          </Typography>
          <Typography color="text.secondary">by {by && by}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setSelectedStory(data)}
            size="small"
            color="secondary"
          >
            <Link
              href={{
                pathname: `/story-detail/[id]`,
                query: { id },
              }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
