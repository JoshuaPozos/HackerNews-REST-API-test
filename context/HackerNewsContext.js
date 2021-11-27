import axiosClient from 'axios-client'
import React, { createContext, useEffect, useState } from 'react'

export const HackerNewsContext = createContext()

const HackerNewsProvider = (props) => {
  const [storiesData, setStoriesData] = useState([])
  const [selectedStory, setSelectedStory] = useState({})
  const [commentsStoryData, setCommentsStoryData] = useState([])

  const getTopStories = async () => {
    try {
      await axiosClient
        .get('topstories.json?print=pretty&limitToFirst=10&orderBy="$key"')
        .then(async (res) => {
          res.data.map((story) => getStoryData(story))
        })
    } catch (error) {
      console.log(error)
    }
  }

  const getStoryData = async (storyId) => {
    try {
      await axiosClient.get(`item/${storyId}.json`).then(async (res) => {
        setStoriesData((storiesData) => [...storiesData, res.data])
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getStoryComments = async (commentId) => {
    try {
      await axiosClient
        .get(`item/${commentId}.json?print=pretty`)
        .then(async (res) => {
          setCommentsStoryData((commentsData) => [...commentsData, res.data])
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTopStories()
  }, [])

  useEffect(() => {
    const getComments = async () => {
      selectedStory.kids?.map((comment) => getStoryComments(comment))
    }

    getComments()
  }, [selectedStory])

  return (
    <HackerNewsContext.Provider
      value={{
        storiesData,
        selectedStory,
        setSelectedStory,
        commentsStoryData,
      }}
    >
      {props.children}
    </HackerNewsContext.Provider>
  )
}

export default HackerNewsProvider
