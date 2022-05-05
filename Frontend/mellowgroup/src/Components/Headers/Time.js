import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Time = () => {
    const locale = "en"
    const [today, setDate ] =useState(new Date())
    const day =today.toLocaleDateString(locale, {weekday: "long"})
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: "long"})}`
    const time = today.toLocaleTimeString(locale, {hour: "numeric", hour12: true, minute: "numeric"})
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

  return (
      <>
        <Button className='btn btn-warning text-danger mx-2 fs-7'>
        <div>{time}</div>
        <div>{date}</div>
        </Button>
      </>
  )
}

export default Time