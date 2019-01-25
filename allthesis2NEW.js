$( document ).ready( function( ) {
	var rows = $( '.row' );
	rows.click( function( ) {
		var row = $( this );

		row.find( '.abstract' ).slideToggle( );
		row.toggleClass( 'opened' );

		rows.not( row ).removeClass( 'opened' );
		rows.not( row ).find( '.abstract' ).slideUp( );
	} );

	// $( '.abstract a:last-child' ).click( function( event ) {
	// 	event.preventDefault( );

	// 	var link = $( this );
	// 	var href = link.attr( 'href' );

	// 	var popup = link.parent( ).parent( ).parent( ).find( '.popup' );
	// 	popup.show( );

	// 	setTimeout( function( ) { document.location.href = href }, 2500 );
	// } );

	$( ".hide" ).hover(function() {
	  $( ".popup" ).show(); }, function() {
	  	$( ".popup" ).hide();
	  });



	// $( "a" ).hover(function() {
	//   $( ".hide" ).show(); }, function() {
	//   	$( ".hide" ).hide();
	//   });
	// $( "a" ).mouseout(function() {
	//   $( ".hide" ).hide();
	// });
});