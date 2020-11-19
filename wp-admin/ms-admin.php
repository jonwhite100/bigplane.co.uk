<?php
/**
 * Multisite administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.0.0
 */

<<<<<<< HEAD
require_once __DIR__ . '/admin.php';
=======
require_once( dirname( __FILE__ ) . '/admin.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

wp_redirect( network_admin_url() );
exit;
