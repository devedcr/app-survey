import { apiSurvey } from "../api/apiSurvey";
import { ResponseJson } from "../dto/reponse";
import { SurveyCreate } from "../dto/request/survey/survey.create";
import { Survey } from "../dto/response/survey/survey";
import { ISurveyService } from "./ISurveyService";

export const SurveyService: ISurveyService = {
    list: async function (): Promise<Survey[]> {
        try {
            let response = await apiSurvey.get<ResponseJson<Survey[], any>>("/survey/list");
            if (!response.data.status)
                throw new Error(response.data.errors);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    },
    create: async function (data: SurveyCreate): Promise<Survey> {
        try {
            let response = await apiSurvey.post<ResponseJson<Survey, any>>("/survey/create", data);
            if (!response.data.status)
                throw new Error(response.data.errors);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    },
    findById: async function (surveyId: number): Promise<Survey> {
        try {
            let response = await apiSurvey.get<ResponseJson<Survey, any>>(`/survey/${surveyId}`);
            if (!response.data.status)
                throw new Error(response.data.errors);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}