import { useEffect, useState } from "react";
import { Provider } from "../../../provider/provider";
import { ISurveyService } from "../../../service/ISurveyService";
import { Survey } from "../../../dto/response/survey/survey";
import { SurveyCreate } from "../../../dto/request/survey/survey.create";

const isurveyService = Provider.resolve<ISurveyService>("ISurveyService");

export function useMainSurveyHandler() {

    const [loading, setLoading] = useState<boolean>(false);
    const [surveys, setSurveys] = useState<Survey[]>([]);

    async function executeWithLoading(callback: any): Promise<any> {
        setLoading(true);
        let response = await callback();
        setLoading(false);
        return response;
    }

    async function getAllSurvey(): Promise<void> {
        await executeWithLoading(() => getAllSurveyPrivate())
    }

    async function getAllSurveyPrivate(): Promise<void> {
        try {
            setSurveys(await isurveyService.list());
        } catch (e) {
            console.warn(e);
        }
    }

    async function createSurvey(data: SurveyCreate): Promise<Survey | null> {
        return executeWithLoading(() => createSurveyPrivate(data));
    }

    async function createSurveyPrivate(data: SurveyCreate): Promise<Survey | null> {
        try {
            return await isurveyService.create(data);
        } catch (e) {
            console.warn(e);
            return null;
        }
    }


    useEffect(() => {
        getAllSurvey();
    }, []);

    return {
        loading,
        surveys,
        getAllSurvey,
        createSurvey
    }
}
