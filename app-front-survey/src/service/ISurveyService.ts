import { SurveyCreate } from "../dto/request/survey/survey.create";
import { Survey } from "../dto/response/survey/survey";

export interface ISurveyService {
    list: () => Promise<Survey[]>;
    create: (data: SurveyCreate) => Promise<Survey>;
    findById: (surveyId: number) => Promise<Survey>;
}