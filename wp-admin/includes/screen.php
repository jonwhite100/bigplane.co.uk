<?php
/**
 * WordPress Administration Screen API.
 *
 * @package WordPress
 * @subpackage Administration
 */

/**
 * Get the column headers for a screen
 *
 * @since 2.7.0
 *
<<<<<<< HEAD
 * @param string|WP_Screen $screen The screen you want the headers for
 * @return string[] The column header labels keyed by column ID.
=======
 * @staticvar array $column_headers
 *
 * @param string|WP_Screen $screen The screen you want the headers for
 * @return array Containing the headers in the format id => UI String
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */
function get_column_headers( $screen ) {
	if ( is_string( $screen ) ) {
		$screen = convert_to_screen( $screen );
	}

	static $column_headers = array();

	if ( ! isset( $column_headers[ $screen->id ] ) ) {
<<<<<<< HEAD
=======

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		/**
		 * Filters the column headers for a list table on a specific screen.
		 *
		 * The dynamic portion of the hook name, `$screen->id`, refers to the
		 * ID of a specific screen. For example, the screen ID for the Posts
		 * list table is edit-post, so the filter for that screen would be
		 * manage_edit-post_columns.
		 *
		 * @since 3.0.0
		 *
<<<<<<< HEAD
		 * @param string[] $columns The column header labels keyed by column ID.
=======
		 * @param array $columns An array of column headers. Default empty.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 */
		$column_headers[ $screen->id ] = apply_filters( "manage_{$screen->id}_columns", array() );
	}

	return $column_headers[ $screen->id ];
}

/**
 * Get a list of hidden columns.
 *
 * @since 2.7.0
 *
 * @param string|WP_Screen $screen The screen you want the hidden columns for
<<<<<<< HEAD
 * @return string[] Array of IDs of hidden columns.
=======
 * @return array
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */
function get_hidden_columns( $screen ) {
	if ( is_string( $screen ) ) {
		$screen = convert_to_screen( $screen );
	}

	$hidden = get_user_option( 'manage' . $screen->id . 'columnshidden' );

	$use_defaults = ! is_array( $hidden );

	if ( $use_defaults ) {
		$hidden = array();

		/**
		 * Filters the default list of hidden columns.
		 *
		 * @since 4.4.0
		 *
<<<<<<< HEAD
		 * @param string[]  $hidden Array of IDs of columns hidden by default.
=======
		 * @param array     $hidden An array of columns hidden by default.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 * @param WP_Screen $screen WP_Screen object of the current screen.
		 */
		$hidden = apply_filters( 'default_hidden_columns', $hidden, $screen );
	}

	/**
	 * Filters the list of hidden columns.
	 *
	 * @since 4.4.0
	 * @since 4.4.1 Added the `use_defaults` parameter.
	 *
<<<<<<< HEAD
	 * @param string[]  $hidden       Array of IDs of hidden columns.
	 * @param WP_Screen $screen       WP_Screen object of the current screen.
=======
	 * @param array     $hidden An array of hidden columns.
	 * @param WP_Screen $screen WP_Screen object of the current screen.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 * @param bool      $use_defaults Whether to show the default columns.
	 */
	return apply_filters( 'hidden_columns', $hidden, $screen, $use_defaults );
}

/**
 * Prints the meta box preferences for screen meta.
 *
 * @since 2.7.0
 *
 * @global array $wp_meta_boxes
 *
 * @param WP_Screen $screen
 */
