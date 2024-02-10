export interface SurveyCreate {
    name: string;
    dateStart: string;
    dateEnd: string;
    options: Option[]
}

interface Option {
    name: string;
}
