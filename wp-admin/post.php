<?php
/**
 * Edit post administration panel.
 *
 * Manage Post actions: post, edit, delete, etc.
 *
 * @package WordPress
 * @subpackage Administration
 */

/** WordPress Administration Bootstrap */
<<<<<<< HEAD
require_once __DIR__ . '/admin.php';
=======
require_once( dirname( __FILE__ ) . '/admin.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

$parent_file  = 'edit.php';
$submenu_file = 'edit.php';

wp_reset_vars( array( 'action' ) );

if ( isset( $_GET['post'] ) && isset( $_POST['post_ID'] ) && (int) $_GET['post'] !== (int) $_POST['post_ID'] ) {
	wp_die( __( 'A post ID mismatch has been detected.' ), __( 'Sorry, you are not allowed to edit this item.' ), 400 );
} elseif ( isset( $_GET['post'] ) ) {
	$post_id = (int) $_GET['post'];
} elseif ( isset( $_POST['post_ID'] ) ) {
	$post_id = (int) $_POST['post_ID'];
} else {
	$post_id = 0;
}
$post_ID = $post_id;

/**
 * @global string  $post_type
 * @global object  $post_type_object
 * @global WP_Post $post             Global post object.
 */
global $post_type, $post_type_object, $post;

if ( $post_id ) {
	$post = get_post( $post_id );
}

if ( $post ) {
	$post_type        = $post->post_type;
	$post_type_object = get_post_type_object( $post_type );
}

if ( isset( $_POST['post_type'] ) && $post && $post_type !== $_POST['post_type'] ) {
	wp_die( __( 'A post type mismatch has been detected.' ), __( 'Sorry, you are not allowed to edit this item.' ), 400 );
}

if ( isset( $_POST['deletepost'] ) ) {
	$action = 'delete';
<<<<<<< HEAD
} elseif ( isset( $_POST['wp-preview'] ) && 'dopreview' === $_POST['wp-preview'] ) {
=======
} elseif ( isset( $_POST['wp-preview'] ) && 'dopreview' == $_POST['wp-preview'] ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	$action = 'preview';
}

$sendback = wp_get_referer();
if ( ! $sendback ||
<<<<<<< HEAD
	false !== strpos( $sendback, 'post.php' ) ||
	false !== strpos( $sendback, 'post-new.php' ) ) {
	if ( 'attachment' === $post_type ) {
=======
	strpos( $sendback, 'post.php' ) !== false ||
	strpos( $sendback, 'post-new.php' ) !== false ) {
	if ( 'attachment' == $post_type ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		$sendback = admin_url( 'upload.php' );
	} else {
		$sendback = admin_url( 'edit.php' );
		if ( ! empty( $post_type ) ) {
			$sendback = add_query_arg( 'post_type', $post_type, $sendback );
		}
	}
} else {
	$sendback = remove_query_arg( array( 'trashed', 'untrashed', 'deleted', 'ids' ), $sendback );
}

switch ( $action ) {
	case 'post-quickdraft-save':
<<<<<<< HEAD
		// Check nonce and capabilities.
		$nonce     = $_REQUEST['_wpnonce'];
		$error_msg = false;

		// For output of the Quick Draft dashboard widget.
=======
		// Check nonce and capabilities
		$nonce     = $_REQUEST['_wpnonce'];
		$error_msg = false;

		// For output of the quickdraft dashboard widget
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		require_once ABSPATH . 'wp-admin/includes/dashboard.php';

		if ( ! wp_verify_nonce( $nonce, 'add-post' ) ) {
			$error_msg = __( 'Unable to submit this form, please refresh and try again.' );
		}

		if ( ! current_user_can( get_post_type_object( 'post' )->cap->create_posts ) ) {
			exit;
		}

		if ( $error_msg ) {
			return wp_dashboard_quick_press( $error_msg );
		}

		$post = get_post( $_REQUEST['post_ID'] );
		check_admin_referer( 'add-' . $post->post_type );

		$_POST['comment_status'] = get_default_comment_status( $post->post_type );
		$_POST['ping_status']    = get_default_comment_status( $post->post_type, 'pingback' );

<<<<<<< HEAD
		// Wrap Quick Draft content in the Paragraph block.
		if ( false === strpos( $_POST['content'], '<!-- wp:paragraph -->' ) ) {
			$_POST['content'] = sprintf(
				'<!-- wp:paragraph -->%s<!-- /wp:paragraph -->',
				str_replace( array( "\r\n", "\r", "\n" ), '<br />', $_POST['content'] )
			);
		}

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		edit_post();
		wp_dashboard_quick_press();
		exit;

	case 'postajaxpost':
	case 'post':
		check_admin_referer( 'add-' . $post_type );
<<<<<<< HEAD
		$post_id = 'postajaxpost' === $action ? edit_post() : write_post();
		redirect_post( $post_id );
		exit;
=======
		$post_id = 'postajaxpost' == $action ? edit_post() : write_post();
		redirect_post( $post_id );
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'edit':
		$editing = true;

		if ( empty( $post_id ) ) {
			wp_redirect( admin_url( 'post.php' ) );
<<<<<<< HEAD
			exit;
=======
			exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		}

		if ( ! $post ) {
			wp_die( __( 'You attempted to edit an item that doesn&#8217;t exist. Perhaps it was deleted?' ) );
		}

		if ( ! $post_type_object ) {
			wp_die( __( 'Invalid post type.' ) );
		}

<<<<<<< HEAD
		if ( ! in_array( $typenow, get_post_types( array( 'show_ui' => true ) ), true ) ) {
=======
		if ( ! in_array( $typenow, get_post_types( array( 'show_ui' => true ) ) ) ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			wp_die( __( 'Sorry, you are not allowed to edit posts in this post type.' ) );
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to edit this item.' ) );
		}

<<<<<<< HEAD
		if ( 'trash' === $post->post_status ) {
=======
		if ( 'trash' == $post->post_status ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			wp_die( __( 'You can&#8217;t edit this item because it is in the Trash. Please restore it and try again.' ) );
		}

		if ( ! empty( $_GET['get-post-lock'] ) ) {
			check_admin_referer( 'lock-post_' . $post_id );
			wp_set_post_lock( $post_id );
			wp_redirect( get_edit_post_link( $post_id, 'url' ) );
<<<<<<< HEAD
			exit;
		}

		$post_type = $post->post_type;
		if ( 'post' === $post_type ) {
			$parent_file   = 'edit.php';
			$submenu_file  = 'edit.php';
			$post_new_file = 'post-new.php';
		} elseif ( 'attachment' === $post_type ) {
=======
			exit();
		}

		$post_type = $post->post_type;
		if ( 'post' == $post_type ) {
			$parent_file   = 'edit.php';
			$submenu_file  = 'edit.php';
			$post_new_file = 'post-new.php';
		} elseif ( 'attachment' == $post_type ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			$parent_file   = 'upload.php';
			$submenu_file  = 'upload.php';
			$post_new_file = 'media-new.php';
		} else {
<<<<<<< HEAD
			if ( isset( $post_type_object ) && $post_type_object->show_in_menu && true !== $post_type_object->show_in_menu ) {
=======
			if ( isset( $post_type_object ) && $post_type_object->show_in_menu && $post_type_object->show_in_menu !== true ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				$parent_file = $post_type_object->show_in_menu;
			} else {
				$parent_file = "edit.php?post_type=$post_type";
			}
			$submenu_file  = "edit.php?post_type=$post_type";
			$post_new_file = "post-new.php?post_type=$post_type";
		}

		$title = $post_type_object->labels->edit_item;

		/**
		 * Allows replacement of the editor.
		 *
		 * @since 4.9.0
		 *
<<<<<<< HEAD
		 * @param bool    $replace Whether to replace the editor. Default false.
		 * @param WP_Post $post    Post object.
		 */
		if ( true === apply_filters( 'replace_editor', false, $post ) ) {
=======
		 * @param boolean      Whether to replace the editor. Default false.
		 * @param object $post Post object.
		 */
		if ( apply_filters( 'replace_editor', false, $post ) === true ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			break;
		}

		if ( use_block_editor_for_post( $post ) ) {
<<<<<<< HEAD
			require ABSPATH . 'wp-admin/edit-form-blocks.php';
=======
			include( ABSPATH . 'wp-admin/edit-form-blocks.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			break;
		}

		if ( ! wp_check_post_lock( $post->ID ) ) {
			$active_post_lock = wp_set_post_lock( $post->ID );

			if ( 'attachment' !== $post_type ) {
				wp_enqueue_script( 'autosave' );
			}
		}

		$post = get_post( $post_id, OBJECT, 'edit' );

		if ( post_type_supports( $post_type, 'comments' ) ) {
			wp_enqueue_script( 'admin-comments' );
			enqueue_comment_hotkeys_js();
		}

<<<<<<< HEAD
		require ABSPATH . 'wp-admin/edit-form-advanced.php';
=======
		include( ABSPATH . 'wp-admin/edit-form-advanced.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

		break;

	case 'editattachment':
		check_admin_referer( 'update-post_' . $post_id );

<<<<<<< HEAD
		// Don't let these be changed.
		unset( $_POST['guid'] );
		$_POST['post_type'] = 'attachment';

		// Update the thumbnail filename.
=======
		// Don't let these be changed
		unset( $_POST['guid'] );
		$_POST['post_type'] = 'attachment';

		// Update the thumbnail filename
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		$newmeta          = wp_get_attachment_metadata( $post_id, true );
		$newmeta['thumb'] = wp_basename( $_POST['thumb'] );

		wp_update_attachment_metadata( $post_id, $newmeta );

		// Intentional fall-through to trigger the edit_post() call.
	case 'editpost':
		check_admin_referer( 'update-post_' . $post_id );

		$post_id = edit_post();

<<<<<<< HEAD
		// Session cookie flag that the post was saved.
=======
		// Session cookie flag that the post was saved
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		if ( isset( $_COOKIE['wp-saving-post'] ) && $_COOKIE['wp-saving-post'] === $post_id . '-check' ) {
			setcookie( 'wp-saving-post', $post_id . '-saved', time() + DAY_IN_SECONDS, ADMIN_COOKIE_PATH, COOKIE_DOMAIN, is_ssl() );
		}

<<<<<<< HEAD
		redirect_post( $post_id ); // Send user on their way while we keep working.

		exit;
=======
		redirect_post( $post_id ); // Send user on their way while we keep working

		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'trash':
		check_admin_referer( 'trash-post_' . $post_id );

		if ( ! $post ) {
			wp_die( __( 'The item you are trying to move to the Trash no longer exists.' ) );
		}

		if ( ! $post_type_object ) {
			wp_die( __( 'Invalid post type.' ) );
		}

		if ( ! current_user_can( 'delete_post', $post_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to move this item to the Trash.' ) );
		}

		$user_id = wp_check_post_lock( $post_id );
		if ( $user_id ) {
			$user = get_userdata( $user_id );
			/* translators: %s: User's display name. */
			wp_die( sprintf( __( 'You cannot move this item to the Trash. %s is currently editing.' ), $user->display_name ) );
		}

		if ( ! wp_trash_post( $post_id ) ) {
<<<<<<< HEAD
			wp_die( __( 'Error in moving the item to Trash.' ) );
=======
			wp_die( __( 'Error in moving to Trash.' ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		}

		wp_redirect(
			add_query_arg(
				array(
					'trashed' => 1,
					'ids'     => $post_id,
				),
				$sendback
			)
		);
<<<<<<< HEAD
		exit;
=======
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'untrash':
		check_admin_referer( 'untrash-post_' . $post_id );

		if ( ! $post ) {
			wp_die( __( 'The item you are trying to restore from the Trash no longer exists.' ) );
		}

		if ( ! $post_type_object ) {
			wp_die( __( 'Invalid post type.' ) );
		}

		if ( ! current_user_can( 'delete_post', $post_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to restore this item from the Trash.' ) );
		}

		if ( ! wp_untrash_post( $post_id ) ) {
<<<<<<< HEAD
			wp_die( __( 'Error in restoring the item from Trash.' ) );
		}

		wp_redirect( add_query_arg( 'untrashed', 1, $sendback ) );
		exit;
=======
			wp_die( __( 'Error in restoring from Trash.' ) );
		}

		wp_redirect( add_query_arg( 'untrashed', 1, $sendback ) );
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'delete':
		check_admin_referer( 'delete-post_' . $post_id );

		if ( ! $post ) {
			wp_die( __( 'This item has already been deleted.' ) );
		}

		if ( ! $post_type_object ) {
			wp_die( __( 'Invalid post type.' ) );
		}

		if ( ! current_user_can( 'delete_post', $post_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to delete this item.' ) );
		}

<<<<<<< HEAD
		if ( 'attachment' === $post->post_type ) {
			$force = ( ! MEDIA_TRASH );
			if ( ! wp_delete_attachment( $post_id, $force ) ) {
				wp_die( __( 'Error in deleting the attachment.' ) );
			}
		} else {
			if ( ! wp_delete_post( $post_id, true ) ) {
				wp_die( __( 'Error in deleting the item.' ) );
=======
		if ( $post->post_type == 'attachment' ) {
			$force = ( ! MEDIA_TRASH );
			if ( ! wp_delete_attachment( $post_id, $force ) ) {
				wp_die( __( 'Error in deleting.' ) );
			}
		} else {
			if ( ! wp_delete_post( $post_id, true ) ) {
				wp_die( __( 'Error in deleting.' ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			}
		}

		wp_redirect( add_query_arg( 'deleted', 1, $sendback ) );
<<<<<<< HEAD
		exit;
=======
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'preview':
		check_admin_referer( 'update-post_' . $post_id );

		$url = post_preview();

		wp_redirect( $url );
<<<<<<< HEAD
		exit;
=======
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	case 'toggle-custom-fields':
		check_admin_referer( 'toggle-custom-fields' );

		$current_user_id = get_current_user_id();
		if ( $current_user_id ) {
			$enable_custom_fields = (bool) get_user_meta( $current_user_id, 'enable_custom_fields', true );
			update_user_meta( $current_user_id, 'enable_custom_fields', ! $enable_custom_fields );
		}

		wp_safe_redirect( wp_get_referer() );
<<<<<<< HEAD
		exit;
=======
		exit();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	default:
		/**
		 * Fires for a given custom post action request.
		 *
		 * The dynamic portion of the hook name, `$action`, refers to the custom post action.
		 *
		 * @since 4.6.0
		 *
		 * @param int $post_id Post ID sent with the request.
		 */
		do_action( "post_action_{$action}", $post_id );

		wp_redirect( admin_url( 'edit.php' ) );
<<<<<<< HEAD
		exit;
} // End switch.

require_once ABSPATH . 'wp-admin/admin-footer.php';
=======
		exit();
} // end switch
include( ABSPATH . 'wp-admin/admin-footer.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
