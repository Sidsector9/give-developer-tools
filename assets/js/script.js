$( function() {

	let scope_button          = $( '#prefix-wrap__scope' ),
	    scopes_subtitle       = $( '#subtitle-scopes' ),
	    scopes_wrap           = $( '#scope-wrap' ),
	    copy_snippet          = $( '.copy-snippet' ),
	    snippet_status_update = $( '#snippet-status-update' );


	/**
	 * Display all the scopes
	 */
	scope_button.on( 'click', function() {
		$( this ).toggleClass( 'button-clicked' );
		scopes_subtitle.toggleClass( 'display-block' );
		scopes_wrap.toggleClass( 'display-grid' );
	})


	/**
	 * Copy snippet to clipboard.
	 */
	copy_snippet.on( 'click', function() {

		let that = $( this );

		if ( 'snippet-status-update' === that.next( '.copyable-snippet' ).prop( 'id' ) ) {
			that
				.next( '.copyable-snippet' )
				.text( 'Status Update: ' + ( moment().format( 'MMMM Do, dddd' ) ) )
				.select();

			document.execCommand( 'Copy' );

			that
			.find( '.copied' )
			.addClass( 'reveal' )
			.delay( 1000 )
			.queue( function( next ) {
				$( this ).removeClass( 'reveal' );
				next();
			});

			return;
		}

		that
			.next( '.copyable-snippet' )
			.select();

		document.execCommand( 'Copy' );

		that
			.find( '.copied' )
			.addClass( 'reveal' )
			.delay( 1000 )
			.queue( function( next ) {
				$( this ).removeClass( 'reveal' );
				next();
			});
	});
});