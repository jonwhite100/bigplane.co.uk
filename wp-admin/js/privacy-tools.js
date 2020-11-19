/**
 * Interactions used by the User Privacy tools in WordPress.
 *
 * @output wp-admin/js/privacy-tools.js
 */

<<<<<<< HEAD
// Privacy request action handling.
jQuery( document ).ready( function( $ ) {
	var __ = wp.i18n.__,
		copiedNoticeTimeout;
=======
// Privacy request action handling
jQuery( document ).ready( function( $ ) {
	var strings = window.privacyToolsL10n || {};
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	function setActionState( $action, state ) {
		$action.children().addClass( 'hidden' );
		$action.children( '.' + state ).removeClass( 'hidden' );
	}

	function clearResultsAfterRow( $requestRow ) {
		$requestRow.removeClass( 'has-request-results' );

		if ( $requestRow.next().hasClass( 'request-results' ) ) {
			$requestRow.next().remove();
		}
	}

	function appendResultsAfterRow( $requestRow, classes, summaryMessage, additionalMessages ) {
		var itemList = '',
			resultRowClasses = 'request-results';

		clearResultsAfterRow( $requestRow );

		if ( additionalMessages.length ) {
			$.each( additionalMessages, function( index, value ) {
				itemList = itemList + '<li>' + value + '</li>';
			});
			itemList = '<ul>' + itemList + '</ul>';
		}

		$requestRow.addClass( 'has-request-results' );

		if ( $requestRow.hasClass( 'status-request-confirmed' ) ) {
			resultRowClasses = resultRowClasses + ' status-request-confirmed';
		}

		if ( $requestRow.hasClass( 'status-request-failed' ) ) {
			resultRowClasses = resultRowClasses + ' status-request-failed';
		}

		$requestRow.after( function() {
			return '<tr class="' + resultRowClasses + '"><th colspan="5">' +
				'<div class="notice inline notice-alt ' + classes + '">' +
				'<p>' + summaryMessage + '</p>' +
				itemList +
				'</div>' +
				'</td>' +
				'</tr>';
		});
	}

	$( '.export-personal-data-handle' ).click( function( event ) {
		var $this          = $( this ),
			$action        = $this.parents( '.export-personal-data' ),
			$requestRow    = $this.parents( 'tr' ),
<<<<<<< HEAD
			$progress      = $requestRow.find( '.export-progress' ),
			$rowActions    = $this.parents( '.row-actions' ),
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			requestID      = $action.data( 'request-id' ),
			nonce          = $action.data( 'nonce' ),
			exportersCount = $action.data( 'exporters-count' ),
			sendAsEmail    = $action.data( 'send-as-email' ) ? true : false;

		event.preventDefault();
		event.stopPropagation();

<<<<<<< HEAD
		$rowActions.addClass( 'processing' );

		$action.blur();
		clearResultsAfterRow( $requestRow );
		setExportProgress( 0 );

		function onExportDoneSuccess( zipUrl ) {
			var summaryMessage = __( 'The personal data export link for this user was sent.' );
=======
		$action.blur();
		clearResultsAfterRow( $requestRow );

		function onExportDoneSuccess( zipUrl ) {
			var summaryMessage = strings.emailSent;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

			setActionState( $action, 'export-personal-data-success' );

			appendResultsAfterRow( $requestRow, 'notice-success', summaryMessage, [] );
<<<<<<< HEAD

			if ( 'undefined' !== typeof zipUrl ) {
				window.location = zipUrl;
			} else if ( ! sendAsEmail ) {
				onExportFailure( __( 'No personal data export file was generated.' ) );
			}

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onExportFailure( errorMessage ) {
			var summaryMessage = __( 'An error occurred while attempting to export personal data.' );

			setActionState( $action, 'export-personal-data-failed' );

			if ( errorMessage ) {
				appendResultsAfterRow( $requestRow, 'notice-error', summaryMessage, [ errorMessage ] );
			}

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setExportProgress( exporterIndex ) {
			var progress       = ( exportersCount > 0 ? exporterIndex / exportersCount : 0 ),
				progressString = Math.round( progress * 100 ).toString() + '%';

			$progress.html( progressString );
=======
			$this.hide();
			
			if ( 'undefined' !== typeof zipUrl ) {
				window.location = zipUrl;
			} else if ( ! sendAsEmail ) {
				onExportFailure( strings.noExportFile );
			}
		}

		function onExportFailure( errorMessage ) {
			setActionState( $action, 'export-personal-data-failed' );
			if ( errorMessage ) {
				appendResultsAfterRow( $requestRow, 'notice-error', strings.exportError, [ errorMessage ] );
			}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		}

		function doNextExport( exporterIndex, pageIndex ) {
			$.ajax(
				{
					url: window.ajaxurl,
					data: {
						action: 'wp-privacy-export-personal-data',
						exporter: exporterIndex,
						id: requestID,
						page: pageIndex,
						security: nonce,
						sendAsEmail: sendAsEmail
					},
					method: 'post'
				}
			).done( function( response ) {
				var responseData = response.data;

				if ( ! response.success ) {
<<<<<<< HEAD
					// e.g. invalid request ID.
					setTimeout( function() { onExportFailure( response.data ); }, 500 );
=======

					// e.g. invalid request ID
					onExportFailure( response.data );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					return;
				}

				if ( ! responseData.done ) {
					setTimeout( doNextExport( exporterIndex, pageIndex + 1 ) );
				} else {
<<<<<<< HEAD
					setExportProgress( exporterIndex );
					if ( exporterIndex < exportersCount ) {
						setTimeout( doNextExport( exporterIndex + 1, 1 ) );
					} else {
						setTimeout( function() { onExportDoneSuccess( responseData.url ); }, 500 );
					}
				}
			}).fail( function( jqxhr, textStatus, error ) {
				// e.g. Nonce failure.
				setTimeout( function() { onExportFailure( error ); }, 500 );
			});
		}

		// And now, let's begin.
=======
					if ( exporterIndex < exportersCount ) {
						setTimeout( doNextExport( exporterIndex + 1, 1 ) );
					} else {
						onExportDoneSuccess( responseData.url );
					}
				}
			}).fail( function( jqxhr, textStatus, error ) {

				// e.g. Nonce failure
				onExportFailure( error );
			});
		}

		// And now, let's begin
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		setActionState( $action, 'export-personal-data-processing' );
		doNextExport( 1, 1 );
	});

	$( '.remove-personal-data-handle' ).click( function( event ) {
		var $this         = $( this ),
			$action       = $this.parents( '.remove-personal-data' ),
			$requestRow   = $this.parents( 'tr' ),
<<<<<<< HEAD
			$progress     = $requestRow.find( '.erasure-progress' ),
			$rowActions   = $this.parents( '.row-actions' ),
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			requestID     = $action.data( 'request-id' ),
			nonce         = $action.data( 'nonce' ),
			erasersCount  = $action.data( 'erasers-count' ),
			hasRemoved    = false,
			hasRetained   = false,
			messages      = [];

<<<<<<< HEAD
		event.preventDefault();
		event.stopPropagation();

		$rowActions.addClass( 'processing' );

		$action.blur();
		clearResultsAfterRow( $requestRow );
		setErasureProgress( 0 );

		function onErasureDoneSuccess() {
			var summaryMessage = __( 'No personal data was found for this user.' ),
				classes = 'notice-success';
=======
		event.stopPropagation();

		$action.blur();
		clearResultsAfterRow( $requestRow );

		function onErasureDoneSuccess() {
			var summaryMessage = strings.noDataFound;
			var classes = 'notice-success';
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

			setActionState( $action, 'remove-personal-data-success' );

			if ( false === hasRemoved ) {
				if ( false === hasRetained ) {
<<<<<<< HEAD
					summaryMessage = __( 'No personal data was found for this user.' );
				} else {
					summaryMessage = __( 'Personal data was found for this user but was not erased.' );
=======
					summaryMessage = strings.noDataFound;
				} else {
					summaryMessage = strings.noneRemoved;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					classes = 'notice-warning';
				}
			} else {
				if ( false === hasRetained ) {
<<<<<<< HEAD
					summaryMessage = __( 'All of the personal data found for this user was erased.' );
				} else {
					summaryMessage = __( 'Personal data was found for this user but some of the personal data found was not erased.' );
=======
					summaryMessage = strings.foundAndRemoved;
				} else {
					summaryMessage = strings.someNotRemoved;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					classes = 'notice-warning';
				}
			}
			appendResultsAfterRow( $requestRow, classes, summaryMessage, messages );
<<<<<<< HEAD

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onErasureFailure() {
			var summaryMessage = __( 'An error occurred while attempting to find and erase personal data.' );

			setActionState( $action, 'remove-personal-data-failed' );

			appendResultsAfterRow( $requestRow, 'notice-error', summaryMessage, [] );

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setErasureProgress( eraserIndex ) {
			var progress       = ( erasersCount > 0 ? eraserIndex / erasersCount : 0 ),
				progressString = Math.round( progress * 100 ).toString() + '%';

			$progress.html( progressString );
=======
			$this.hide();
		}

		function onErasureFailure() {
			setActionState( $action, 'remove-personal-data-failed' );
			appendResultsAfterRow( $requestRow, 'notice-error', strings.removalError, [] );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		}

		function doNextErasure( eraserIndex, pageIndex ) {
			$.ajax({
				url: window.ajaxurl,
				data: {
					action: 'wp-privacy-erase-personal-data',
					eraser: eraserIndex,
					id: requestID,
					page: pageIndex,
					security: nonce
				},
				method: 'post'
			}).done( function( response ) {
				var responseData = response.data;

				if ( ! response.success ) {
<<<<<<< HEAD
					setTimeout( function() { onErasureFailure(); }, 500 );
=======
					onErasureFailure();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					return;
				}
				if ( responseData.items_removed ) {
					hasRemoved = hasRemoved || responseData.items_removed;
				}
				if ( responseData.items_retained ) {
					hasRetained = hasRetained || responseData.items_retained;
				}
				if ( responseData.messages ) {
					messages = messages.concat( responseData.messages );
				}
				if ( ! responseData.done ) {
					setTimeout( doNextErasure( eraserIndex, pageIndex + 1 ) );
				} else {
<<<<<<< HEAD
					setErasureProgress( eraserIndex );
					if ( eraserIndex < erasersCount ) {
						setTimeout( doNextErasure( eraserIndex + 1, 1 ) );
					} else {
						setTimeout( function() { onErasureDoneSuccess(); }, 500 );
					}
				}
			}).fail( function() {
				setTimeout( function() { onErasureFailure(); }, 500 );
			});
		}

		// And now, let's begin.
=======
					if ( eraserIndex < erasersCount ) {
						setTimeout( doNextErasure( eraserIndex + 1, 1 ) );
					} else {
						onErasureDoneSuccess();
					}
				}
			}).fail( function() {
				onErasureFailure();
			});
		}

		// And now, let's begin
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		setActionState( $action, 'remove-personal-data-processing' );

		doNextErasure( 1, 1 );
	});

<<<<<<< HEAD
	// Privacy Policy page, copy action.
	$( document ).on( 'click', function( event ) {
		var $parent,
			$container,
			range,
			$target = $( event.target ),
			copiedNotice = $target.siblings( '.success' );

		clearTimeout( copiedNoticeTimeout );
=======
	// Privacy policy page, copy button.
	$( document ).on( 'click', function( event ) {
		var $target = $( event.target );
		var $parent, $container, range;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

		if ( $target.is( 'button.privacy-text-copy' ) ) {
			$parent = $target.parent().parent();
			$container = $parent.find( 'div.wp-suggested-text' );

			if ( ! $container.length ) {
				$container = $parent.find( 'div.policy-text' );
			}

			if ( $container.length ) {
				try {
<<<<<<< HEAD
					var documentPosition = document.documentElement.scrollTop,
						bodyPosition     = document.body.scrollTop;

					// Setup copy.
					window.getSelection().removeAllRanges();

					// Hide tutorial content to remove from copied content.
					range = document.createRange();
					$container.addClass( 'hide-privacy-policy-tutorial' );

					// Copy action.
=======
					window.getSelection().removeAllRanges();
					range = document.createRange();
					$container.addClass( 'hide-privacy-policy-tutorial' );

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					range.selectNodeContents( $container[0] );
					window.getSelection().addRange( range );
					document.execCommand( 'copy' );

<<<<<<< HEAD
					// Reset section.
					$container.removeClass( 'hide-privacy-policy-tutorial' );
					window.getSelection().removeAllRanges();

					// Return scroll position - see #49540.
					if ( documentPosition > 0 && documentPosition !== document.documentElement.scrollTop ) {
						document.documentElement.scrollTop = documentPosition;
					} else if ( bodyPosition > 0 && bodyPosition !== document.body.scrollTop ) {
						document.body.scrollTop = bodyPosition;
					}

					// Display and speak notice to indicate action complete.
					copiedNotice.addClass( 'visible' );
					wp.a11y.speak( __( 'The section has been copied to your clipboard.' ) );

					// Delay notice dismissal.
					copiedNoticeTimeout = setTimeout( function() {
						copiedNotice.removeClass( 'visible' );
					}, 3000 );
=======
					$container.removeClass( 'hide-privacy-policy-tutorial' );
					window.getSelection().removeAllRanges();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				} catch ( er ) {}
			}
		}
	});
});
<<<<<<< HEAD
=======

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
