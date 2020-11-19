<?php
/**
 * Feed API
 *
 * @package WordPress
 * @subpackage Feed
 * @deprecated 4.7.0
 */

_deprecated_file( basename( __FILE__ ), '4.7.0', 'fetch_feed()' );

if ( ! class_exists( 'SimplePie', false ) ) {
<<<<<<< HEAD
	require_once ABSPATH . WPINC . '/class-simplepie.php';
}

require_once ABSPATH . WPINC . '/class-wp-feed-cache.php';
require_once ABSPATH . WPINC . '/class-wp-feed-cache-transient.php';
require_once ABSPATH . WPINC . '/class-wp-simplepie-file.php';
require_once ABSPATH . WPINC . '/class-wp-simplepie-sanitize-kses.php';
=======
	require_once( ABSPATH . WPINC . '/class-simplepie.php' );
}

require_once( ABSPATH . WPINC . '/class-wp-feed-cache.php' );
require_once( ABSPATH . WPINC . '/class-wp-feed-cache-transient.php' );
require_once( ABSPATH . WPINC . '/class-wp-simplepie-file.php' );
require_once( ABSPATH . WPINC . '/class-wp-simplepie-sanitize-kses.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
