$(document).ready(function () {
    $("#bs").slider({
        min: 0, max: 2, value: 1, step: .01,
        change: function (event, ui) {
            $("#myVideo")[0].playbackRate = ui.value;
        }
    });
});