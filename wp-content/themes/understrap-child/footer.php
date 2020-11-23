<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>
<div class="wrapper wrapper-footer-widgets">
	<div class="container">
		<div class="row">
			<?php
		  		if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-left') )
			?>
			<?php
		  		if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-center') )
			?>
			<?php
		  		if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-right') )
			?>
		</div>
	</div>
</div>

<div class="wrapper" id="wrapper-footer">
	<div class="<?php echo esc_attr( $container ); ?>">
		<div class="row">
			<div class="col">
				<div class="site-info">
					Big Plane is a trading name of bpm web design ltd.
					Registered number: 08710002
					Registered office: First Floor, Telecom House, 125-135 Preston Road, Brighton, East Sussex, BN1 6AF<br />
					<br />
					VAT number: 171425327.
					All content &copy; bpm web design ltd <?php echo date("Y"); ?>.
				</div><!-- .site-info -->
			</div>
		</div><!-- row end -->
	</div><!-- container end -->
</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>
<script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</body>

</html>
