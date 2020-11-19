<?php
/**
 * Update/Install Plugin/Theme network administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

<<<<<<< HEAD
if ( isset( $_GET['action'] ) && in_array( $_GET['action'], array( 'update-selected', 'activate-plugin', 'update-selected-themes' ), true ) ) {
=======
if ( isset( $_GET['action'] ) && in_array( $_GET['action'], array( 'update-selected', 'activate-plugin', 'update-selected-themes' ) ) ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	define( 'IFRAME_REQUEST', true );
}

/** Load WordPress Administration Bootstrap */
<<<<<<< HEAD
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/update.php';
=======
require_once( dirname( __FILE__ ) . '/admin.php' );

require( ABSPATH . 'wp-admin/update.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
