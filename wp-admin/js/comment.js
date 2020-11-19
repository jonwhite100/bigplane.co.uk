/**
 * @output wp-admin/js/comment.js
 */

<<<<<<< HEAD
/* global postboxes */
=======
/* global postboxes, commentL10n */
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

/**
 * Binds to the document ready event.
 *
 * @since 2.5.0
 *
 * @param {jQuery} $ The jQuery object.
 */
jQuery(document).ready( function($) {

	postboxes.add_postbox_toggles('comment');

	var $timestampdiv = $('#timestampdiv'),
		$timestamp = $( '#timestamp' ),
		stamp = $timestamp.html(),
		$timestampwrap = $timestampdiv.find( '.timestamp-wrap' ),
		$edittimestamp = $timestampdiv.siblings( 'a.edit-timestamp' );

	/**
	 * Adds event that opens the time stamp form if the form is hidden.
	 *
	 * @listens $edittimestamp:click
	 *
	 * @param {Event} event The event object.
<<<<<<< HEAD
	 * @return {void}
=======
	 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */
	$edittimestamp.click( function( event ) {
		if ( $timestampdiv.is( ':hidden' ) ) {
			// Slide down the form and set focus on the first field.
			$timestampdiv.slideDown( 'fast', function() {
				$( 'input, select', $timestampwrap ).first().focus();
			} );
			$(this).hide();
		}
		event.preventDefault();
	});

	/**
	 * Resets the time stamp values when the cancel button is clicked.
	 *
	 * @listens .cancel-timestamp:click
	 *
	 * @param {Event} event The event object.
<<<<<<< HEAD
	 * @return {void}
=======
	 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 */

	$timestampdiv.find('.cancel-timestamp').click( function( event ) {
		// Move focus back to the Edit link.
		$edittimestamp.show().focus();
		$timestampdiv.slideUp( 'fast' );
		$('#mm').val($('#hidden_mm').val());
		$('#jj').val($('#hidden_jj').val());
		$('#aa').val($('#hidden_aa').val());
		$('#hh').val($('#hidden_hh').val());
		$('#mn').val($('#hidden_mn').val());
		$timestamp.html( stamp );
		event.preventDefault();
	});

	/**
	 * Sets the time stamp values when the ok button is clicked.
	 *
	 * @listens .save-timestamp:click
	 *
	 * @param {Event} event The event object.
<<<<<<< HEAD
	 * @return {void}
	 */
	$timestampdiv.find('.save-timestamp').click( function( event ) { // Crazyhorse - multiple OK cancels.
=======
	 * @returns {void}
	 */
	$timestampdiv.find('.save-timestamp').click( function( event ) { // crazyhorse - multiple ok cancels
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		var aa = $('#aa').val(), mm = $('#mm').val(), jj = $('#jj').val(), hh = $('#hh').val(), mn = $('#mn').val(),
			newD = new Date( aa, mm - 1, jj, hh, mn );

		event.preventDefault();

		if ( newD.getFullYear() != aa || (1 + newD.getMonth()) != mm || newD.getDate() != jj || newD.getMinutes() != mn ) {
			$timestampwrap.addClass( 'form-invalid' );
			return;
		} else {
			$timestampwrap.removeClass( 'form-invalid' );
		}

		$timestamp.html(
<<<<<<< HEAD
			wp.i18n.__( 'Submitted on:' ) + ' <b>' +
			/* translators: 1: Month, 2: Day, 3: Year, 4: Hour, 5: Minute. */
			wp.i18n.__( '%1$s %2$s, %3$s at %4$s:%5$s' )
=======
			commentL10n.submittedOn + ' <b>' +
			commentL10n.dateFormat
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				.replace( '%1$s', $( 'option[value="' + mm + '"]', '#mm' ).attr( 'data-text' ) )
				.replace( '%2$s', parseInt( jj, 10 ) )
				.replace( '%3$s', aa )
				.replace( '%4$s', ( '00' + hh ).slice( -2 ) )
				.replace( '%5$s', ( '00' + mn ).slice( -2 ) ) +
				'</b> '
		);

		// Move focus back to the Edit link.
		$edittimestamp.show().focus();
		$timestampdiv.slideUp( 'fast' );
	});
});
