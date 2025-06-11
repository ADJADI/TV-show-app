export default function Card({ sourceImg, title }) {
    return (
        <div className='rounded-md relative'>
            <img src={sourceImg} alt="" />
            <span className='from-black to-white bg-gradient-to-t absolute inset-0'></span>
            <div>{title}</div>
        </div>
    )
}
