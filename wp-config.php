<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'WP_CACHE', false );
define( 'DB_NAME', "bigplane_bpmwdadmin" );

/** MySQL database username */
define( 'DB_USER', "bigplane_bpmwdadmin" );

/** MySQL database password */
define( 'DB_PASSWORD', "jungle-truck-water" );

/** MySQL hostname */
define( 'DB_HOST', "localhost" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm5b7otqo8q3ggq2qthxkrucdqcj9szdaoxa1hme8rg7nzzw1qwksdut3cd2nbydj' );
define( 'SECURE_AUTH_KEY',  'ubcccnykmulvvvhxhtrobixwkddijwdljpviefej3ieyqivlgdcaizzqtgo77zbj' );
define( 'LOGGED_IN_KEY',    'alt6js077qtir5d5njokcybo7i5tlhobtrv5m5v3vtfuglg9h3vbt0yljeijzdce' );
define( 'NONCE_KEY',        '8fnlgimaspxgl728ywvaily3b4w4999kv680ld22bce74d74laqevuqho6a6l5zx' );
define( 'AUTH_SALT',        'egiahjvbfrz2gnnadr4uq1sc9nzi66tzyjc2sxurgseue8zfh7ckqebiq6ofbfo4' );
define( 'SECURE_AUTH_SALT', 'fvslsqnagb9r1cnjdk9vj1xp0zlj8xgxk9r2b7xbz3mkzhcqpanf7ryuynz5svj8' );
define( 'LOGGED_IN_SALT',   'kzqpqfswjna72vqutadf1ddmc8mzoy0i1my7kigtyfugcbsdai6qhsknp40avrsq' );
define( 'NONCE_SALT',       'dsi9efzvoi6zffkkr1qk4jkuc1d8zo3xgobvfyreitis7qduyxpc3az0n8cbqdjc' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
