
function enableEditMode() {
    richtext.document.designMode = "On";
}

function Bold() {
    richtext.document.execCommand('bold', false, null)
}

function Underline() {
    richtext.document.execCommand('Underline', false, null)
}

function Italic() {
    richtext.document.execCommand('Italic', false, null)
}
function justifyCenter() {
    richtext.document.execCommand('justifyCenter', false, null)
}
function justifyRight() {
    richtext.document.execCommand('justifyRight', false, null)
}
function JustifyLeft() {
    richtext.document.execCommand('justifyLeft', false, null)

}
function JustifyFull() {
    richtext.document.execCommand('justifyFull', false, null)
}
function FontColor(color) {
    richtext.document.execCommand('foreColor', false, color);
}