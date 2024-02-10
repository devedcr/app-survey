import { apiSurvey } from "../api/apiSurvey";
import { ResponseJson } from "../dto/reponse";
import { Option } from "../dto/response/option/option";
import { IOptionService } from "./IOptionService";

export const OptionService: IOptionService = {
    listOptionOfSurvey: async function (surveyId: number): Promise<Option[]> {
        try {
            let response = await apiSurvey.get<ResponseJson<Option[], any>>(`/option/list/${surveyId}`);
            if (!response.data.status)
                throw new Error(response.data.errors);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}