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
<<<<<<< HEAD
<!-- Google review -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  -->
<!-- <script src="/js/google-places.js "></script>  -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyAkUX99XARyLj3jfkhPIMBjJhmLqZaAGD0"></script>
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
</body>

</html>
