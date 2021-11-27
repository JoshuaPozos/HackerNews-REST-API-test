import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import timeConverter from '@/utils/time-converter'

export default function Comment({ by, text, time, number }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <span dangerouslySetInnerHTML={{ __html: text.substring(0, 35) }} />
          ... - {number}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography mb={2} color="text.secondary">
          by {by} - {timeConverter(time)}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </AccordionDetails>
    </Accordion>
  )
}
