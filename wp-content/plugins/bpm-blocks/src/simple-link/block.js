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
registerBlockType( 'bpm-blocks/simple-link', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'bpm-blocks - Simple Link' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'bpm-blocks — Simple link' ),
		__( 'from https://medium.com/@eudestwt/how-to-make-an-editable-wordpress-gutenberg-block-e8641b3e4b75' ),
		__( 'create-guten-block' ),
	],
	attributes: {
        link_text: {
            selector: 'a', // tag a
            source: 'children',  // children of a, to bind the link text
        },
        link_url: {
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
		let link_text = props.attributes.link_text // To bind attribute link_text
        let link_url = props.attributes.link_url // To bind attribute link_url

        function onChangeContentURL ( content ) {
            props.setAttributes({link_url: content})
        }

        function onChangeContentName ( content ) {
            props.setAttributes({link_text: content})
        }

		// Creates a <p class='wp-block-cgb-block-bpm-blocks'></p>.
		return (
			<div id="block-editable-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                <p>Sample Link Block</p>
                <label>Name:</label>
                <RichText
                    className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentName} // onChange event callback
                    value={link_text} // Binding
                    placeholder="Name of the link"
                />
                <label>URL:</label>
                <RichText
                    format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                    className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentURL} // onChange event callback
                    value={link_url} // Binding
                    placeholder="URL of the link"
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
			<a href={props.attributes.link_url}>{props.attributes.link_text}</a>


		);
	},
} );
