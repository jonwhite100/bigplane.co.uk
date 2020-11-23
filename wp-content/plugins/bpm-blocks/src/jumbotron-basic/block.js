/**
 * BLOCK: bpm-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;
import { RichText } from '@wordpress/block-editor';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'bpm-blocks/jumbotron-basic', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'bpm-blocks - Jumbotron Basic' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'bpm-blocks — Jumbotron Basic' ),
		__( 'Jumbotron with background, left & right columns and base' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		jumbotron_h1: {
			type: 'string',
			source: 'text',
			selector: 'h1',
		},
		jumbotron_h2: {
			type: 'string',
			source: 'text',
			selector: 'h2',
		},
		jumbotron_p: {
			type: 'string',
			source: 'text',
			selector: 'p',
		},
        jumbotron_btn_text: {
            selector: 'a', // tag a
            source: 'children',  // children of a, to bind the link text
        },
        jumbotron_btn_url: {
            selector: 'a',  // tag a
            source: 'attribute', // attribute of the tag
            attribute: 'href', // attribute href, to bind the href of the link
        },
    },
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
        let jumbotron_h1 = props.attributes.jumbotron_h1
        let jumbotron_h2 = props.attributes.jumbotron_h2
        let jumbotron_p = props.attributes.jumbotron_p
        let jumbotron_btn_text = props.attributes.jumbotron_btn_text // To bind attribute jumbotron_btn_text
		let jumbotron_btn_url = props.attributes.jumbotron_btn_url // To bind attribute jumbotron_btn_url

		function onChangeContentJumbotronH1 ( content ) {
            props.setAttributes({jumbotron_h1: content})
        }
		function onChangeContentJumbotronH2 ( content ) {
            props.setAttributes({jumbotron_h2: content})
        }
		function onChangeContentJumbotronP ( content ) {
            props.setAttributes({jumbotron_p: content})
        }
		function onChangeContentURL ( content ) {
            props.setAttributes({jumbotron_btn_url: content})
        }
        function onChangeContentName ( content ) {
            props.setAttributes({jumbotron_btn_text: content})
        }

		return (
			<div id="block-editable-box" class="bpm-editor-block"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
				<label>What's the H1?</label>
				<RichText
					format = 'string'
					className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
					onChange={onChangeContentJumbotronH1} // onChange event callback
					value={jumbotron_h1} // Binding
					placeholder="H1 text"
				/>
				<label>What's the H2?</label>
				<RichText
					format = 'string'
					className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
					onChange={onChangeContentJumbotronH2} // onChange event callback
					value={jumbotron_h2} // Binding
					placeholder="H1 text"
				/>
				<label>What's the p tag?</label>
				<RichText
					format = 'string'
					className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
					onChange={onChangeContentJumbotronP} // onChange event callback
					value={jumbotron_p} // Binding
					placeholder="H1 text"
				/>

                <label>CTA button text:</label>
                <RichText
                    className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentName} // onChange event callback
                    value={jumbotron_btn_text} // Binding
                    placeholder="Name of the link"
                />
                <label>CTA button URL:</label>
                <RichText
                    format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                    className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentURL} // onChange event callback
                    value={jumbotron_btn_url} // Binding
                    placeholder="URL of the link"
                />
				<label>Select the image for the right side</label>
				<InnerBlocks
					allowedBlocks={['core/image']}
				/>
            </div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div class="jumbotron">
				<div class="jumbotron-bg"></div>
				<div class="jumbotron-main">
					<div class="container">
						<div class="row">
							<div class="col-md-6 jumbotron-text">
							<p class="">{props.attributes.jumbotron_p}</p>
							<h1 class="animated fadeInDown">{props.attributes.jumbotron_h1}</h1>
							<h2 class="animated fadeInDown">{props.attributes.jumbotron_h2}</h2>
								<p class="animated fadeInUpBig">
									<a href={props.attributes.jumbotron_btn_url} class="btn btn-lg btn-primary btn-pulse">{props.attributes.jumbotron_btn_text}</a>
								</p>
							</div>
							<div class="col-md-6 jumbotron-img">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
				<div class="jumbotron-base">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 70" class="jumbotron-base-curve"><polygon points="1280 70 0 70 0 0"/></svg>
				</div>
			</div>
		);
	},
} );
