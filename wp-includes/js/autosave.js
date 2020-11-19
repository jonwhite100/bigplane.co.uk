/**
 * @output wp-includes/js/autosave.js
 */

/* global tinymce, wpCookies, autosaveL10n, switchEditors */
<<<<<<< HEAD
// Back-compat.
=======
// Back-compat
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
window.autosave = function() {
	return true;
};

/**
 * Adds autosave to the window object on dom ready.
 *
 * @since 3.9.0
 *
 * @param {jQuery} $ jQuery object.
 * @param {window} The window object.
 *
 */
( function( $, window ) {
	/**
	 * Auto saves the post.
	 *
	 * @since 3.9.0
	 *
<<<<<<< HEAD
	 * @return {Object}
=======
	 * @returns {Object}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 * 	{{
	 * 		getPostData: getPostData,
	 * 		getCompareString: getCompareString,
	 * 		disableButtons: disableButtons,
	 * 		enableButtons: enableButtons,
	 * 		local: ({hasStorage, getSavedPostData, save, suspend, resume}|*),
	 * 		server: ({tempBlockSave, triggerSave, postChanged, suspend, resume}|*)}
	 * 	}
	 * 	The object with all functions for autosave.
	 */
	function autosave() {
		var initialCompareString,
			lastTriggerSave = 0,
			$document = $(document);

		/**
		 * Returns the data saved in both local and remote autosave.
		 *
		 * @since 3.9.0
		 *
		 * @param {string} type The type of autosave either local or remote.
		 *
<<<<<<< HEAD
		 * @return {Object} Object containing the post data.
=======
		 * @returns {Object} Object containing the post data.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		function getPostData( type ) {
			var post_name, parent_id, data,
				time = ( new Date() ).getTime(),
				cats = [],
				editor = getEditor();

			// Don't run editor.save() more often than every 3 seconds.
			// It is resource intensive and might slow down typing in long posts on slow devices.
			if ( editor && editor.isDirty() && ! editor.isHidden() && time - 3000 > lastTriggerSave ) {
				editor.save();
				lastTriggerSave = time;
			}

			data = {
				post_id: $( '#post_ID' ).val() || 0,
				post_type: $( '#post_type' ).val() || '',
				post_author: $( '#post_author' ).val() || '',
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			if ( type === 'local' ) {
				return data;
			}

			$( 'input[id^="in-category-"]:checked' ).each( function() {
				cats.push( this.value );
			});
			data.catslist = cats.join(',');

			if ( post_name = $( '#post_name' ).val() ) {
				data.post_name = post_name;
			}

			if ( parent_id = $( '#parent_id' ).val() ) {
				data.parent_id = parent_id;
			}

			if ( $( '#comment_status' ).prop( 'checked' ) ) {
				data.comment_status = 'open';
			}

			if ( $( '#ping_status' ).prop( 'checked' ) ) {
				data.ping_status = 'open';
			}

			if ( $( '#auto_draft' ).val() === '1' ) {
				data.auto_draft = '1';
			}

			return data;
		}

		/**
		 * Concatenates the title, content and excerpt. This is used to track changes
		 * when auto-saving.
		 *
		 * @since 3.9.0
		 *
		 * @param {Object} postData The object containing the post data.
		 *
<<<<<<< HEAD
		 * @return {string} A concatenated string with title, content and excerpt.
=======
		 * @returns {string} A concatenated string with title, content and excerpt.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		function getCompareString( postData ) {
			if ( typeof postData === 'object' ) {
				return ( postData.post_title || '' ) + '::' + ( postData.content || '' ) + '::' + ( postData.excerpt || '' );
			}

			return ( $('#title').val() || '' ) + '::' + ( $('#content').val() || '' ) + '::' + ( $('#excerpt').val() || '' );
		}

		/**
		 * Disables save buttons.
		 *
		 * @since 3.9.0
		 *
<<<<<<< HEAD
		 * @return {void}
=======
		 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		function disableButtons() {
			$document.trigger('autosave-disable-buttons');

			// Re-enable 5 sec later. Just gives autosave a head start to avoid collisions.
			setTimeout( enableButtons, 5000 );
		}

		/**
		 * Enables save buttons.
		 *
		 * @since 3.9.0
		 *
<<<<<<< HEAD
		 * @return {void}
=======
		 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		function enableButtons() {
			$document.trigger( 'autosave-enable-buttons' );
		}

		/**
		 * Gets the content editor.
		 *
		 * @since 4.6.0
		 *
<<<<<<< HEAD
		 * @return {boolean|*} Returns either false if the editor is undefined,
		 *                     or the instance of the content editor.
=======
		 * @returns {boolean|*} Returns either false if the editor is undefined,
		 * 						or the instance of the content editor.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		function getEditor() {
			return typeof tinymce !== 'undefined' && tinymce.get('content');
		}

		/**
		 * Autosave in localStorage.
		 *
		 * @since 3.9.0
		 *
<<<<<<< HEAD
		 * @return {
=======
		 * @returns {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 * {
		 * 	hasStorage: *,
		 * 	getSavedPostData: getSavedPostData,
		 * 	save: save,
		 * 	suspend: suspend,
		 * 	resume: resume
		 * 	}
		 * }
		 * The object with all functions for local storage autosave.
		 */
		function autosaveLocal() {
			var blog_id, post_id, hasStorage, intervalTimer,
				lastCompareString,
				isSuspended = false;

			/**
			 * Checks if the browser supports sessionStorage and it's not disabled.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {boolean} True if the sessionStorage is supported and enabled.
=======
			 * @returns {boolean} True if the sessionStorage is supported and enabled.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function checkStorage() {
				var test = Math.random().toString(),
					result = false;

				try {
					window.sessionStorage.setItem( 'wp-test', test );
					result = window.sessionStorage.getItem( 'wp-test' ) === test;
					window.sessionStorage.removeItem( 'wp-test' );
				} catch(e) {}

				hasStorage = result;
				return result;
			}

			/**
			 * Initializes the local storage.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                          containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id.
=======
			 * @returns {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                           containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				if ( hasStorage && blog_id ) {
					stored_obj = sessionStorage.getItem( 'wp-autosave-' + blog_id );

					if ( stored_obj ) {
						stored_obj = JSON.parse( stored_obj );
					} else {
						stored_obj = {};
					}
				}

				return stored_obj;
			}

			/**
			 * Sets the storage for this blog. Confirms that the data was saved
			 * successfully.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {boolean} True if the data was saved successfully, false if it wasn't saved.
=======
			 * @returns {boolean} True if the data was saved successfully, false if it wasn't saved.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function setStorage( stored_obj ) {
				var key;

				if ( hasStorage && blog_id ) {
					key = 'wp-autosave-' + blog_id;
					sessionStorage.setItem( key, JSON.stringify( stored_obj ) );
					return sessionStorage.getItem( key ) !== null;
				}

				return false;
			}

			/**
			 * Gets the saved post data for the current post.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {boolean|Object} False if no storage or no data or the postData as an Object.
=======
			 * @returns {boolean|Object} False if no storage or no data or the postData as an Object.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function getSavedPostData() {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				return stored[ 'post_' + post_id ] || false;
			}

			/**
			 * Sets (save or delete) post data in the storage.
			 *
			 * If stored_data evaluates to 'false' the storage key for the current post will be removed.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object|boolean|null} stored_data The post data to store or null/false/empty to delete the key.
			 *
<<<<<<< HEAD
			 * @return {boolean} True if data is stored, false if data was removed.
=======
			 * @returns {boolean} True if data is stored, false if data was removed.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function setData( stored_data ) {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				if ( stored_data ) {
					stored[ 'post_' + post_id ] = stored_data;
				} else if ( stored.hasOwnProperty( 'post_' + post_id ) ) {
					delete stored[ 'post_' + post_id ];
				} else {
					return false;
				}

				return setStorage( stored );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Saves post data for the current post.
			 *
<<<<<<< HEAD
			 * Runs on a 15 seconds interval, saves when there are differences in the post title or content.
=======
			 * Runs on a 15 sec. interval, saves when there are differences in the post title or content.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 * When the optional data is provided, updates the last saved post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data for saving, minimum 'post_title' and 'content'.
			 *
<<<<<<< HEAD
			 * @return {boolean} Returns true when data has been saved, otherwise it returns false.
=======
			 * @returns {boolean} Returns true when data has been saved, otherwise it returns false.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function save( data ) {
				var postData, compareString,
					result = false;

				if ( isSuspended || ! hasStorage ) {
					return false;
				}

				if ( data ) {
					postData = getSavedPostData() || {};
					$.extend( postData, data );
				} else {
					postData = getPostData('local');
				}

				compareString = getCompareString( postData );

				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// If the content, title and excerpt did not change since the last save, don't save again.
				if ( compareString === lastCompareString ) {
					return false;
				}

				postData.save_time = ( new Date() ).getTime();
				postData.status = $( '#post_status' ).val() || '';
				result = setData( postData );

				if ( result ) {
					lastCompareString = compareString;
				}

				return result;
			}

			/**
			 * Initializes the auto save function.
			 *
			 * Checks whether the editor is active or not to use the editor events
			 * to autosave, or uses the values from the elements to autosave.
			 *
			 * Runs on DOM ready.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function run() {
				post_id = $('#post_ID').val() || 0;

				// Check if the local post data is different than the loaded post data.
				if ( $( '#wp-content-wrap' ).hasClass( 'tmce-active' ) ) {

<<<<<<< HEAD
					/*
					 * If TinyMCE loads first, check the post 1.5 seconds after it is ready.
					 * By this time the content has been loaded in the editor and 'saved' to the textarea.
					 * This prevents false positives.
					 */
=======
					// If TinyMCE loads first, check the post 1.5 sec. after it is ready.
					// By this time the content has been loaded in the editor and 'saved' to the textarea.
					// This prevents false positives.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					$document.on( 'tinymce-editor-init.autosave', function() {
						window.setTimeout( function() {
							checkPost();
						}, 1500 );
					});
				} else {
					checkPost();
				}

<<<<<<< HEAD
				// Save every 15 seconds.
=======
				// Save every 15 sec.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				intervalTimer = window.setInterval( save, 15000 );

				$( 'form#post' ).on( 'submit.autosave-local', function() {
					var editor = getEditor(),
						post_id = $('#post_ID').val() || 0;

					if ( editor && ! editor.isHidden() ) {

						// Last onSubmit event in the editor, needs to run after the content has been moved to the textarea.
						editor.on( 'submit', function() {
							save({
								post_title: $( '#title' ).val() || '',
								content: $( '#content' ).val() || '',
								excerpt: $( '#excerpt' ).val() || ''
							});
						});
					} else {
						save({
							post_title: $( '#title' ).val() || '',
							content: $( '#content' ).val() || '',
							excerpt: $( '#excerpt' ).val() || ''
						});
					}

					var secure = ( 'https:' === window.location.protocol );
					wpCookies.set( 'wp-saving-post', post_id + '-check', 24 * 60 * 60, false, false, secure );
				});
			}

			/**
			 * Compares 2 strings. Removes whitespaces in the strings before comparing them.
			 *
			 * @since 3.9.0
			 *
			 * @param {string} str1 The first string.
			 * @param {string} str2 The second string.
<<<<<<< HEAD
			 * @return {boolean} True if the strings are the same.
=======
			 * @returns {boolean} True if the strings are the same.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function compare( str1, str2 ) {
				function removeSpaces( string ) {
					return string.toString().replace(/[\x20\t\r\n\f]+/g, '');
				}

				return ( removeSpaces( str1 || '' ) === removeSpaces( str2 || '' ) );
			}

			/**
			 * Checks if the saved data for the current post (if any) is different than the
			 * loaded post data on the screen.
			 *
			 * Shows a standard message letting the user restore the post data if different.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function checkPost() {
				var content, post_title, excerpt, $notice,
					postData = getSavedPostData(),
					cookie = wpCookies.get( 'wp-saving-post' ),
					$newerAutosaveNotice = $( '#has-newer-autosave' ).parent( '.notice' ),
					$headerEnd = $( '.wp-header-end' );

				if ( cookie === post_id + '-saved' ) {
					wpCookies.remove( 'wp-saving-post' );
<<<<<<< HEAD
					// The post was saved properly, remove old data and bail.
=======
					// The post was saved properly, remove old data and bail
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					setData( false );
					return;
				}

				if ( ! postData ) {
					return;
				}

				content = $( '#content' ).val() || '';
				post_title = $( '#title' ).val() || '';
				excerpt = $( '#excerpt' ).val() || '';

				if ( compare( content, postData.content ) && compare( post_title, postData.post_title ) &&
					compare( excerpt, postData.excerpt ) ) {

					return;
				}

				/*
				 * If '.wp-header-end' is found, append the notices after it otherwise
				 * after the first h1 or h2 heading found within the main content.
				 */
				if ( ! $headerEnd.length ) {
					$headerEnd = $( '.wrap h1, .wrap h2' ).first();
				}

				$notice = $( '#local-storage-notice' )
					.insertAfter( $headerEnd )
					.addClass( 'notice-warning' );

				if ( $newerAutosaveNotice.length ) {

					// If there is a "server" autosave notice, hide it.
					// The data in the session storage is either the same or newer.
					$newerAutosaveNotice.slideUp( 150, function() {
						$notice.slideDown( 150 );
					});
				} else {
					$notice.slideDown( 200 );
				}

				$notice.find( '.restore-backup' ).on( 'click.autosave-local', function() {
					restorePost( postData );
					$notice.fadeTo( 250, 0, function() {
						$notice.slideUp( 150 );
					});
				});
			}

			/**
			 * Restores the current title, content and excerpt from postData.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} postData The object containing all post data.
			 *
<<<<<<< HEAD
			 * @return {boolean} True if the post is restored.
=======
			 * @returns {boolean} True if the post is restored.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function restorePost( postData ) {
				var editor;

				if ( postData ) {
<<<<<<< HEAD
					// Set the last saved data.
=======
					// Set the last saved data
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					lastCompareString = getCompareString( postData );

					if ( $( '#title' ).val() !== postData.post_title ) {
						$( '#title' ).focus().val( postData.post_title || '' );
					}

					$( '#excerpt' ).val( postData.excerpt || '' );
					editor = getEditor();

					if ( editor && ! editor.isHidden() && typeof switchEditors !== 'undefined' ) {
						if ( editor.settings.wpautop && postData.content ) {
							postData.content = switchEditors.wpautop( postData.content );
						}

<<<<<<< HEAD
						// Make sure there's an undo level in the editor.
=======
						// Make sure there's an undo level in the editor
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						editor.undoManager.transact( function() {
							editor.setContent( postData.content || '' );
							editor.nodeChanged();
						});
					} else {

<<<<<<< HEAD
						// Make sure the Text editor is selected.
=======
						// Make sure the Text editor is selected
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						$( '#content-html' ).click();
						$( '#content' ).focus();

						// Using document.execCommand() will let the user undo.
						document.execCommand( 'selectAll' );
						document.execCommand( 'insertText', false, postData.content || '' );
					}

					return true;
				}

				return false;
			}

			blog_id = typeof window.autosaveL10n !== 'undefined' && window.autosaveL10n.blog_id;

<<<<<<< HEAD
			/*
			 * Check if the browser supports sessionStorage and it's not disabled,
			 * then initialize and run checkPost().
			 * Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
			 */
