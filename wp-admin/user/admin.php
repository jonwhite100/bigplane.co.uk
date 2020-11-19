<?php
/**
 * WordPress User Administration Bootstrap
 *
 * @package WordPress
 * @subpackage Administration
 * @since 3.1.0
 */

define( 'WP_USER_ADMIN', true );

<<<<<<< HEAD
require_once dirname( __DIR__ ) . '/admin.php';
=======
require_once( dirname( dirname( __FILE__ ) ) . '/admin.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

if ( ! is_multisite() ) {
	wp_redirect( admin_url() );
	exit;
}

<<<<<<< HEAD
$redirect_user_admin_request = ( 0 !== strcasecmp( $current_blog->domain, $current_site->domain ) || 0 !== strcasecmp( $current_blog->path, $current_site->path ) );

=======
$redirect_user_admin_request = ( ( $current_blog->domain != $current_site->domain ) || ( $current_blog->path != $current_site->path ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/**
 * Filters whether to redirect the request to the User Admin in Multisite.
 *
 * @since 3.2.0
 *
 * @param bool $redirect_user_admin_request Whether the request should be redirected.
 */
$redirect_user_admin_request = apply_filters( 'redirect_user_admin_request', $redirect_user_admin_request );
<<<<<<< HEAD

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
if ( $redirect_user_admin_request ) {
	wp_redirect( user_admin_url() );
	exit;
}
<<<<<<< HEAD

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
unset( $redirect_user_admin_request );
