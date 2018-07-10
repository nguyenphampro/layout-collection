function getUIMG() {
	$.get("/getimg", function (data) {
		var rand = JSON.parse(data)
		var temp = [], lis = []
		for (var key in rand) {
			if (rand.hasOwnProperty(key)) {
				lis.push('<option value="'+key+'">'+ key.charAt(0).toUpperCase() + key.slice(1) + '</option>')
				temp.push('<a href="/view/'+ key + '" class="list-group-item list-group-item-action">'+ key.charAt(0).toUpperCase() + key.slice(1) + '</a>')
			}
		}
		$('#imgPath').append(lis);
		$('#main-container').html(temp);
	})
}

$(document).ready(function () {
	getUIMG()
});

$('#formAddComponent button').click(function (e) {
	var data = new FormData($('#formAddComponent')[0]);
	$.ajax({
		url: '/upload',
		type: 'POST',
		contentType: false,
		processData: false,
		cache: false,
		data: data,
		success: function () {
			alert('Upload hoàn tất')
			$('#formAddComponent')[0].reset();
		},
		error: function () {
			alert('Lỗi khi upload!');
		}
	});
	return false;
})


function IMGResponsive() {
	// Set BG Resposive
	$('[bg-img]').each(function () {
		var bgimg = $(this).attr('bg-img');
		var pos = $(this).attr('bg-pos');
		var size = $(this).attr('bg-size');
		if (pos && pos.length > 0) {
			$(this).css({
				"background-position": pos
			});
		} else {
			$(this).css({
				"background-position": "center center"
			});
		}
		if (size && size.length > 0) {
			$(this).css({
				"background-size": size
			});
		} else {
			$(this).css({
				"background-size": "cover"
			});
		}
		$(this).css({
			"background-image": "url(" + bgimg + ")"
		});
	});
}