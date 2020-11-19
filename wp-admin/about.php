<?php
/**
 * About This Version administration panel.
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

/* translators: Page title of the About WordPress page in the admin. */
$title = _x( 'About', 'page title' );

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
				<a href="about.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( 'What&#8217;s New' ); ?></a>
				<a href="credits.php" class="nav-tab"><?php _e( 'Credits' ); ?></a>
				<a href="freedoms.php" class="nav-tab"><?php _e( 'Freedoms' ); ?></a>
				<a href="privacy.php" class="nav-tab"><?php _e( 'Privacy' ); ?></a>
			</nav>
		</div>

<<<<<<< HEAD
		<div class="about__section is-feature has-subtle-background-color">
			<h1>
				<?php
				printf(
					/* translators: %s: The current WordPress version number. */
					__( 'Welcome to WordPress %s.' ),
					$display_version
				);
				?>
			</h1>
			<p>
				<?php
				printf(
					/* translators: %s: The current WordPress version number. */
					__( 'In WordPress %s, your site gets new power in three major areas: speed, search, and security.' ),
					$display_version
				);
				?>
=======
		<div class="about__section is-feature">
			<p>
				<?php _e( '5.3 expands and refines the block editor introduced in WordPress 5.0 with a new block, more intuitive interactions, and improved accessibility. New features in the editor increase design freedoms, provide additional layout options and style variations to allow designers complete control over the look of a site. This release also introduces the Twenty Twenty theme giving the user more design flexibility and integration with the block editor. Creating beautiful web pages and advanced layouts has never been easier.' ); ?>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			</p>
		</div>

		<hr />

