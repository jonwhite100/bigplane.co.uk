<?php

function wpcf7_l10n() {
	static $l10n = array();

	if ( ! empty( $l10n ) ) {
		return $l10n;
	}

	if ( ! is_admin() ) {
		return $l10n;
	}

	require_once( ABSPATH . 'wp-admin/includes/translation-install.php' );

	$api = translations_api( 'plugins', array(
		'slug' => 'contact-form-7',
		'version' => WPCF7_VERSION,
	) );

	if ( is_wp_error( $api )
	or empty( $api['translations'] ) ) {
		return $l10n;
	}

	foreach ( (array) $api['translations'] as $translation ) {
		if ( ! empty( $translation['language'] )
		and ! empty( $translation['english_name'] ) ) {
			$l10n[$translation['language']] = $translation['english_name'];
		}
	}

	return $l10n;
}

function wpcf7_is_valid_locale( $locale ) {
	$pattern = '/^[a-z]{2,3}(?:_[a-zA-Z_]{2,})?$/';
	return (bool) preg_match( $pattern, $locale );
}

function wpcf7_is_rtl( $locale = '' ) {
	static $rtl_locales = array(
		'ar' => 'Arabic',
		'ary' => 'Moroccan Arabic',
		'azb' => 'South Azerbaijani',
		'fa_IR' => 'Persian',
		'haz' => 'Hazaragi',
		'he_IL' => 'Hebrew',
		'ps' => 'Pashto',
		'ug_CN' => 'Uighur',
	);

	if ( empty( $locale )
	and function_exists( 'is_rtl' ) ) {
		return is_rtl();
	}

	if ( empty( $locale ) ) {
<<<<<<< HEAD
		$locale = determine_locale();
=======
		$locale = get_locale();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	return isset( $rtl_locales[$locale] );
}

<<<<<<< HEAD
function wpcf7_load_textdomain( $locale = '' ) {
	static $locales = array();

	if ( empty( $locales ) ) {
		$locales = array( determine_locale() );
	}

	$available_locales = array_merge(
		array( 'en_US' ),
		get_available_languages()
	);

	if ( ! in_array( $locale, $available_locales ) ) {
		$locale = $locales[0];
	}

	if ( $locale === end( $locales ) ) {
		return false;
	} else {
		$locales[] = $locale;
	}

	$domain = WPCF7_TEXT_DOMAIN;

	if ( is_textdomain_loaded( $domain ) ) {
		unload_textdomain( $domain );
	}

	$mofile = sprintf( '%s-%s.mo', $domain, $locale );

	$domain_path = path_join( WPCF7_PLUGIN_DIR, 'languages' );
	$loaded = load_textdomain( $domain, path_join( $domain_path, $mofile ) );

	if ( ! $loaded ) {
		$domain_path = path_join( WP_LANG_DIR, 'plugins' );
		load_textdomain( $domain, path_join( $domain_path, $mofile ) );
	}

	return true;
=======
function wpcf7_load_textdomain( $locale = null ) {
	global $l10n;

	$domain = 'contact-form-7';

	if ( ( is_admin() ? get_user_locale() : get_locale() ) === $locale ) {
		$locale = null;
	}

	if ( empty( $locale ) ) {
		if ( is_textdomain_loaded( $domain ) ) {
			return true;
		} else {
			return load_plugin_textdomain( $domain, false, $domain . '/languages' );
		}
	} else {
		$mo_orig = $l10n[$domain];
		unload_textdomain( $domain );

		$mofile = $domain . '-' . $locale . '.mo';
		$path = WP_PLUGIN_DIR . '/' . $domain . '/languages';

		if ( $loaded = load_textdomain( $domain, $path . '/'. $mofile ) ) {
			return $loaded;
		} else {
			$mofile = WP_LANG_DIR . '/plugins/' . $mofile;
			return load_textdomain( $domain, $mofile );
		}

		$l10n[$domain] = $mo_orig;
	}

	return false;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}
