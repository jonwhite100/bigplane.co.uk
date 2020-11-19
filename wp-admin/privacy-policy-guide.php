<?php
/**
 * Privacy Policy Guide Screen.
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

if ( ! current_user_can( 'manage_privacy_options' ) ) {
	wp_die( __( 'Sorry, you are not allowed to manage privacy on this site.' ) );
}

if ( ! class_exists( 'WP_Privacy_Policy_Content' ) ) {
<<<<<<< HEAD
	include_once ABSPATH . 'wp-admin/includes/class-wp-privacy-policy-content.php';
=======
	include_once( ABSPATH . 'wp-admin/includes/class-wp-privacy-policy-content.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

$title = __( 'Privacy Policy Guide' );

wp_enqueue_script( 'privacy-tools' );

<<<<<<< HEAD
require_once ABSPATH . 'wp-admin/admin-header.php';
=======
require_once( ABSPATH . 'wp-admin/admin-header.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

?>
<div class="wrap">
	<h1><?php echo esc_html( $title ); ?></h1>

	<div class="wp-privacy-policy-guide">
		<?php WP_Privacy_Policy_Content::privacy_policy_guide(); ?>
	</div>
</div>
<?php

<<<<<<< HEAD
require_once ABSPATH . 'wp-admin/admin-footer.php';
=======
include( ABSPATH . 'wp-admin/admin-footer.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
