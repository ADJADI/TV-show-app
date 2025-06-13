import FavoriteTvShowScreen from "./FavoriteTvShowScreen"
import Button from "../reusable/UIComponent/Button"
import { Link } from 'react-router'
import { ROUTES } from "../../config/route"
import MoreDetails from "../../pages/MoreDetails"
import { config } from "../../config/env"

export default function OneTvShow({ oneTvShow, displayMostPopularTvShow }) {
    const changeTvShowDisplay = oneTvShow ? oneTvShow : displayMostPopularTvShow
    if (!displayMostPopularTvShow) return <span className="h-screen w-full absolute inset-0 bg-neutral-900 text-white text-4xl text-center">loading...</span>
    return (
        <div className="">
            <FavoriteTvShowScreen
                imageUrl={config.apiImageUrl}
                imagePath={changeTvShowDisplay.backdrop_path}
                title={changeTvShowDisplay.original_name}
                vote={changeTvShowDisplay.vote_average}
                resume={changeTvShowDisplay.overview}
            />
            {oneTvShow && (
                <Link to={`${ROUTES.MOREDETAIL.replace(":id", oneTvShow.id)}`} element={<MoreDetails />} >
                    <Button info="More info" style="uppercase text-neutral-300 font-semibold bg-gradient-to-b from-neutral-500/30 to-black/50 tracking-wide backdrop-blur-sm flex ml-5 w-fit py-3 px-30"></Button>
                </Link>
            )}

        </div>
    )
}
