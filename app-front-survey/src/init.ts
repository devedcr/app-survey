import { Provider } from "./provider/provider";
import { OptionService } from "./service/OptionService";
import { SurveyService } from "./service/SurveyService";

Provider.resolve("IOptionService", OptionService);
Provider.resolve("ISurveyService", SurveyService);