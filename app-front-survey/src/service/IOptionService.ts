import { Option } from "../dto/response/option/option";

export interface IOptionService {
    listOptionOfSurvey(surveyId: number): Promise<Option[]>;
}