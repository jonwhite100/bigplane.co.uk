<?php
/**
 * Comment Moderation Administration Screen.
 *
 * Redirects to edit-comments.php?comment_status=moderated.
 *
 * @package WordPress
 * @subpackage Administration
 */
<<<<<<< HEAD
require_once dirname( __DIR__ ) . '/wp-load.php';
=======
require_once( dirname( dirname( __FILE__ ) ) . '/wp-load.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
wp_redirect( admin_url( 'edit-comments.php?comment_status=moderated' ) );
exit;
