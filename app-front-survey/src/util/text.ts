
function removeSpaceBlank(texto: string) {
    return texto.replace(/ /g, "");
}

function removeJumpLine(texto: string) {
    return texto.split("\n");
}

export const Text = {
    removeSpaceBlank,
    removeJumpLine
}