=======
			// Check if the browser supports sessionStorage and it's not disabled,
			// then initialize and run checkPost().
			// Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			if ( checkStorage() && blog_id && ( $('#content').length || $('#excerpt').length ) ) {
				$document.ready( run );
			}

			return {
				hasStorage: hasStorage,
				getSavedPostData: getSavedPostData,
				save: save,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Auto saves the post on the server.
		 *
		 * @since 3.9.0
		 *
<<<<<<< HEAD
		 * @return {Object} {
=======
		 * @returns {Object} {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 * 	{
		 * 		tempBlockSave: tempBlockSave,
		 * 		triggerSave: triggerSave,
		 * 		postChanged: postChanged,
		 * 		suspend: suspend,
		 * 		resume: resume
		 * 		}
		 * 	} The object all functions for autosave.
		 */
		function autosaveServer() {
			var _blockSave, _blockSaveTimer, previousCompareString, lastCompareString,
				nextRun = 0,
				isSuspended = false;


			/**
			 * Blocks saving for the next 10 seconds.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function tempBlockSave() {
				_blockSave = true;
				window.clearTimeout( _blockSaveTimer );

				_blockSaveTimer = window.setTimeout( function() {
					_blockSave = false;
				}, 10000 );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Triggers the autosave with the post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data.
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function response( data ) {
				_schedule();
				_blockSave = false;
				lastCompareString = previousCompareString;
				previousCompareString = '';

				$document.trigger( 'after-autosave', [data] );
				enableButtons();

				if ( data.success ) {
<<<<<<< HEAD
					// No longer an auto-draft.
=======
					// No longer an auto-draft
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					$( '#auto_draft' ).val('');
				}
			}

			/**
			 * Saves immediately.
			 *
			 * Resets the timing and tells heartbeat to connect now.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function triggerSave() {
				nextRun = 0;
				wp.heartbeat.connectNow();
			}

			/**
			 * Checks if the post content in the textarea has changed since page load.
			 *
			 * This also happens when TinyMCE is active and editor.save() is triggered by
			 * wp.autosave.getPostData().
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the post has been changed.
			 */
			function postChanged() {
				return getCompareString() !== initialCompareString;
			}

			/**
			 * Checks if the post can be saved or not.
			 *
			 * If the post hasn't changed or it cannot be updated,
			 * because the autosave is blocked or suspended, the function returns false.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {Object} Returns the post data.
=======
			 * @returns {Object} Returns the post data.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function save() {
				var postData, compareString;

<<<<<<< HEAD
				// window.autosave() used for back-compat.
=======
				// window.autosave() used for back-compat
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				if ( isSuspended || _blockSave || ! window.autosave() ) {
					return false;
				}

				if ( ( new Date() ).getTime() < nextRun ) {
					return false;
				}

				postData = getPostData();
				compareString = getCompareString( postData );

<<<<<<< HEAD
				// First check.
=======
				// First check
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

<<<<<<< HEAD
				// No change.
=======
				// No change
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				if ( compareString === lastCompareString ) {
					return false;
				}

				previousCompareString = compareString;
				tempBlockSave();
				disableButtons();

				$document.trigger( 'wpcountwords', [ postData.content ] )
					.trigger( 'before-autosave', [ postData ] );

				postData._wpnonce = $( '#_wpnonce' ).val() || '';

				return postData;
			}

			/**
			 * Sets the next run, based on the autosave interval.
			 *
			 * @private
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			function _schedule() {
				nextRun = ( new Date() ).getTime() + ( autosaveL10n.autosaveInterval * 1000 ) || 60000;
			}

			/**
			 * Sets the autosaveData on the autosave heartbeat.
			 *
			 * @since 3.9.0
			 *
<<<<<<< HEAD
			 * @return {void}
=======
			 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			 */
			$document.on( 'heartbeat-send.autosave', function( event, data ) {
				var autosaveData = save();

				if ( autosaveData ) {
					data.wp_autosave = autosaveData;
				}

				/**
				 * Triggers the autosave of the post with the autosave data on the autosave
				 * heartbeat.
				 *
				 * @since 3.9.0
				 *
<<<<<<< HEAD
				 * @return {void}
=======
				 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				 */
			}).on( 'heartbeat-tick.autosave', function( event, data ) {
				if ( data.wp_autosave ) {
					response( data.wp_autosave );
				}
				/**
				 * Disables buttons and throws a notice when the connection is lost.
				 *
				 * @since 3.9.0
				 *
<<<<<<< HEAD
				 * @return {void}
=======
				 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				 */
			}).on( 'heartbeat-connection-lost.autosave', function( event, error, status ) {

				// When connection is lost, keep user from submitting changes.
				if ( 'timeout' === error || 603 === status ) {
					var $notice = $('#lost-connection-notice');

					if ( ! wp.autosave.local.hasStorage ) {
						$notice.find('.hide-if-no-sessionstorage').hide();
					}

					$notice.show();
					disableButtons();
				}

				/**
				 * Enables buttons when the connection is restored.
				 *
				 * @since 3.9.0
				 *
<<<<<<< HEAD
				 * @return {void}
=======
				 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				 */
			}).on( 'heartbeat-connection-restored.autosave', function() {
				$('#lost-connection-notice').hide();
				enableButtons();
			}).ready( function() {
				_schedule();
			});

			return {
				tempBlockSave: tempBlockSave,
				triggerSave: triggerSave,
				postChanged: postChanged,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Sets the autosave time out.
		 *
		 * Wait for TinyMCE to initialize plus 1 second. for any external css to finish loading,
		 * then save to the textarea before setting initialCompareString.
		 * This avoids any insignificant differences between the initial textarea content and the content
		 * extracted from the editor.
		 *
		 * @since 3.9.0
		 *
<<<<<<< HEAD
		 * @return {void}
=======
		 * @returns {void}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$document.on( 'tinymce-editor-init.autosave', function( event, editor ) {
			if ( editor.id === 'content' ) {
				window.setTimeout( function() {
					editor.save();
					initialCompareString = getCompareString();
				}, 1000 );
			}
		}).ready( function() {

<<<<<<< HEAD
			// Set the initial compare string in case TinyMCE is not used or not loaded first.
=======
			// Set the initial compare string in case TinyMCE is not used or not loaded first
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			initialCompareString = getCompareString();
		});

		return {
			getPostData: getPostData,
			getCompareString: getCompareString,
			disableButtons: disableButtons,
			enableButtons: enableButtons,
			local: autosaveLocal(),
			server: autosaveServer()
		};
	}

	/** @namespace wp */
	window.wp = window.wp || {};
	window.wp.autosave = autosave();

}( jQuery, window ));
