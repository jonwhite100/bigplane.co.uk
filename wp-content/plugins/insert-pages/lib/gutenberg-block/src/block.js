/**
 * Block dependencies (npm packages).
 */
import classnames from 'classnames';

/**
 * WordPress block libraries.
 */
<<<<<<< HEAD
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { createElement } from '@wordpress/element';
import { BlockControls } from '@wordpress/editor';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { addQueryArgs } from '@wordpress/url';
import {
=======
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	createElement,
} = wp.element;
const {
	BlockControls,
	InspectorControls,
	URLInput,
} = wp.editor;
const {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	Dashicon,
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
<<<<<<< HEAD
	Toolbar,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';
=======
	ServerSideRender,
	Toolbar,
} = wp.components;
const {
	apiFetch,
} = wp;
const {
	addQueryArgs,
} = wp.url;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

/**
 * Internal dependencies.
 */
import InsertPageButton from './button';

/**
 * Register Insert Pages block.
 */
export default registerBlockType( 'insert-pages/block', {
	title: __( 'Insert Page', 'insert-page' ),
<<<<<<< HEAD
	description: __(
		'Insert a page, post, or custom post type.',
		'insert-page'
	),
=======
	description: __( 'Insert a page, post, or custom post type.', 'insert-page' ),
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
	category: 'widgets',
	icon: 'media-default',
	keywords: [
		__( 'insert', 'insert-page' ),
		__( 'embed', 'insert-page' ),
		__( 'shortcode', 'insert-page' ),
	],
	attributes: {
		url: {
			type: 'string',
			default: '',
		},
		page: {
			type: 'number',
			default: 0,
		},
		display: {
			type: 'string',
			default: 'title',
		},
		template: {
			type: 'string',
			default: '',
		},
		class: {
			type: 'string',
			default: '',
		},
		id: {
			type: 'string',
			default: '',
		},
		inline: {
			type: 'bool',
			default: false,
		},
		public: {
			type: 'bool',
			default: false,
		},
		querystring: {
			type: 'string',
			default: '',
		},
	},
<<<<<<< HEAD
	edit: ( props ) => {
		const onChangeLink = ( url, post ) => {
			props.setAttributes( {
				url: url,
				page: ( post && post.id ) || 0,
=======
	edit: props => {
		const onChangeLink = ( url, post ) => {
			props.setAttributes( {
				url: url,
				page: (post && post.id ) || 0,
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			} );
		};

		return [
			props.attributes.page > 0 ? (
				<ServerSideRender
					block="insert-pages/block"
<<<<<<< HEAD
					key="insert-pages/block"
					attributes={ props.attributes }
				/>
			) : (
				<h2 key="insert-pages/block">
					{ __( 'Choose a page to insert.', 'insert-page' ) }
				</h2>
			),
			!! props.isSelected && (
				<BlockControls key="controls">
					<Toolbar className="components-toolbar">
=======
					attributes={ props.attributes }
				/>
			) : (
				<h2>{ __( 'Choose a page to insert.', 'insert-page' ) }</h2>
			),
			!! props.isSelected && (
				<BlockControls key="controls">
					<Toolbar
						className="components-toolbar"
					>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						<InsertPageButton
							url={ props.attributes.url }
							onChange={ onChangeLink }
						/>
					</Toolbar>
				</BlockControls>
			),
			!! props.isSelected && (
				<InspectorControls key="inspector">
					<PanelBody title={ __( 'Insert Page', 'insert-page' ) }>
						<URLInput
							value={ props.attributes.url }
							onChange={ onChangeLink }
							autoFocus={ false }
							className="width-100"
						/>
					</PanelBody>
					<PanelBody title={ __( 'Settings', 'insert-page' ) }>
						<SelectControl
							label={ __( 'Display', 'insert-page' ) }
							value={ props.attributes.display }
							options={ [
<<<<<<< HEAD
								{
									label: __( 'Title', 'insert-page' ),
									value: 'title',
								},
								{
									label: __( 'Link', 'insert-page' ),
									value: 'link',
								},
								{
									label: __(
										'Excerpt with title',
										'insert-page'
									),
									value: 'excerpt',
								},
								{
									label: __(
										'Excerpt only (no title)',
										'insert-page'
									),
									value: 'excerpt-only',
								},
								{
									label: __( 'Content', 'insert-page' ),
									value: 'content',
								},
								{
									label: __(
										'Post Thumbnail',
										'insert-page'
									),
									value: 'post-thumbnail',
								},
								{
									label: __(
										'All (includes custom fields)',
										'insert-page'
									),
									value: 'all',
								},
								{
									label: __(
										'Use a custom template »',
										'insert-page'
									),
									value: 'custom',
								}, //TODOTODO
							] }
							onChange={ ( value ) =>
								props.setAttributes( { display: value } )
							}
						/>
						<TextControl
							label={ __(
								'Custom Template Filename',
								'insert-page'
							) }
							value={ props.attributes.template }
							onChange={ ( value ) =>
								props.setAttributes( { template: value } )
							}
							className={ classnames( 'custom-template', {
								hidden: props.attributes.display !== 'custom',
							} ) }
=======
								{ label: __( 'Title', 'insert-page' ), value: 'title' },
								{ label: __( 'Link', 'insert-page' ), value: 'link' },
								{ label: __( 'Excerpt with title', 'insert-page' ), value: 'excerpt' },
								{ label: __( 'Excerpt only (no title)', 'insert-page' ), value: 'excerpt-only' },
								{ label: __( 'Content', 'insert-page' ), value: 'content' },
								{ label: __( 'Post Thumbnail', 'insert-page' ), value: 'post-thumbnail' },
								{ label: __( 'All (includes custom fields)', 'insert-page' ), value: 'all' },
								{ label: __( 'Use a custom template »', 'insert-page' ), value: 'custom' }, //TODOTODO
							] }
							onChange={ value => props.setAttributes( { display: value } ) }
						/>
						<TextControl
							label={ __( 'Custom Template Filename', 'insert-page' ) }
							value={ props.attributes.template }
							onChange={ value => props.setAttributes( { template: value } ) }
							className={ classnames(
								'custom-template',
								{ 'hidden': props.attributes.display !== 'custom' },
							) }
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						/>
						<TextControl
							label={ __( 'Custom CSS Class', 'insert-page' ) }
							value={ props.attributes.class }
<<<<<<< HEAD
							onChange={ ( value ) =>
								props.setAttributes( { class: value } )
							}
=======
							onChange={ value => props.setAttributes( { class: value } ) }
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						/>
						<TextControl
							label={ __( 'Custom Element ID', 'insert-page' ) }
							value={ props.attributes.id }
<<<<<<< HEAD
							onChange={ ( value ) =>
								props.setAttributes( { id: value } )
							}
=======
							onChange={ value => props.setAttributes( { id: value } ) }
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						/>
						<TextControl
							label={ __( 'Custom Querystring', 'insert-page' ) }
							value={ props.attributes.querystring }
<<<<<<< HEAD
							onChange={ ( value ) =>
								props.setAttributes( { querystring: value } )
							}
						/>
						<ToggleControl
							label={ __( 'Inline?', 'insert-page' ) }
							help={
								props.attributes.inline
									? __(
											'Inserted page rendered in a <span>',
											'insert-page'
									  )
									: __(
											'Inserted page rendered in a <div>',
											'insert-page'
									  )
							}
							checked={ props.attributes.inline }
							onChange={ ( value ) =>
								props.setAttributes( { inline: value } )
							}
						/>
						<ToggleControl
							label={ __(
								'Reveal Private Pages?',
								'insert-page'
							) }
							help={
								props.attributes.public
									? __(
											'Anonymous users can see this inserted even if its status is private',
											'insert-page'
									  )
									: __(
											'If this page is private, only users with permission can see it',
											'insert-page'
									  )
							}
							checked={ props.attributes.public }
							onChange={ ( value ) =>
								props.setAttributes( { public: value } )
							}
=======
							onChange={ value => props.setAttributes( { querystring: value } ) }
						/>
						<ToggleControl
							label={ __( 'Inline?', 'insert-page' ) }
							help={ props.attributes.inline ? __( 'Inserted page rendered in a <span>', 'insert-page' ) : __( 'Inserted page rendered in a <div>', 'insert-page' ) }
							checked={ props.attributes.inline }
							onChange={ value => props.setAttributes( { inline: value } ) }
						/>
						<ToggleControl
							label={ __( 'Reveal Private Pages?', 'insert-page' ) }
							help={ props.attributes.public ? __( 'Anonymous users can see this inserted even if its status is private', 'insert-page' ) : __( 'If this page is private, only users with permission can see it', 'insert-page' ) }
							checked={ props.attributes.public }
							onChange={ value => props.setAttributes( { public: value } ) }
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
						/>
					</PanelBody>
				</InspectorControls>
			),
		];
	},
<<<<<<< HEAD
	save: ( props ) => {
=======
	save: props => {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
		// Rendering done server-side in block_render_callback().
		return null;
	},
} );
