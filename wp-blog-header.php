<?php
/**
 * Loads the WordPress environment and template.
 *
 * @package WordPress
 */

if ( ! isset( $wp_did_header ) ) {

	$wp_did_header = true;

	// Load the WordPress library.
<<<<<<< HEAD
	require_once __DIR__ . '/wp-load.php';
=======
	require_once( dirname( __FILE__ ) . '/wp-load.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	// Set up the WordPress query.
	wp();

	// Load the theme template.
<<<<<<< HEAD
	require_once ABSPATH . WPINC . '/template-loader.php';
=======
	require_once( ABSPATH . WPINC . '/template-loader.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

}
