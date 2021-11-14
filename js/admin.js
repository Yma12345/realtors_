function getHouses() {
    $.ajax({
		type: "GET",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects",

		success: function (objects) {
            allHouses = objects;
			console.log(objects)
            var template = $("#table-houses-template").html();
			var renderTemplate = Mustache.render(template, objects);
			$("#admin-table").append(renderTemplate);
		},
		error: function (response) {
			errorPopup("Something went wrong");
		}
	});
}

function deleteHouse(btnDelete) {
    $.ajax({
		type: "POST",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects/delete/"+btnDelete.id,

		success: function (objects) {
			$(btnDelete).closest("tr").remove();
		},
		error: function () {
			errorPopup("Something went wrong");
		}
	});
	$(btnDelete).closest("tr").remove();
}

function openEditHouse(btnEdit) {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects/"+btnEdit.id,

		success: function (object) {
			console.log(object)
            var template = $("#template-house-modal").html();
			var renderTemplate = Mustache.render(template, object);
			$("#edit-modal-content").html(renderTemplate);
		},
		error: function () {
			errorPopup("Something went wrong");
		}
	});
}

function submitHouseChanges() {
	var id = $("[name='id']").val();
	var street = $("[name='street']").val();
	var place = $("[name='place']").val();
	var zipcode = $("[name='zipcode']").val();
	var region = $("[name='region']").val();
	var housenumber = $("[name='housenumber']").val();
	var rooms = $("[name='rooms']").val();
	var bedrooms = $("[name='bedrooms']").val();
	var building_date = $("[name='building_date']").val();
	var placement = $("[name='placement']").val();
	var surface = $("[name='surface']").val();
	var type = $("[name='type']").val();
	var date = $("[name='date']").val();
	var sold = $("[name='sold']").val();
	var price = $("[name='price']").val();
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects/edit/"+id,
		data: {
			street: street,
			place: place,
			zipcode: zipcode,
			region: region,
			housenumber: housenumber,
			rooms: rooms,
			bedrooms: bedrooms,
			building_date: building_date,
			placement: placement,
			surface: surface,
			type: type,
			date: date,
			sold: sold,
			price: price,
		},

		success: function (message) {
			succesPopup("Succesfully edited house"+id);
		},
		error: function () {
			errorPopup("Something went wrong");
		}
	});
}

function createHouseChanges() {
	var street = $("[name='street']").val();
	var place = $("[name='place']").val();
	var zipcode = $("[name='zipcode']").val();
	var region = $("[name='region']").val();
	var housenumber = $("[name='housenumber']").val();
	var rooms = $("[name='rooms']").val();
	var bedrooms = $("[name='bedrooms']").val();
	var building_date = $("[name='building_date']").val();
	var placement = $("[name='placement']").val();
	var surface = $("[name='surface']").val();
	var type = $("[name='type']").val();
	var date = $("[name='date']").val();
	var sold = $("[name='sold']").val();
	var price = $("[name='price']").val();
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "http://127.0.0.1:8000/api/objects/create/",
		data: {
			street: street,
			place: place,
			zipcode: zipcode,
			region: region,
			housenumber: housenumber,
			rooms: rooms,
			bedrooms: bedrooms,
			building_date: building_date,
			placement: placement,
			surface: surface,
			type: type,
			date: date,
			sold: sold,
			price: price,
		},

		success: function (message) {
			succesPopup("Succesfully created a new house");
		},
		error: function () {
			errorPopup("Something went wrong");
		}
	});
}

function succesPopup(message,timeout){
	if(timeout == undefined){
	  timeout = 2.5
	}
	var a_message = "";
	a_message += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
	a_message +=  "<strong>Succes!</strong> "+message;
	a_message += "</div>";
	$('body').prepend(a_message)
  
	if(timeout != 0){
	  setTimeout(function () {
		$('.alert').alert('close')
	  }, timeout*1000);
	}
  }

function errorPopup(message,timeout){
	if(timeout == undefined){
	  timeout = 2.5
	}
	var a_message = "";
	a_message += "<div class='alert alert-danger alert-dismissible fade show' role='alert'>";
	a_message +=  "<strong>Error!</strong> "+message;
	a_message += "</div>";
	$('body').prepend(a_message)
  
	if(timeout != 0){
	  setTimeout(function () {
		$('.alert').alert('close')
		console.log('close')
	  }, timeout*1000);
	}
  }


$(document).ready(function () {
	getHouses();

	$(document).on('click', '.btn-delete', function () {
		deleteHouse(this);
	});

	$(document).on('click', '.btn-edit', function (event) {
		event.preventDefault();
		openEditHouse(this);
	});

	$(document).on('click', '#submit-changes', function (event) {
		event.preventDefault();
		submitHouseChanges(this);
	});

	$(document).on('click', '#create-house', function (event) {
		event.preventDefault();
		createHouseChanges(this);
	});
	
});