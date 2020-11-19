/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
<<<<<<< HEAD
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { URLInput } from '@wordpress/block-editor';
=======
const { __ } = wp.i18n;
const { Component } = wp.element;
const { IconButton } = wp.components;
const { URLInput } = wp.editor;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

class InsertPageButton extends Component {
	constructor() {
		super( ...arguments );
		this.toggle = this.toggle.bind( this );
		this.submitLink = this.submitLink.bind( this );
		this.state = {
			expanded: false,
		};
	}

	toggle() {
		this.setState( { expanded: ! this.state.expanded } );
	}

	submitLink( event ) {
		event.preventDefault();
		this.toggle();
	}

	render() {
		const { url, onChange } = this.props;
		const { expanded } = this.state;
<<<<<<< HEAD
		const buttonLabel = url
			? __( 'Change Inserted Page', 'insert-page' )
			: __( 'Insert Page', 'insert-page' );

		return (
			<div className="editor-url-input__button block-editor-url-input__button block-editor-insert-page__button">
				<Button
=======
		const buttonLabel = url ? __( 'Change Inserted Page', 'insert-page' ) : __( 'Insert Page', 'insert-page' );

		return (
			<div className="editor-url-input__button block-editor-url-input__button block-editor-insert-page__button">
				<IconButton
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					icon="admin-links"
					label={ buttonLabel }
					onClick={ this.toggle }
					className={ classnames( 'components-toolbar__control', {
						'is-active': url,
					} ) }
				/>
<<<<<<< HEAD
				{ expanded && (
=======
				{ expanded &&
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
					<form
						className="editor-url-input__button-modal block-editor-url-input__button-modal"
						onSubmit={ this.submitLink }
					>
						<div className="editor-url-input__button-modal-line block-editor-url-input__button-modal-line">
<<<<<<< HEAD
							<Button
=======
							<IconButton
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
								className="editor-url-input__back block-editor-url-input__back"
								icon="arrow-left-alt"
								label={ __( 'Close' ) }
								onClick={ this.toggle }
							/>
<<<<<<< HEAD
							<URLInput
								value={ url || '' }
								onChange={ onChange }
							/>
							<Button
=======
							<URLInput value={ url || '' } onChange={ onChange } />
							<IconButton
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
								icon="editor-break"
								label={ __( 'Insert' ) }
								type="submit"
							/>
						</div>
					</form>
<<<<<<< HEAD
				) }
=======
				}
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
			</div>
		);
	}
}

/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/url-input/README.md
 */
export default InsertPageButton;
