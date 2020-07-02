$(document).ready(function() {
	$('.custom-file-input').on('change', function() {
		var files = $(this).prop('files');

		var names = Array.prototype.map.call(files, function(file) {
			return file.name;
		});

		$(this)
			.next('.custom-file-label')
			.html(names.length > 1 ? names.length + ' files' : names[0]);
	});
});
