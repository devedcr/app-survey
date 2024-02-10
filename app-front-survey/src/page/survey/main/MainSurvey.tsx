import barra from ".././../../assets/image/barra.png";
import circular from ".././../../assets/image/circular.png";
import podio from ".././../../assets/image/podio.png";
import SphereAnimation from "../../../component/Sphere/SphereAnimation";
import ModalCreateSurvey from "./component/ModalCreateSurvey/ModalCreateSurvey";
import { useMainSurveyHandler } from "./useMainSurveyHandler";
import { useState } from "react";
import LastSurvey from "./component/LastSurvey/LastSuvey";
import Loader from "../../../component/Loader/Loader";
import { AttentionSeeker } from "react-awesome-reveal";

function MainSurvey() {

    const [showModal, setShowModal] = useState<boolean>(false);
    const { loading, surveys, createSurvey } = useMainSurveyHandler();

    return (
        <>
            <SphereAnimation />
            <ModalCreateSurvey createSurvey={createSurvey} showModal={showModal} setShowModal={setShowModal} />
            <div className="relative z-10">
                <h1 className="font-semibold text-white text-center">Survey Fast</h1>
                <AttentionSeeker effect="tada" cascade triggerOnce={true} >
                    <div className="flex gap-4 items-center justify-center m-11">
                        <div className="mt-20">
                            <img src={barra} alt={"podio"} />
                        </div>
                        <div className="">
                            <img src={podio} alt={"podio"} />
                        </div>
                        <div className="mt-20 ">
                            <img src={circular} alt={"podio"} />
                        </div>
                    </div>
                </AttentionSeeker>
                <div className="text-center text-white my-5">
                    <button onClick={() => setShowModal(true)} className="btn bg-red-600 w-40 hover:bg-red-500 hover:scale-110 ">
                        Create
                    </button>
                </div>
                <div className="mt-14">
                    <Loader status={loading}>
                        <LastSurvey surveys={surveys} />
                    </Loader>
                </div>
            </div>
        </>
    );

}

export default MainSurvey;