function meta_box_prefs( $screen ) {
	global $wp_meta_boxes;

	if ( is_string( $screen ) ) {
		$screen = convert_to_screen( $screen );
	}

	if ( empty( $wp_meta_boxes[ $screen->id ] ) ) {
		return;
	}

	$hidden = get_hidden_meta_boxes( $screen );

	foreach ( array_keys( $wp_meta_boxes[ $screen->id ] ) as $context ) {
		foreach ( array( 'high', 'core', 'default', 'low' ) as $priority ) {
			if ( ! isset( $wp_meta_boxes[ $screen->id ][ $context ][ $priority ] ) ) {
				continue;
			}
			foreach ( $wp_meta_boxes[ $screen->id ][ $context ][ $priority ] as $box ) {
				if ( false == $box || ! $box['title'] ) {
					continue;
				}
<<<<<<< HEAD
				// Submit box cannot be hidden.
				if ( 'submitdiv' === $box['id'] || 'linksubmitdiv' === $box['id'] ) {
=======
				// Submit box cannot be hidden
				if ( 'submitdiv' == $box['id'] || 'linksubmitdiv' == $box['id'] ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					continue;
				}

				$widget_title = $box['title'];

				if ( is_array( $box['args'] ) && isset( $box['args']['__widget_basename'] ) ) {
					$widget_title = $box['args']['__widget_basename'];
				}

<<<<<<< HEAD
				$is_hidden = in_array( $box['id'], $hidden, true );

				printf(
					'<label for="%1$s-hide"><input class="hide-postbox-tog" name="%1$s-hide" type="checkbox" id="%1$s-hide" value="%1$s" %2$s />%3$s</label>',
					esc_attr( $box['id'] ),
					checked( $is_hidden, false, false ),
=======
				printf(
					'<label for="%1$s-hide"><input class="hide-postbox-tog" name="%1$s-hide" type="checkbox" id="%1$s-hide" value="%1$s" %2$s />%3$s</label>',
					esc_attr( $box['id'] ),
					checked( in_array( $box['id'], $hidden ), false, false ),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					$widget_title
				);
			}
		}
	}
}

/**
<<<<<<< HEAD
 * Gets an array of IDs of hidden meta boxes.
=======
 * Get Hidden Meta Boxes
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 * @since 2.7.0
 *
 * @param string|WP_Screen $screen Screen identifier
<<<<<<< HEAD
 * @return string[] IDs of hidden meta boxes.
=======
 * @return array Hidden Meta Boxes
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */
function get_hidden_meta_boxes( $screen ) {
	if ( is_string( $screen ) ) {
		$screen = convert_to_screen( $screen );
	}

	$hidden = get_user_option( "metaboxhidden_{$screen->id}" );

	$use_defaults = ! is_array( $hidden );

<<<<<<< HEAD
	// Hide slug boxes by default.
	if ( $use_defaults ) {
		$hidden = array();
		if ( 'post' === $screen->base ) {
			if ( in_array( $screen->post_type, array( 'post', 'page', 'attachment' ), true ) ) {
=======
	// Hide slug boxes by default
	if ( $use_defaults ) {
		$hidden = array();
		if ( 'post' == $screen->base ) {
			if ( 'post' == $screen->post_type || 'page' == $screen->post_type || 'attachment' == $screen->post_type ) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
				$hidden = array( 'slugdiv', 'trackbacksdiv', 'postcustom', 'postexcerpt', 'commentstatusdiv', 'commentsdiv', 'authordiv', 'revisionsdiv' );
			} else {
				$hidden = array( 'slugdiv' );
			}
		}

		/**
		 * Filters the default list of hidden meta boxes.
		 *
		 * @since 3.1.0
		 *
<<<<<<< HEAD
		 * @param string[]  $hidden An array of IDs of meta boxes hidden by default.
=======
		 * @param array     $hidden An array of meta boxes hidden by default.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		 * @param WP_Screen $screen WP_Screen object of the current screen.
		 */
		$hidden = apply_filters( 'default_hidden_meta_boxes', $hidden, $screen );
	}

	/**
	 * Filters the list of hidden meta boxes.
	 *
	 * @since 3.3.0
	 *
<<<<<<< HEAD
	 * @param string[]  $hidden       An array of IDs of hidden meta boxes.
=======
	 * @param array     $hidden       An array of hidden meta boxes.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	 * @param WP_Screen $screen       WP_Screen object of the current screen.
	 * @param bool      $use_defaults Whether to show the default meta boxes.
	 *                                Default true.
	 */
	return apply_filters( 'hidden_meta_boxes', $hidden, $screen, $use_defaults );
}

/**
 * Register and configure an admin screen option
 *
 * @since 3.1.0
 *
 * @param string $option An option name.
<<<<<<< HEAD
 * @param mixed  $args   Option-dependent arguments.
=======
 * @param mixed $args Option-dependent arguments.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */
function add_screen_option( $option, $args = array() ) {
	$current_screen = get_current_screen();

	if ( ! $current_screen ) {
		return;
	}

	$current_screen->add_option( $option, $args );
}

/**
 * Get the current screen object
 *
 * @since 3.1.0
 *
 * @global WP_Screen $current_screen WordPress current screen object.
 *
 * @return WP_Screen|null Current screen object or null when screen not defined.
 */
function get_current_screen() {
	global $current_screen;

	if ( ! isset( $current_screen ) ) {
		return null;
	}

	return $current_screen;
}

/**
 * Set the current screen object
 *
 * @since 3.0.0
 *
<<<<<<< HEAD
 * @param string|WP_Screen $hook_name Optional. The hook name (also known as the hook suffix) used to determine the screen,
 *                                    or an existing screen object.
=======
 * @param mixed $hook_name Optional. The hook name (also known as the hook suffix) used to determine the screen,
 *                         or an existing screen object.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */
function set_current_screen( $hook_name = '' ) {
	WP_Screen::get( $hook_name )->set_current_screen();
}
