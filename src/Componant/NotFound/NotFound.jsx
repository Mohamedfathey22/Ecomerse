import img from "./../../assets/images/error.svg"
const NotFound = () => {
  return (
    <div className="p-8">
        <div className="w-[50%] mx-auto"></div>
        <img src={img} alt="Not Found" className="w-full" />
    </div>
  )
}

export default NotFound