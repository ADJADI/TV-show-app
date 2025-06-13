import { useRef, useState, useEffect } from 'react'
import OneTvShow from '../components/body/OneTvShow'
import { config } from '../config/env'
import Button from '../components/reusable/UIComponent/Button'
import Card from '../components/reusable/Card'
import { fetchData } from '../utils/tvShowUtils'


export default function Home() {
    const [tvShowList, setTvShowList] = useState([])
    const [oneTvShow, setOneTvShow] = useState(null)
    const [mostPopularTvShow, setMorePopularTvShow] = useState(null)
    const endPoint = "/tv/popular"
    const fetchPopularTvShow = async () => {
        // ajouter fonction dans l api
        setTvShowList((await fetchData(endPoint)).results)
    };

    useEffect(() => {
        fetchPopularTvShow()
    }, [])

    const locationToReachRef = useRef()
    const scrollToTheStartByStepOnClick = () => {
        locationToReachRef.current.scrollBy({
            behavior: "smooth",
            left: -30
        })
    }
    const scrollToStart = () => {
        locationToReachRef.current.scrollTo({
            behavior: "smooth",
            left: 0
        })
    }
    const scrollToTheEndByStepOnClick = () => {
        locationToReachRef.current.scrollBy({
            behavior: "smooth",
            left: 30
        })
    }
    const scrollToEnd = () => {
        locationToReachRef.current.scrollTo({
            behavior: "smooth",
            left: 100000
        })
    }

    const getOneTvShow = (obj) => {
        setOneTvShow(obj)
    }

    const getMostPopularTvShow = () => {
        tvShowList.map((show, index) => index === 0 ? setMorePopularTvShow(show) : "")
    }

    useEffect(() => {
        getMostPopularTvShow()
    }, [tvShowList])

    return (
        <div className='min-h-[calc(100vh-5rem)] flex flex-col justify-between p-5'>
            <div className='min-h-[calc(100vh-10rem)'>
                <OneTvShow displayMostPopularTvShow={mostPopularTvShow} oneTvShow={oneTvShow} />
            </div>
            <div className="relative p-5">
                <div className="italic text-2xl font-semibold tracking-wide text-neutral-300 mb-5 ">You may also like...</div>
                <div className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]
                [scrollbar-width:none]" ref={locationToReachRef}>
                    <div className="absolute top-32 z-10 left-0 w-full  flex items-center justify-between">
                        <button className="text-white rounded-full bg-gradient-to-b from-neutral-700/30 to-black/30 backdrop-blur-sm flex items-center justify-center size-18" onMouseDown={scrollToStart} onClick={scrollToTheStartByStepOnClick}><svg className="size-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                        <button className="text-white rounded-full bg-gradient-to-b from-neutral-700/30 to-black/30 backdrop-blur-sm flex items-center justify-center size-18" onMouseDown={scrollToEnd} onClick={scrollToTheEndByStepOnClick}><svg className="size-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                    </div>
                    {tvShowList.map((obj) => {
                        const { backdrop_path, id, original_name } = obj
                        return (
                            <div key={id} className={`${oneTvShow && oneTvShow.id === id ? "hidden" : ""}`}>
                                <Card onClick={() => getOneTvShow(obj)} id={id} sourceImg={`${config.apiImageUrl}${backdrop_path}`} title={original_name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
// renommer plus simplement (quand est ce que cette fonction va être lancé)
// passer l'id directement a la fonction ici 