<<<<<<< HEAD
		<div class="about__section has-subtle-background-color">
			<div class="column">
				<h2><?php _e( 'Maintenance and Security Releases' ); ?></h2>
				<p>
					<?php
					printf(
						/* translators: 1: WordPress version number, 2: Plural number of bugs. */
						_n(
							'<strong>Version %1$s</strong> addressed %2$s bug.',
							'<strong>Version %1$s</strong> addressed %2$s bugs.',
							1
						),
						'5.5.3',
						number_format_i18n( 1 )
					);
					?>
					<?php
					printf(
						/* translators: %s: HelpHub URL. */
						__( 'For more information, see <a href="%s">the release notes</a>.' ),
						sprintf(
							/* translators: %s: WordPress version. */
							esc_url( __( 'https://wordpress.org/support/wordpress-version/version-%s/' ) ),
							sanitize_title( '5.5.3' )
						)
					);
					?>
				</p>
				<p>
					<?php
					printf(
						/* translators: 1: WordPress version number, 2: plural number of bugs. More than one security issue. */
						_n(
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.',
							14
						),
						'5.5.2',
						number_format_i18n( 14 )
					);
					?>
					<?php
					printf(
						/* translators: %s: HelpHub URL */
						__( 'For more information, see <a href="%s">the release notes</a>.' ),
						sprintf(
							/* translators: %s: WordPress version */
							esc_url( __( 'https://wordpress.org/support/wordpress-version/version-%s/' ) ),
							sanitize_title( '5.5.2' )
						)
					);
					?>
				</p>
				<p>
					<?php
					printf(
						/* translators: 1: WordPress version number, 2: Plural number of bugs. */
						_n(
							'<strong>Version %1$s</strong> addressed %2$s bug.',
							'<strong>Version %1$s</strong> addressed %2$s bugs.',
							44
						),
						'5.5.1',
						number_format_i18n( 44 )
					);
					?>
					<?php
					printf(
						/* translators: %s: HelpHub URL. */
						__( 'For more information, see <a href="%s">the release notes</a>.' ),
						sprintf(
							/* translators: %s: WordPress version. */
							esc_url( __( 'https://wordpress.org/support/wordpress-version/version-%s/' ) ),
							sanitize_title( '5.5.1' )
						)
=======
		<div class="about__section has-2-columns">
			<div class="column is-edge-to-edge has-accent-background-color">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='660' height='818' viewbox='0 0 660 818' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='99' y='178' width='132' height='132' fill='%23F4EFE1'/%3E%3Crect x='231' y='310' width='99' height='99' fill='%2344141E'/%3E%3Crect x='330' y='409' width='132' height='132' fill='%23F4EFE1'/%3E%3Crect x='462' y='541' width='99' height='99' fill='%2344141E'/%3E%3C/svg%3E" alt="" />
				</div>
			</div>
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Block Editor Improvements' ); ?></h2>
				<p>
					<?php _e( 'This enhancement-focused update introduces over 150 new features and usability improvements, including improved large image support for uploading non-optimized, high-resolution pictures taken from your smartphone or other high-quality cameras. Combined with larger default image sizes, pictures always look their best.' ); ?>
				</p>

				<p>
					<?php _e( 'Accessibility improvements include the integration of block editor styles in the admin interface. These improved styles fix many accessibility issues: color contrast on form fields and buttons, consistency between editor and admin interfaces, new snackbar notices, standardizing to the default WordPress color scheme, and the introduction of Motion to make interacting with your blocks feel swift and natural. For people who use a keyboard to navigate the dashboard, the block editor now has a Navigation mode. This lets you jump from block to block without tabbing through every part of the block controls.' ); ?>
				</p>
			</div>
		</div>

		<div class="about__section has-2-columns">
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Expanded Design Flexibility' ); ?></h2>
				<p>
					<?php
					printf(
						/* translators: %s: The current WordPress version number. */
						__( 'WordPress %s adds even more robust tools for creating amazing designs.' ),
						$display_version
					);
					?>
				</p>
				<ul>
					<li><?php _e( 'The new Group block lets you easily divide your page into colorful sections' ); ?></li>
					<li><?php _e( 'The Columns block now supports fixed column widths' ); ?></li>
					<li><?php _e( 'The new Predefined layouts make it a cinch to arrange content into advanced designs' ); ?></li>
					<li><?php _e( 'Heading blocks now offer controls for text color' ); ?></li>
					<li><?php _e( 'Additional style options allow you to set your preferred style for any block that supports this feature' ); ?></li>
				</ul>
			</div>
			<div class="column is-edge-to-edge has-accent-background-color">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='500' height='500' viewbox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='75' y='200' width='150' height='75' fill='%2344141E'/%3E%3Crect x='175' y='75' width='50' height='100' fill='%2385273B'/%3E%3Crect x='75' y='75' width='75' height='100' fill='%23F4EFE1'/%3E%3Crect x='250' y='200' width='175' height='75' fill='%2344141E'/%3E%3Crect x='350' y='75' width='75' height='100' fill='%2385273B'/%3E%3Crect x='250' y='75' width='75' height='100' fill='%23F4EFE1'/%3E%3Crect x='75' y='375' width='150' height='50' fill='%2344141E'/%3E%3Crect x='175' y='300' width='50' height='50' fill='%2385273B'/%3E%3Crect x='75' y='300' width='75' height='50' fill='%23F4EFE1'/%3E%3Crect x='250' y='372.5' width='175' height='52.5' fill='%2344141E'/%3E%3Crect x='350' y='300' width='75' height='50' fill='%2385273B'/%3E%3Crect x='250' y='300' width='75' height='50' fill='%23F4EFE1'/%3E%3C/svg%3E%0A" alt="">
				</div>
			</div>
		</div>

		<div class="about__section has-2-columns has-subtle-background-color">
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Introducing Twenty Twenty' ); ?></h2>
				<p><?php _e( 'As the block editor celebrates its first birthday, we are proud that Twenty Twenty is designed with flexibility at its core. Show off your services or products with a combination of columns, groups, and media blocks. Set your content to wide or full alignment for dynamic and engaging layouts. Or let your thoughts be the star with a centered content column!' ); ?></p>

				<p>
					<?php
					printf(
						/* translators: %s: Link to the Inter font website. */
						__( 'As befits a theme called Twenty Twenty, clarity and readability is also a big focus. The theme includes the typeface <a href="%s">Inter</a>, designed by Rasmus Andersson. Inter comes in a Variable Font version, a first for default themes, which keeps load times short by containing all weights and styles of Inter in just two font files.' ),
						'https://rsms.me/inter/'
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					);
					?>
				</p>
			</div>
<<<<<<< HEAD
		</div>

		<hr />

		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _e( 'Speed' ); ?></h2>
				<p><strong><?php _e( 'Posts and pages feel faster, thanks to lazy-loaded images.' ); ?></strong></p>
				<p><?php _e( 'Images give your story a lot of impact, but they can sometimes make your site seem slow.' ); ?></p>
				<p><?php _e( 'In WordPress 5.5, images wait to load until they’re just about to scroll into view. The technical term is ‘lazy loading’.' ); ?></p>
				<p><?php _e( 'On mobile, lazy loading can also keep browsers from loading files meant for other devices. That can save your readers money on data — and help preserve battery life.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _ex( 'Search', 'sitemap' ); ?></h2>
				<p><strong><?php _e( 'Say hello to your new sitemap.' ); ?></strong></p>
				<p><?php _e( 'WordPress sites work well with search engines.' ); ?></p>
				<p><?php _e( 'Now, by default, WordPress 5.5 includes an XML sitemap that helps search engines discover your most important pages from the very minute you go live.' ); ?></p>
				<p><?php _e( 'So more people will find your site sooner, giving you more time to engage, retain and convert them to subscribers, customers or whatever fits your definition of success.' ); ?></p>
=======
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="https://s.w.org/images/core/5.3/twentytwenty-mobile.png" alt="" />
				</div>
			</div>
		</div>

		<div class="about__section has-subtle-background-color">
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="https://s.w.org/images/core/5.3/twentytwenty-desktop.png" alt="" />
				</div>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			</div>
		</div>

		<hr />

<<<<<<< HEAD
		<div class="about__section has-2-columns has-accent-background-color is-wider-right">
			<div class="column">
				<h2><?php _e( 'Security' ); ?></h2>
				<p><strong><?php _e( 'Auto-updates for Plugins and Themes' ); ?></strong></p>
				<p><?php _e( 'Now you can set plugins and themes to update automatically — or not! — in the WordPress admin. So you always know your site is running the latest code available.' ); ?></p>
				<p><?php _e( 'You can also turn auto-updates on or off for each plugin or theme you have installed — all on the same screens you’ve always used.' ); ?></p>
				<p><strong><?php _e( 'Update by uploading ZIP files' ); ?></strong></p>
				<p><?php _e( 'If updating plugins and themes manually is your thing, now that’s easier too — just upload a ZIP file.' ); ?></p>
			</div>
			<div class="column about__image is-vertically-aligned-center">
				<figure aria-labelledby="about-security" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/auto-updates-poster.png">
						<source src="https://s.w.org/images/core/5.5/auto-updates.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/auto-updates.webm" type="video/webm" />
					</video>
					<figcaption id="about-security" class="screen-reader-text"><?php _e( 'Video: Installed plugin screen, which shows a new column, Automatic Updates. In this column are buttons that say "Enable auto-updates". When clicked, the auto-updates feature is turned on for that plugin, and the button switches to say "Disable auto-updates".' ); ?></figcaption>
				</figure>
			</div>
		</div>

		<hr />

		<div class="about__section has-subtle-background-color">
			<div class="column">
				<h2><?php _e( 'Highlights from the block editor' ); ?></h2>
				<p><?php _e( 'Once again, the latest WordPress release packs a long list of exciting new features for the block editor. For example:' ); ?></p>
			</div>
		</div>
		<div class="about__section has-2-columns has-subtle-background-color">
			<div class="column about__image is-vertically-aligned-center">
				<figure aria-labelledby="about-block-pattern" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/block-patterns-poster.png">
						<source src="https://s.w.org/images/core/5.5/block-patterns.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/block-patterns.webm" type="video/webm" />
					</video>
					<figcaption id="about-block-pattern" class="screen-reader-text"><?php _e( 'Video: In the editor, the block inserter shows two tabs, Blocks and Patterns. The Patterns tab is selected. There are different block layouts in this tab. After scrolling through options including buttons and columns, a pattern called "Large header with a heading" is chosen. This adds a cover block, which is customized with a photo and the name of the WordPress 5.5 jazz musician.' ); ?></figcaption>
				</figure>
				<hr />
				<figure aria-labelledby="about-image-editor" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/inline-image-editing-poster.png">
						<source src="https://s.w.org/images/core/5.5/inline-image-editing.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/inline-image-editing-1.webm" type="video/webm" />
					</video>
					<figcaption id="about-image-editor" class="screen-reader-text"><?php _e( 'Video: An image is added with an image block. In the block toolbar, an icon called "Crop" is selected, which changes the toolbar to show image resizing tools. First, zoom is used to zoom into the center of the image. Next, aspect ratio is clicked. This shows a dropdown of common aspect ratios. Square is chosen, and the image is moved within the new square outline. The crop is completed by clicking "Apply."' ); ?></figcaption>
				</figure>
			</div>
			<div class="column">
				<h3><?php _e( 'Block patterns' ); ?></h3>
				<p><?php _e( 'New block patterns make it simple and fun to create complex, beautiful layouts, using combinations of text and media that you can mix and match to fit your story.' ); ?></p>
				<p><?php _e( 'You will also find block patterns in a wide variety of plugins and themes, with more added all the time. Pick any of them from a single place — just click and go!' ); ?></p>
				<h3><?php _e( 'Inline image editing' ); ?></h3>
				<p><?php _e( 'Crop, rotate, and zoom your photos right from the image block. If you spend a lot of time on images, this could save you hours!' ); ?></p>

				<h3><?php _e( 'The New Block Directory' ); ?></h3>
				<p><?php _e( 'Now it’s easier than ever to find the block you need. The new block directory is built right into the block editor, so you can install new block types to your site without ever leaving the editor.' ); ?></p>

				<h3><?php _e( 'And so much more.' ); ?></h3>
				<p><?php _e( 'The highlights above are a tiny fraction of the new block editor features you’ve just installed. Open the block editor and enjoy!' ); ?></p>
			</div>
		</div>

		<hr />

		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _e( 'Accessibility' ); ?></h2>
				<p><?php _e( 'Every release adds improvements to the accessible publishing experience, and that remains true for WordPress 5.5.' ); ?></p>
				<p><?php _e( 'Now you can copy links in media screens and modal dialogs with a button, instead of trying to highlight a line of text.' ); ?></p>
				<p><?php _e( 'You can also move meta boxes with the keyboard, and edit images in WordPress with your assistive device, as it can read you the instructions in the image editor.' ); ?></p>
=======
		<div class="about__section has-3-columns">
			<h2 class="is-section-header"><?php _e( 'Improvements for Everyone' ); ?></h2>

			<div class="column">
				<h3><?php _e( 'Automatic Image Rotation' ); ?></h3>
				<p><?php _e( 'Your images will be correctly rotated upon upload according to the embedded orientation data. This feature was first proposed nine years ago and made possible through the perserverance of many dedicated contributors.' ); ?></p>
			</div>
			<div class="column">
				<h3><?php _e( 'Site Health Checks' ); ?></h3>
				<p><?php _e( 'The improvements introduced in 5.3 make it even easier to identify issues. Expanded recommendations highlight areas that may need troubleshooting on your site from the Health Check screen.' ); ?></p>
			</div>
			<div class="column">
				<h3><?php _e( 'Admin Email Verification' ); ?></h3>
				<p><?php _e( 'You’ll now be periodically asked to confirm that your admin email address is up to date when you log in as an administrator. This reduces the chance of getting locked out of your site if you change your email address.' ); ?></p>
			</div>
		</div>

		<div class="about__section">
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='1000' height='498' viewbox='0 0 1000 498' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='865.463' y='36.8596' width='133.8' height='132.326' fill='%23942F44'/%3E%3Crect x='865.463' y='180.98' width='133.8' height='132.326' fill='%23942F44'/%3E%3Crect x='866.2' y='328.05' width='133.8' height='132.694' fill='%23942F44'/%3E%3Crect y='331.736' width='405.455' height='134.169' fill='%234E1521'/%3E%3Crect y='36.8596' width='405.455' height='129.008' fill='%234E1521'/%3E%3Crect y='184.298' width='387.025' height='133.8' fill='%234E1521'/%3E%3Crect x='719.13' y='34.6479' width='133.8' height='428.677' fill='%23BD3854'/%3E%3Crect x='571.323' y='18.4297' width='133.8' height='423.885' fill='%23BD3854'/%3E%3Crect x='423.516' y='35.0164' width='133.8' height='425.728' fill='%23BD3854'/%3E%3C/svg%3E" alt="" />
				</div>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			</div>
		</div>

		<hr />

<<<<<<< HEAD
		<div class="about__section has-subtle-background-color has-2-columns">
			<header class="is-section-header">
				<h2><?php _e( 'For developers' ); ?></h2>
				<p><?php _e( '5.5 also brings a big box of changes just for developers.' ); ?></p>
			</header>
			<div class="column">
				<h3><?php _e( 'Server-side registered blocks in the REST API' ); ?></h3>
				<p><?php _e( 'The addition of block types endpoints means that JavaScript apps (like the block editor) can retrieve definitions for any blocks registered on the server.' ); ?></p>
			</div>
			<div class="column">
				<h3><?php _e( 'Dashicons' ); ?></h3>
				<p><?php _e( 'The Dashicons library has received its final update in 5.5. It adds 39 block editor icons along with 26 others.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-subtle-background-color has-2-columns">
			<div class="column">
				<h3><?php _e( 'Defining environments' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: 'wp_get_environment_type' function name. */
						__( 'WordPress now has a standardized way to define a site’s environment type (staging, production, etc). Retrieve that type with %s and execute only the appropriate code.' ),
						'<code>wp_get_environment_type()</code>'
					);
					?>
				</p>
			</div>
			<div class="column">
				<h3><?php _e( 'Passing data to template files' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %1$s: 'get_header' function name, %2$s: 'get_template_part' function name, %3$s: '$args' variable name. */
						__( 'The template loading functions (%1$s, %2$s, etc.) have a new %3$s argument. So now you can pass an entire array’s worth of data to those templates.' ),
						'<code>get_header()</code>',
						'<code>get_template_part()</code>',
						'<code>$args</code>'
=======
		<div class="about__section has-2-columns has-subtle-background-color">
			<h2 class="is-section-header"><?php _e( 'For Developers' ); ?></h2>

			<div class="column">
				<h3><?php _e( 'Date/Time Component Fixes' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: Link to the date/time developer notes. */
						__( 'Developers can now work with <a href="%s">dates and timezones</a> in a more reliable way. Date and time functionality has received a number of new API functions for unified timezone retrieval and PHP interoperability, as well as many bug fixes.' ),
						'https://make.wordpress.org/core/2019/09/23/date-time-improvements-wp-5-3/'
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					);
					?>
				</p>
			</div>
<<<<<<< HEAD
		</div>

		<div class="about__section has-subtle-background-color">
			<div class="column">
				<h3><?php _e( 'More changes for developers' ); ?></h3>
				<ul>
					<li><?php _e( 'The PHPMailer library just got a major update, going from version 5.2.27 to 6.1.6.' ); ?></li>
					<li>
						<?php
						printf(
							/* translators: %s: 'redirect_guess_404_permalink' function name. */
							__( 'Now get more fine-grained control of %s.' ),
							'<code>redirect_guess_404_permalink()</code>'
						);
						?>
					</li>
					<li>
						<?php
						printf(
							/* translators: %s: 'wp_opcache_invalidate' function name. */
							__( 'Sites that use PHP’s OPcache will see more reliable cache invalidation, thanks to the new %s function during updates (including to plugins and themes).' ),
							'<code>wp_opcache_invalidate()</code>'
						);
						?>
					</li>
					<li><?php _e( 'Custom post types associated with the category taxonomy can now opt-in to supporting the default term.' ); ?></li>
					<li>
						<?php
						printf(
							/* translators: %s: 'register_taxonomy' function name. */
							__( 'Default terms can now be specified for custom taxonomies in %s.' ),
							'<code>register_taxonomy()</code>'
						);
						?>
					</li>
					<li>
						<?php
						printf(
							/* translators: %s: 'register_meta' function name. */
							__( 'The REST API now officially supports specifying default metadata values through %s.' ),
							'<code>register_meta()</code>'
						);
						?>
					</li>
					<li><?php _e( 'You will find updated versions of these bundled libraries: SimplePie, Twemoji, Masonry, imagesLoaded, getID3, Moment.js, and clipboard.js.' ); ?></li>
				</ul>
			</div>
		</div>

		<hr class="is-small" />

		<div class="about__section">
			<div class="column">
				<h3><?php _e( 'Check the Field Guide for more!' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: WordPress 5.5 Field Guide link. */
						__( 'There’s a lot more for developers to love in WordPress 5.5. To discover more and learn how to make these changes shine on your sites, themes, plugins and more, check the <a href="%s">WordPress 5.5 Field Guide.</a>' ),
						'https://make.wordpress.org/core/wordpress-5-5-field-guide/'
=======
			<div class="column">
				<h3><?php _e( 'PHP 7.4 Compatibility' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: Link to the PHP 7 developer notes. */
						__( 'WordPress 5.3 aims to fully support PHP 7.4. This release contains <a href="%s">multiple changes</a> to remove deprecated functionality and ensure compatibility. WordPress continues to encourage all users to run the latest and greatest versions of PHP.' ),
						'https://make.wordpress.org/core/2019/10/11/wordpress-and-php-7-4/'
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					);
					?>
				</p>
			</div>
		</div>

		<hr />

		<div class="return-to-dashboard">
			<?php if ( current_user_can( 'update_core' ) && isset( $_GET['updated'] ) ) : ?>
				<a href="<?php echo esc_url( self_admin_url( 'update-core.php' ) ); ?>">
					<?php is_multisite() ? _e( 'Return to Updates' ) : _e( 'Return to Dashboard &rarr; Updates' ); ?>
				</a> |
			<?php endif; ?>
			<a href="<?php echo esc_url( self_admin_url() ); ?>"><?php is_blog_admin() ? _e( 'Go to Dashboard &rarr; Home' ) : _e( 'Go to Dashboard' ); ?></a>
		</div>
	</div>
<?php

<<<<<<< HEAD
require_once ABSPATH . 'wp-admin/admin-footer.php';
=======
include( ABSPATH . 'wp-admin/admin-footer.php' );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// These are strings we may use to describe maintenance/security releases, where we aim for no new strings.
return;

__( 'Maintenance Release' );
__( 'Maintenance Releases' );

__( 'Security Release' );
__( 'Security Releases' );

__( 'Maintenance and Security Release' );
__( 'Maintenance and Security Releases' );

/* translators: %s: WordPress version number. */
__( '<strong>Version %s</strong> addressed one security issue.' );
/* translators: %s: WordPress version number. */
__( '<strong>Version %s</strong> addressed some security issues.' );

/* translators: 1: WordPress version number, 2: Plural number of bugs. */
_n_noop(
	'<strong>Version %1$s</strong> addressed %2$s bug.',
	'<strong>Version %1$s</strong> addressed %2$s bugs.'
);

/* translators: 1: WordPress version number, 2: Plural number of bugs. Singular security issue. */
_n_noop(
	'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bug.',
	'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bugs.'
);

/* translators: 1: WordPress version number, 2: Plural number of bugs. More than one security issue. */
_n_noop(
	'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
	'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.'
);

/* translators: %s: Documentation URL. */
__( 'For more information, see <a href="%s">the release notes</a>.' );
