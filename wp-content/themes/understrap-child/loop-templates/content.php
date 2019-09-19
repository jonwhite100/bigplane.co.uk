<?php
/**
 * Post rendering content according to caller of get_template_part.
 *
 * @package understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<!--

<div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

-->
<div class="col-sm-6 col-md-4 mb-5">
	<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
		<div class="card card-blog-post shadow">
            <div class="card-img-top">
                <?php echo get_the_post_thumbnail( $post->ID, 'large' ); ?>
            </div>

            <div class="card-body entry-content p-4">
                <?php
                the_title(
                    sprintf( '<h3 class="card-title entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ),
                    '</a></h3>'
                );
                ?>

                <?php if ( 'post' == get_post_type() ) : ?>

                    <p class="card-subtitle mb-4 entry-meta">
                        <?php understrap_posted_on(); ?>
                    </p><!-- .entry-meta -->

                <?php endif; ?>

                <?php the_excerpt(); ?>

                <?php
                wp_link_pages(
                    array(
                        'before' => '<div class="page-links">' . __( 'Pages:', 'understrap' ),
                        'after'  => '</div>',
                    )
                );
                ?>
            </div>

            <div class="card-footer entry-footer">
                <?php understrap_entry_footer(); ?>
            </div>
		</div>
	</article><!-- #post-## -->
</div>
