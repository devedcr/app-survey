

export function validateTimeHoursSurvey(measure: any, time: any): boolean {
    if (measure == "hours" && Number(time) > 24) {
        alert("El maximo tiempo de encuestas es 24horas!!!")
        return false;
    }
    if (measure == "minutes" && (Number(time) / 60) > 24) {
        alert("El maximo tiempo de encuestas es 24horas!!!")
        return false;
    }
    return true;
}
