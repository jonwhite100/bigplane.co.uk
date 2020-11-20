//  Import CSS.
import './editor.scss';
import './style.scss';

( function( blocks, editor, i18n, element, components, _ ) {
	var el = element.createElement;
	var RichText = editor.RichText;
	// var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'bpm-blocks/bpm-section-block-content', {
		title: i18n.__( 'Section with title and content', 'bpm-blocks' ),
		icon: 'smiley',
		category: 'text',
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			ingredients: {
				type: 'array',
				source: 'children',
				selector: '.ingredients',
			},
			instructions: {
				type: 'array',
				source: 'children',
				selector: '.steps',
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;
			// this is the backend setup
			return (
				el( 'div', { className: props.className },
					el( RichText, {
						tagName: 'h2',
						inline: true,
						placeholder: i18n.__( 'Put your title here', 'bpm-blocks' ),
						value: attributes.title,
						onChange: function( value ) {
							props.setAttributes( { title: value } );
						},
					} ),
					el( 'h3', {}, i18n.__( 'The list', 'bpm-blocks' ) ),
					el( RichText, {
						tagName: 'ul',
						multiline: 'li',
						placeholder: i18n.__( 'Add your list here', 'bpm-blocks' ),
						value: attributes.ingredients,
						onChange: function( value ) {
							props.setAttributes( { ingredients: value } );
						},
						className: 'ul-bpm-block',
					} ),
					el( 'h3', {}, i18n.__( 'Instructionss', 'bpm-blocks' ) ),
					el( RichText, {
						tagName: 'div',
						inline: false,
						placeholder: i18n.__( 'Your text here', 'bpm-blocks' ),
						value: attributes.instructions,
						onChange: function( value ) {
							props.setAttributes( { instructions: value } );
						},
					} )
				)
			);
		},
		save: function( props ) {
			var attributes = props.attributes;
			// bpm - this is output to the front end
			return (
				el( 'section', { className: props.className },
					el( 'div', { className: 'container' },
						el( 'div', { className: 'row' },
							el( 'div', { className: 'col-md-4' },
								el( RichText.Content, {
									tagName: 'h2',
									value: attributes.title,
									className: 'display-4 text-primary'
								} ),
							),
							el( 'div', { className: 'col-md-8' },
								// el( 'h3', {}, i18n.__( 'Ingredients are for', 'bpm-blocks' ) ),
								el( RichText.Content, {
									tagName: 'ul', className: 'ul-bpm-block', value: attributes.ingredients
								} ),
								// el( 'h3', {}, i18n.__( 'Instructions some people', 'bpm-blocks' ) ),
								el( RichText.Content, {
									tagName: 'div', className: 'steps', value: attributes.instructions
								} ),
							),
						),
					),
				)
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
);
