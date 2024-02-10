import moment from "moment";
import { SurveyCreate } from "../dto/request/survey/survey.create";
import { Text } from "../util/text";

function mapDto(data: any): SurveyCreate {
    let arrayStringOptions = Text.removeJumpLine(Text.removeSpaceBlank(data.options.toString()));
    let arrayObjectOptions: any[] = [];
    arrayStringOptions.forEach((optName) => {
        if (optName.length > 0) arrayObjectOptions.push({ name: optName });
    })
    let now = moment().utc();
    return {
        name: data.name,
        dateStart: now.format(),
        dateEnd: now.clone().add(data.time, data.measure).format(),
        options: arrayObjectOptions
    }
}

const OptionMap = {
    mapDto
}

export default OptionMap;