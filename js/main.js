function getObjects() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://127.0.0.1:8000/api/objects",

        success: function (objects) {
            console.log(objects)
            var template = $("#all-objects-template").html();
            console.log(template)
            var renderTemplate = Mustache.render(template, objects);
            console.log(renderTemplate)
            $("#all-objects").append(renderTemplate);
            
        }
    });
}

function getObjectInfo(selectedButton) {

    propId = $(selectedButton).attr("id");

    console.log(propId);

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects/" + propId,

		success: function (objects) {
            var template = $("#detail-objects-template").html();
            console.log(template)
            var renderTemplate = Mustache.render(template, objects);
            console.log(renderTemplate)
            $("#object-details").html(renderTemplate);
		}
	});
}

$(document).ready(function () {
    getObjects();
    $(document).on('click', '.objects-info-btn', function () {
		getObjectInfo(this);
	});

});