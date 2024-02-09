/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, AlignmentToolbar, InspectorControls, withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
 } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */ 
const Edit = ( {
	attributes: {
		customExpanderColor
	},
	expanderColor,
	setExpanderColor,
	setAttributes,
	style,
	clientId
	} ) => {
	const expandIcon = (
     <svg viewBox="-40 -40 180 180"><path d="M100 19.8L50 86.4 0 19.8"></path></svg>
	);
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	const blockProps = useBlockProps( {
	style: {
		...style,
		'--expander-icon-color': expanderColor.slug
			    ? `var( --wp--preset--color--${ expanderColor.slug } )`
			    : customExpanderColor,
		}
		}
	);
	
	const expanderColorDropdown = (
		<ColorGradientSettingsDropdown
		settings={ [ {
			label: __( 'Expander', 'factbox' ),
			colorValue: expanderColor.color || customExpanderColor,
			onColorChange: ( value ) => {
				setExpanderColor( value );

				setAttributes( {
					customExpanderColor: value
				} );
			}
		} ] }
		panelId={ clientId }
		hasColorsOrGradients={ false }
		disableCustomColors={ false }
		__experimentalIsRenderedInSidebar
		{ ...colorGradientSettings }
	/>
	);
	
	return (
		<>
		<InspectorControls group="color">
			{ expanderColorDropdown }
		</InspectorControls>
		<aside { ...blockProps }>
			<div class="fact-body"><InnerBlocks/></div>
			<button onclick="this.previousElementSibling.classList.toggle('expanded');this.classList.toggle('expanded')" class="fact-expand"> { expandIcon } </button>
		</aside>
		</>
	);
};

export default withColors( {
	expanderColor: 'expander-color'
} )( Edit );

