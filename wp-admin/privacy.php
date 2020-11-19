<?php
/**
 * Privacy administration panel.
 *
 * @package WordPress
 * @subpackage Administration
 */

/** WordPress Administration Bootstrap */
<<<<<<< HEAD
require_once __DIR__ . '/admin.php';
=======
require_once( dirname( __FILE__ ) . '/admin.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

$title = __( 'Privacy' );

list( $display_version ) = explode( '-', get_bloginfo( 'version' ) );

<<<<<<< HEAD
require_once ABSPATH . 'wp-admin/admin-header.php';
=======
include( ABSPATH . 'wp-admin/admin-header.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
?>
<div class="wrap about__container">

	<div class="about__header">
<<<<<<< HEAD
		<div class="about__header-text">
			<?php _e( 'Speed. Search. Security.' ); ?>
		</div>

		<div class="about__header-title">
			<p>
				<?php _e( 'WordPress' ); ?>
				<span><?php echo $display_version; ?></span>
=======
		<div class="about__header-title">
			<h1>
				<span><?php echo $display_version; ?></span>
				<?php _e( 'WordPress' ); ?>
			</h1>
		</div>

		<div class="about__header-badge"></div>

		<div class="about__header-text">
			<p>
				<?php
				printf(
					/* translators: %s: The current WordPress version number. */
					__( 'Introducing our most refined user experience with the improved block editor in WordPress %s!' ),
					$display_version
				);
				?>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			</p>
		</div>

		<nav class="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="<?php esc_attr_e( 'Secondary menu' ); ?>">
			<a href="about.php" class="nav-tab"><?php _e( 'What&#8217;s New' ); ?></a>
			<a href="credits.php" class="nav-tab"><?php _e( 'Credits' ); ?></a>
			<a href="freedoms.php" class="nav-tab"><?php _e( 'Freedoms' ); ?></a>
			<a href="privacy.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( 'Privacy' ); ?></a>
		</nav>
	</div>

	<div class="about__section">
		<div class="column">
<<<<<<< HEAD
			<h1><?php _e( 'Privacy' ); ?></h1>
=======
			<h2><?php _e( 'Privacy' ); ?></h2>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

			<p><?php _e( 'From time to time, your WordPress site may send data to WordPress.org &#8212; including, but not limited to &#8212; the version of WordPress you are using, and a list of installed plugins and themes.' ); ?></p>

			<p>
				<?php
				printf(
					/* translators: %s: https://wordpress.org/about/stats/ */
					__( 'This data is used to provide general enhancements to WordPress, which includes helping to protect your site by finding and automatically installing new updates. It is also used to calculate statistics, such as those shown on the <a href="%s">WordPress.org stats page</a>.' ),
					__( 'https://wordpress.org/about/stats/' )
				);
				?>
			</p>

			<p>
				<?php
				printf(
					/* translators: %s: https://wordpress.org/about/privacy/ */
					__( 'We take privacy and transparency very seriously. To learn more about what data we collect, and how we use it, please visit <a href="%s">WordPress.org/about/privacy</a>.' ),
					__( 'https://wordpress.org/about/privacy/' )
				);
				?>
			</p>
		</div>
	</div>

</div>
<<<<<<< HEAD
<?php require_once ABSPATH . 'wp-admin/admin-footer.php'; ?>
=======
<?php include( ABSPATH . 'wp-admin/admin-footer.php' ); ?>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
