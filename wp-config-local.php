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
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/var/www/html/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'bpm_com');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9bkj*c<2PyT!]k~o8e,%i3e+&hUrVy-g9WHKZEV[}c2vt~6*njPV .K]wXSl<`G^');
define('SECURE_AUTH_KEY',  'Dn=^6F^bf_,Xydx*[s!oYM#GK-:fz-L9T5FapBR<9v7O?$g=)T%W3=iTTeXHLrCs');
define('LOGGED_IN_KEY',    'iF1NQG&epm[bv5XC d8z/pdVp^!Xehi2jeyFeX1uwwF|9sdf=S^RfFEmw{iU(<0D');
define('NONCE_KEY',        '#>>fIw:M1hHWE9$QkT+.4[~%P|7Oi++W <*zXcmACcHy- #CoZ]>=k`$4C8Sll_$');
define('AUTH_SALT',        '9wd}?09r:Ic)wFzcm,|*8$y2u,Re2Sv_MY*;d@OxV]L5Uwm3F-7zyjsh8O[m||,u');
define('SECURE_AUTH_SALT', '>I8M,Hp}[z-crs9UndIe!X!b:jFF|`@ltR0332p=#ky0)@<DbC+0AB;riL`unHc)');
define('LOGGED_IN_SALT',   'qJ@NkUh+AzmA0I~Q;CxQBvTb@pOn57e%0z9Q[K5`p}+F-ZC1TW_3}e` lFY@,YH_');
define('NONCE_SALT',       '7Ca_bf;y;qdE/L>`ZG|CRj A+f7_8uSXO+b4D_|;Af@eD6G/iqXi-C/2P1Dy/Fnj');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
