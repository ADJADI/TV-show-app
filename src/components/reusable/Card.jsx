export default function Card({ sourceImg, title, onClick }) {
    return (
        <div className='rounded-md relative h-50 w-80 cursor-pointer' onClick={onClick}>
            <img src={sourceImg} alt="" className="size-full object-cover object-center rounded-md" />
            <span className='from-black to-transparent bg-gradient-to-t absolute inset-0 rounded-b-sm'></span>
            <div className="absolute bottom-2 text-white line-clamp-1 px-4">{title}</div>
        </div>
    )
}
