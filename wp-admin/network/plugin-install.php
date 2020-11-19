<?php
/**
 * Install plugin network administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

<<<<<<< HEAD
if ( isset( $_GET['tab'] ) && ( 'plugin-information' === $_GET['tab'] ) ) {
=======
if ( isset( $_GET['tab'] ) && ( 'plugin-information' == $_GET['tab'] ) ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	define( 'IFRAME_REQUEST', true );
}

/** Load WordPress Administration Bootstrap */
<<<<<<< HEAD
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/plugin-install.php';
=======
require_once( dirname( __FILE__ ) . '/admin.php' );

require( ABSPATH . 'wp-admin/plugin-install.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
