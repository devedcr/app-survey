import React from "react";
import { IoCloseOutline } from 'react-icons/io5';
import { Label, Modal, Select, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { SurveyCreate } from "../../../../../dto/request/survey/survey.create";
import { Survey } from "../../../../../dto/response/survey/survey";
import 'moment-timezone';
import OptionMap from "../../../../../mapper/OptionMap";
import { validateTimeHoursSurvey } from "./validation/validation";

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean;
    createSurvey: (data: SurveyCreate) => Promise<Survey | null>;
}

function ModalCreateSurvey(props: Props) {

    const { setShowModal, showModal, createSurvey } = props;
    const navigate = useNavigate();

    async function onSubmitCreate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let input = Object.fromEntries(new FormData(e.target as HTMLFormElement));
        if (!validateTimeHoursSurvey(input.measure, input.time)) return;
        let survey = await createSurvey(OptionMap.mapDto(input));
        setShowModal(false);
        navigate(`/survey/graphic/${survey?.id}`);
    }

    return (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className="relative bg-customSecondary pt-4 ">
                <h1 className="text-2xl text-center text-white">Create</h1>
                <span className="absolute top-[18px] right-[10px] cursor-pointer">
                    <IoCloseOutline onClick={() => setShowModal(false)} size={25} color={"white"} />
                </span>
            </div>
            <Modal.Body className="bg-customSecondary">
                <form onSubmit={onSubmitCreate} className="px-5 rounded-md bg-customSecondary shadow-sm" action="">
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="NAME" className="text-white font-semibold" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder="survey..." required minLength={3} />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="options" value="OPTIONS" className="text-white font-semibold" />
                        </div>
                        <Textarea id="options" name="options" placeholder="Option1&#10;Option2&#10;...&#10;OptionN" required rows={4} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="TIMER" className="text-white font-semibold" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-2">
                                <TextInput id="time" name="time" type="number" min={1} placeholder="10" required />
                            </div>
                            <div>
                                <Select name="measure" required>
                                    <option value={"minutes"} >Minute</option>
                                    <option value={"hours"} >Hour</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <button className="btn text-white bg-red-600 w-full hover:bg-red-500 ">
                            Create
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalCreateSurvey;