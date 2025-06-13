import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchData } from '../utils/tvShowUtils'

export default function MoreDetails() {
    const [moreDetailAboutTvShow, setMoreDetailAboutTvShow] = useState(null)
    const { id } = useParams()
    const endPoint = `/tv/${id}`
    const fetchMoreDetailsAboutTvShow = async () => {
        setMoreDetailAboutTvShow(await fetchData(endPoint))
    }
    useEffect(() => {
        fetchMoreDetailsAboutTvShow()
    }, [])
    
    if (!moreDetailAboutTvShow) return <h2>...Loading</h2>
    return (
        <div className='h-screen'>
            {moreDetailAboutTvShow.first_air_date}
        </div>
    )
}
