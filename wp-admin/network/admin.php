<?php
/**
 * WordPress Network Administration Bootstrap
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

define( 'WP_NETWORK_ADMIN', true );

/** Load WordPress Administration Bootstrap */
<<<<<<< HEAD
require_once dirname( __DIR__ ) . '/admin.php';
=======
require_once( dirname( dirname( __FILE__ ) ) . '/admin.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// Do not remove this check. It is required by individual network admin pages.
if ( ! is_multisite() ) {
	wp_die( __( 'Multisite support is not enabled.' ) );
}

<<<<<<< HEAD
$redirect_network_admin_request = ( 0 !== strcasecmp( $current_blog->domain, $current_site->domain ) || 0 !== strcasecmp( $current_blog->path, $current_site->path ) );
=======
$redirect_network_admin_request = 0 !== strcasecmp( $current_blog->domain, $current_site->domain ) || 0 !== strcasecmp( $current_blog->path, $current_site->path );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

/**
 * Filters whether to redirect the request to the Network Admin.
 *
 * @since 3.2.0
 *
 * @param bool $redirect_network_admin_request Whether the request should be redirected.
 */
$redirect_network_admin_request = apply_filters( 'redirect_network_admin_request', $redirect_network_admin_request );
<<<<<<< HEAD

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
if ( $redirect_network_admin_request ) {
	wp_redirect( network_admin_url() );
	exit;
}
<<<<<<< HEAD

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
unset( $redirect_network_admin_request );
