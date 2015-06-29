$(document).on('ready', function() {

$( '#log' ).on('click', function(event){
	var coord = ('<img class ="marker" src="marker_360.png">')
	$(this).parent().append(coord)
	var x = event.pageX
	var y = event.pageY
	

	$('.marker').last().css({'left': x - 24, 'top': y - 42})
	})

$( '.map' ).on('click', '.marker', function(){

	$(this).remove()

	// $(this).text(prompt('Add a note.'))

	

	})
// $( '.map' ).on('hover', '.marker', function(){
// 	$(this).text()
// 	console.log($(this).text())
// })


})