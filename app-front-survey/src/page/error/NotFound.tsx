import { Link } from "react-router-dom";
import notfound from "../../assets/image/notfound.png";
import { Fade } from "react-awesome-reveal";
function NotFound() {
    return (
        <div className="h-screen flex justify-center items-center border border-red-300">
            <div className="max-w-[500px]">
                <Fade direction="down">
                    <img src={notfound} alt="404 page" />
                </Fade>
                <Fade direction="up">
                    <div className="text-center">
                        <Link to={"/"}>
                            <button className="btn bg-customSecondary text-white px-10 hover:scale-x-105">Go Home</button>
                        </Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default NotFound;