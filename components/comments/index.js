import React from 'react'
import Comment from '../comment'

export default function Comments({ commentsData }) {
  return (
    <>
      {commentsData &&
        commentsData.map((comment, idx) => (
          <Comment
            key={idx}
            by={comment.by}
            text={comment.text}
            time={comment.time}
            number={idx + 1}
          />
        ))}
    </>
  )
}
