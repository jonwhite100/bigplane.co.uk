<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function understrap_remove_scripts() {
    wp_dequeue_style( 'understrap-styles' );
    wp_deregister_style( 'understrap-styles' );

    wp_dequeue_script( 'understrap-scripts' );
    wp_deregister_script( 'understrap-scripts' );

    // Removes the parent themes stylesheet and scripts from inc/enqueue.php
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {

	// Get the theme data
	$the_theme = wp_get_theme();
    wp_enqueue_style( 'child-understrap-styles', get_stylesheet_directory_uri() . '/css/child-theme.min.css', array(), $the_theme->get( 'Version' ) );
    wp_enqueue_script( 'jquery');
	// wp_enqueue_script( 'popper-scripts', get_template_directory_uri() . '/js/popper.min.js', array(), false);
	// wp_enqueue_script( 'popper-scripts', get_stylesheet_directory_uri() . '/js/popper.min.js', array(), false);
    wp_enqueue_script( 'child-understrap-scripts', get_stylesheet_directory_uri() . '/js/child-theme.min.js', array(), $the_theme->get( 'Version' ), true );
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}

function add_child_theme_textdomain() {
    load_child_theme_textdomain( 'understrap-child', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'add_child_theme_textdomain' );

///
// BPM remove dashicons
///
add_action( 'wp_print_styles', 'my_deregister_styles', 100 );

function my_deregister_styles() {
	wp_deregister_style( 'dashicons' );
}

/**
* BPM  add an images directory
**/
define ( 'TEMPPATH', get_bloginfo ('stylesheet_directory')); define ( 'IMAGES', TEMPPATH . "/images");

/**
* BPM Add an addition menu location
**/
function register_my_menu() {
    register_nav_menu('footer-menu',__( 'Footer Menu' ));
}
add_action( 'init', 'register_my_menu' );

/**
* BPM add from Display Posts plugin

* Display Posts - current-list-item class
* @see https://displayposts.com/2019/08/20/add-class-to-current-post-for-styling/
*
* @param array $classes
* @param object $post
* @return array $classes
*/
function be_dps_current_class( $classes, $post ) {
	if( is_singular() && $post->ID === get_queried_object_id() ) {
		$classes[] = 'current-list-item-jonso100';
	}
	return $classes;
}
add_filter( 'display_posts_shortcode_post_class', 'be_dps_current_class', 10, 2 );


/**
* BPM Overriding the function in understrap/inc/setup.php
*/
add_filter( 'wp_trim_excerpt', 'understrap_all_excerpts_get_more_link' );

if ( ! function_exists( 'understrap_all_excerpts_get_more_link' ) ) {
	/**
	 * Adds a custom read more link to all excerpts, manually or automatically generated
	 *
	 * @param string $post_excerpt Posts's excerpt.
	 *
	 * @return string
	 */
	function understrap_all_excerpts_get_more_link( $post_excerpt ) {
		if ( ! is_admin() ) {
			$post_excerpt = $post_excerpt . ' <p><a class="btn circle border btn-sm" href="' . esc_url( get_permalink( get_the_ID() ) ) . '">' . __( 'Read More',
			'understrap' ) . '</a></p>';
		}
		return $post_excerpt;
	}
}

/**
* BPM Split footer widget into x3 custom areas
*/
function register_additional_childtheme_sidebars() {
    register_sidebar( array(
        'id'            => 'footer-left',
        'name'          => __( 'Footer Left', 'child-theme-textdomain' ),
        'description'   => __( 'Custom footer left widget area', 'child-theme-textdomain' ),
        'before_widget' => '<div class="col-sm-4 %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

	register_sidebar( array(
        'id'            => 'footer-center',
        'name'          => __( 'Footer Center', 'child-theme-textdomain' ),
        'description'   => __( 'Custom footer center widget area', 'child-theme-textdomain' ),
        'before_widget' => '<div class="col-sm-4 %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

	register_sidebar( array(
        'id'            => 'footer-right',
        'name'          => __( 'Footer Right', 'child-theme-textdomain' ),
        'description'   => __( 'Custom footer right widget area', 'child-theme-textdomain' ),
        'before_widget' => '<div class="col-sm-4 %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

}

add_action( 'init', 'register_additional_childtheme_sidebars' );

///
// BPM: Making a short code work in Custom HTML widget
///
add_filter( 'widget_text', 'shortcode_unautop');
add_filter( 'widget_text', 'do_shortcode');

///
// BPM: removing the [...] from post excerpts
///
function trim_excerpt($text) {
	return str_replace(' [...]', '', $text);
}
add_filter('get_the_excerpt', 'trim_excerpt');

///
// Speeding the site up: Contact Form 7 and Recaptcha3
///

// 1. Deregister Contact Form 7 JavaScript files on all pages without a form
// add_action( 'wp_print_scripts', 'aa_deregister_javascript', 100 );
// function aa_deregister_javascript() {
// 	if ( ! is_page( array('ID', 'page-id-9', 'page-id-534', 'page-id-747') ) ) {
// 		wp_deregister_script( 'contact-form-7' );
// 	}
// }

// // 2. Remove Contact Form 7's reCAPTCHA files on all pages without a form
// add_action( 'wp_enqueue_scripts', 'aa_remove_recaptcha', 9 );
// function aa_remove_recaptcha() {
// 	if ( ! is_page( array('ID', 'page-id-9', 'page-id-534', 'page-id-747') ) ) { // EDIT these!
// // 	// if ( ! is_page_template( 'page-templates/page-contact-form.php' ) ) {
// 		remove_action( 'wp_enqueue_scripts', 'wpcf7_recaptcha_enqueue_scripts' );
// 	}
// }

// 3. Remove Contact Form 7 styling
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
    wp_deregister_style( 'contact-form-7' );
}

///
// Prints HTML with meta information for the current post-date/time and author. Copied function from understrap/inc/template-tags.php
///
if ( ! function_exists( 'understrap_posted_on' ) ) {
	function understrap_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() )
		);
		$posted_on   = apply_filters(
			'understrap_posted_on', sprintf(
				'<span class="posted-on">%1$s <a href="%2$s" rel="bookmark">%3$s</a></span>',
				esc_html_x( 'Posted on', 'post date', 'understrap' ),
				esc_url( get_permalink() ),
				apply_filters( 'understrap_posted_on_time', $time_string )
			)
		);
		$byline      = apply_filters(
			'understrap_posted_by', sprintf(
				'<span class="byline"> %1$s<span class="author vcard"> <a class="url fn n" href="%2$s">%3$s</a></span></span>',
				$posted_on ? esc_html_x( 'by', 'post author', 'understrap' ) : esc_html_x( 'Posted by', 'post author', 'understrap' ),
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
				esc_html( get_the_author() )
			)
		);
		echo $posted_on . $byline; // WPCS: XSS OK.
	}
}

///
// Display navigation to next/previous post when applicable. Limit to category
///
if ( ! function_exists ( 'understrap_post_nav' ) ) {
	function understrap_post_nav() {
		// Don't print empty markup if there's nowhere to navigate.
		$previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
		$next     = get_adjacent_post( false, '', false );

		if ( ! $next && ! $previous ) {
			return;
		}
		?>
		<nav class="container navigation post-navigation">
			<h2 class="sr-only"><?php esc_html_e( 'Post navigation', 'understrap' ); ?></h2>
			<div class="row nav-links justify-content-between my-5">
				<?php
				if ( get_previous_post_link() ) {
					previous_post_link( '<span class="nav-previous">%link</span>', _x( '<i class="fa fa-angle-left"></i>&nbsp;%title', 'Previous post link', 'understrap'), $in_same_term = true, $taxonomy = 'category' );
				}
				if ( get_next_post_link() ) {
					next_post_link( '<span class="nav-next">%link</span>', _x( '%title&nbsp;<i class="fa fa-angle-right"></i>', 'Next post link', 'understrap'), $in_same_term = true, $taxonomy = 'category' );
				}
				?>
			</div><!-- .nav-links -->
		</nav><!-- .navigation -->
		<?php
	}
}
