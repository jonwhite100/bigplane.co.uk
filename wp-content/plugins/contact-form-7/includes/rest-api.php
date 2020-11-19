<?php

add_action( 'rest_api_init', 'wpcf7_rest_api_init', 10, 0 );

function wpcf7_rest_api_init() {
	$namespace = 'contact-form-7/v1';

	register_rest_route( $namespace,
		'/contact-forms',
		array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => 'wpcf7_rest_get_contact_forms',
<<<<<<< HEAD
				'permission_callback' => function() {
					if ( current_user_can( 'wpcf7_read_contact_forms' ) ) {
						return true;
					} else {
						return new WP_Error( 'wpcf7_forbidden',
							__( "You are not allowed to access contact forms.", 'contact-form-7' ),
							array( 'status' => 403 )
						);
					}
				},
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
			array(
				'methods' => WP_REST_Server::CREATABLE,
				'callback' => 'wpcf7_rest_create_contact_form',
<<<<<<< HEAD
				'permission_callback' => function() {
					if ( current_user_can( 'wpcf7_edit_contact_forms' ) ) {
						return true;
					} else {
						return new WP_Error( 'wpcf7_forbidden',
							__( "You are not allowed to create a contact form.", 'contact-form-7' ),
							array( 'status' => 403 )
						);
					}
				},
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
		)
	);

	register_rest_route( $namespace,
		'/contact-forms/(?P<id>\d+)',
		array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => 'wpcf7_rest_get_contact_form',
<<<<<<< HEAD
				'permission_callback' => function( WP_REST_Request $request ) {
					$id = (int) $request->get_param( 'id' );

					if ( current_user_can( 'wpcf7_edit_contact_form', $id ) ) {
						return true;
					} else {
						return new WP_Error( 'wpcf7_forbidden',
							__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
							array( 'status' => 403 )
						);
					}
				},
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
			array(
				'methods' => WP_REST_Server::EDITABLE,
				'callback' => 'wpcf7_rest_update_contact_form',
<<<<<<< HEAD
				'permission_callback' => function( WP_REST_Request $request ) {
					$id = (int) $request->get_param( 'id' );

					if ( current_user_can( 'wpcf7_edit_contact_form', $id ) ) {
						return true;
					} else {
						return new WP_Error( 'wpcf7_forbidden',
							__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
							array( 'status' => 403 )
						);
					}
				},
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
			array(
				'methods' => WP_REST_Server::DELETABLE,
				'callback' => 'wpcf7_rest_delete_contact_form',
<<<<<<< HEAD
				'permission_callback' => function( WP_REST_Request $request ) {
					$id = (int) $request->get_param( 'id' );

					if ( current_user_can( 'wpcf7_delete_contact_form', $id ) ) {
						return true;
					} else {
						return new WP_Error( 'wpcf7_forbidden',
							__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
							array( 'status' => 403 )
						);
					}
				},
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
		)
	);

	register_rest_route( $namespace,
		'/contact-forms/(?P<id>\d+)/feedback',
		array(
			array(
				'methods' => WP_REST_Server::CREATABLE,
				'callback' => 'wpcf7_rest_create_feedback',
<<<<<<< HEAD
				'permission_callback' => '__return_true',
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
		)
	);

	register_rest_route( $namespace,
		'/contact-forms/(?P<id>\d+)/refill',
		array(
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => 'wpcf7_rest_get_refill',
<<<<<<< HEAD
				'permission_callback' => '__return_true',
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			),
		)
	);
}

function wpcf7_rest_get_contact_forms( WP_REST_Request $request ) {
<<<<<<< HEAD
=======
	if ( ! current_user_can( 'wpcf7_read_contact_forms' ) ) {
		return new WP_Error( 'wpcf7_forbidden',
			__( "You are not allowed to access contact forms.", 'contact-form-7' ),
			array( 'status' => 403 ) );
	}

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	$args = array();

	$per_page = $request->get_param( 'per_page' );

	if ( null !== $per_page ) {
		$args['posts_per_page'] = (int) $per_page;
	}

	$offset = $request->get_param( 'offset' );

	if ( null !== $offset ) {
		$args['offset'] = (int) $offset;
	}

	$order = $request->get_param( 'order' );

	if ( null !== $order ) {
		$args['order'] = (string) $order;
	}

	$orderby = $request->get_param( 'orderby' );

	if ( null !== $orderby ) {
		$args['orderby'] = (string) $orderby;
	}

	$search = $request->get_param( 'search' );

	if ( null !== $search ) {
		$args['s'] = (string) $search;
	}

	$items = WPCF7_ContactForm::find( $args );

	$response = array();

	foreach ( $items as $item ) {
		$response[] = array(
			'id' => $item->id(),
			'slug' => $item->name(),
			'title' => $item->title(),
			'locale' => $item->locale(),
		);
	}

	return rest_ensure_response( $response );
}

function wpcf7_rest_create_contact_form( WP_REST_Request $request ) {
	$id = (int) $request->get_param( 'id' );

	if ( $id ) {
		return new WP_Error( 'wpcf7_post_exists',
			__( "Cannot create existing contact form.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 400 )
		);
=======
			array( 'status' => 400 ) );
	}

	if ( ! current_user_can( 'wpcf7_edit_contact_forms' ) ) {
		return new WP_Error( 'wpcf7_forbidden',
			__( "You are not allowed to create a contact form.", 'contact-form-7' ),
			array( 'status' => 403 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$args = $request->get_params();
	$args['id'] = -1; // Create
	$context = $request->get_param( 'context' );
	$item = wpcf7_save_contact_form( $args, $context );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_cannot_save',
			__( "There was an error saving the contact form.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 500 )
		);
=======
			array( 'status' => 500 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$response = array(
		'id' => $item->id(),
		'slug' => $item->name(),
		'title' => $item->title(),
		'locale' => $item->locale(),
<<<<<<< HEAD
		'properties' => wpcf7_get_properties_for_api( $item ),
=======
		'properties' => $item->get_properties(),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		'config_errors' => array(),
	);

	if ( wpcf7_validate_configuration() ) {
		$config_validator = new WPCF7_ConfigValidator( $item );
		$config_validator->validate();

		$response['config_errors'] = $config_validator->collect_error_messages();

		if ( 'save' == $context ) {
			$config_validator->save();
		}
	}

	return rest_ensure_response( $response );
}

function wpcf7_rest_get_contact_form( WP_REST_Request $request ) {
	$id = (int) $request->get_param( 'id' );
	$item = wpcf7_contact_form( $id );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_not_found',
			__( "The requested contact form was not found.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 404 )
		);
=======
			array( 'status' => 404 ) );
	}

	if ( ! current_user_can( 'wpcf7_edit_contact_form', $id ) ) {
		return new WP_Error( 'wpcf7_forbidden',
			__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
			array( 'status' => 403 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$response = array(
		'id' => $item->id(),
		'slug' => $item->name(),
		'title' => $item->title(),
		'locale' => $item->locale(),
<<<<<<< HEAD
		'properties' => wpcf7_get_properties_for_api( $item ),
=======
		'properties' => $item->get_properties(),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	);

	return rest_ensure_response( $response );
}

function wpcf7_rest_update_contact_form( WP_REST_Request $request ) {
	$id = (int) $request->get_param( 'id' );
	$item = wpcf7_contact_form( $id );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_not_found',
			__( "The requested contact form was not found.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 404 )
		);
=======
			array( 'status' => 404 ) );
	}

	if ( ! current_user_can( 'wpcf7_edit_contact_form', $id ) ) {
		return new WP_Error( 'wpcf7_forbidden',
			__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
			array( 'status' => 403 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$args = $request->get_params();
	$context = $request->get_param( 'context' );
	$item = wpcf7_save_contact_form( $args, $context );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_cannot_save',
			__( "There was an error saving the contact form.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 500 )
		);
=======
			array( 'status' => 500 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$response = array(
		'id' => $item->id(),
		'slug' => $item->name(),
		'title' => $item->title(),
		'locale' => $item->locale(),
<<<<<<< HEAD
		'properties' => wpcf7_get_properties_for_api( $item ),
=======
		'properties' => $item->get_properties(),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		'config_errors' => array(),
	);

	if ( wpcf7_validate_configuration() ) {
		$config_validator = new WPCF7_ConfigValidator( $item );
		$config_validator->validate();

		$response['config_errors'] = $config_validator->collect_error_messages();

		if ( 'save' == $context ) {
			$config_validator->save();
		}
	}

	return rest_ensure_response( $response );
}

function wpcf7_rest_delete_contact_form( WP_REST_Request $request ) {
	$id = (int) $request->get_param( 'id' );
	$item = wpcf7_contact_form( $id );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_not_found',
			__( "The requested contact form was not found.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 404 )
		);
=======
			array( 'status' => 404 ) );
	}

	if ( ! current_user_can( 'wpcf7_delete_contact_form', $id ) ) {
		return new WP_Error( 'wpcf7_forbidden',
			__( "You are not allowed to access the requested contact form.", 'contact-form-7' ),
			array( 'status' => 403 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$result = $item->delete();

	if ( ! $result ) {
		return new WP_Error( 'wpcf7_cannot_delete',
			__( "There was an error deleting the contact form.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 500 )
		);
=======
			array( 'status' => 500 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$response = array( 'deleted' => true );

	return rest_ensure_response( $response );
}

function wpcf7_rest_create_feedback( WP_REST_Request $request ) {
<<<<<<< HEAD
	$url_params = $request->get_url_params();

	$item = null;

	if ( ! empty( $url_params['id'] ) ) {
		$item = wpcf7_contact_form( $url_params['id'] );
	}
=======
	$id = (int) $request->get_param( 'id' );
	$item = wpcf7_contact_form( $id );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_not_found',
			__( "The requested contact form was not found.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 404 )
		);
=======
			array( 'status' => 404 ) );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	}

	$result = $item->submit();

	$unit_tag = $request->get_param( '_wpcf7_unit_tag' );

	$response = array(
		'into' => '#' . wpcf7_sanitize_unit_tag( $unit_tag ),
		'status' => $result['status'],
		'message' => $result['message'],
<<<<<<< HEAD
		'posted_data_hash' => $result['posted_data_hash'],
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	);

	if ( 'validation_failed' == $result['status'] ) {
		$invalid_fields = array();

		foreach ( (array) $result['invalid_fields'] as $name => $field ) {
			$invalid_fields[] = array(
				'into' => 'span.wpcf7-form-control-wrap.'
					. sanitize_html_class( $name ),
				'message' => $field['reason'],
				'idref' => $field['idref'],
<<<<<<< HEAD
				'error_id' => sprintf(
					'%1$s-ve-%2$s',
					$unit_tag,
					$name
				),
			);
		}

		$response['invalid_fields'] = $invalid_fields;
	}

	$response = wpcf7_apply_filters_deprecated(
		'wpcf7_ajax_json_echo',
		array( $response, $result ),
		'5.2',
		'wpcf7_feedback_response'
	);

	$response = apply_filters( 'wpcf7_feedback_response', $response, $result );
=======
			);
		}

		$response['invalidFields'] = $invalid_fields;
	}

	$response = apply_filters( 'wpcf7_ajax_json_echo', $response, $result );
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

	return rest_ensure_response( $response );
}

function wpcf7_rest_get_refill( WP_REST_Request $request ) {
	$id = (int) $request->get_param( 'id' );
	$item = wpcf7_contact_form( $id );

	if ( ! $item ) {
		return new WP_Error( 'wpcf7_not_found',
			__( "The requested contact form was not found.", 'contact-form-7' ),
<<<<<<< HEAD
			array( 'status' => 404 )
		);
	}

	$response = wpcf7_apply_filters_deprecated(
		'wpcf7_ajax_onload',
		array( array() ),
		'5.2',
		'wpcf7_refill_response'
	);

	$response = apply_filters( 'wpcf7_refill_response', array() );

	return rest_ensure_response( $response );
}

function wpcf7_get_properties_for_api( WPCF7_ContactForm $contact_form ) {
	$properties = $contact_form->get_properties();

	$properties['form'] = array(
		'content' => (string) $properties['form'],
		'fields' => array_map(
			function( WPCF7_FormTag $form_tag ) {
				return array(
					'type' => $form_tag->type,
					'basetype' => $form_tag->basetype,
					'name' => $form_tag->name,
					'options' => $form_tag->options,
					'raw_values' => $form_tag->raw_values,
					'labels' => $form_tag->labels,
					'values' => $form_tag->values,
					'pipes' => $form_tag->pipes instanceof WPCF7_Pipes
						? $form_tag->pipes->to_array()
						: $form_tag->pipes,
					'content' => $form_tag->content,
				);
			},
			$contact_form->scan_form_tags()
		),
	);

	$properties['additional_settings'] = array(
		'content' => (string) $properties['additional_settings'],
		'settings' => array_filter( array_map(
			function( $setting ) {
				$pattern = '/^([a-zA-Z0-9_]+)[\t ]*:(.*)$/';

				if ( preg_match( $pattern, $setting, $matches ) ) {
					$name = trim( $matches[1] );
					$value = trim( $matches[2] );

					if ( in_array( $value, array( 'on', 'true' ), true ) ) {
						$value = true;
					} elseif ( in_array( $value, array( 'off', 'false' ), true ) ) {
						$value = false;
					}

					return array( $name, $value );
				}

				return false;
			},
			explode( "\n", $properties['additional_settings'] )
		) ),
	);

	return $properties;
}
=======
			array( 'status' => 404 ) );
	}

	$response = apply_filters( 'wpcf7_ajax_onload', array() );

	return rest_ensure_response( $response );
}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
