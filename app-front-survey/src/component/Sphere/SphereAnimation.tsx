import { Fade } from "react-awesome-reveal";

function SphereAnimation() {
    return (
        <>
            <Fade cascade direction="top-left" triggerOnce={true}>
                <div className="z-0 absolute top-[-120px] left-[-170px] rounded-full w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] bg-red-500">
                </div>
            </Fade>
            <Fade cascade direction="top-right" triggerOnce={true}>
                <div className="z-0 absolute rounded-l-full right-[-10px] w-[50px] h-[100px]  sm:w-[100px] sm:h-[200px] bg-yellow-300">
                </div>
            </Fade>
        </>
    );
}
export default SphereAnimation;