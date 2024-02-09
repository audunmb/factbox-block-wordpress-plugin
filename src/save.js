/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, AlignmentToolbar } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save( {
	attributes: {
		expanderColor,
		customExpanderColor
	},
	style
} ) {

	const blockProps = useBlockProps.save( {
		style: {
			...style,
			'--expander-icon-color': expanderColor !== undefined
			            ? `var( --wp--preset--color--${ expanderColor } )`
				    : customExpanderColor,
		}
	} );
	const expandIcon = (
     <svg viewBox="-40 -40 180 180"><path d="M100 19.8L50 86.4 0 19.8"></path></svg>
	);
	return (
		<aside { ...blockProps }>
			<div class="fact-body"><InnerBlocks.Content /></div>
			<button onclick="this.previousElementSibling.classList.toggle('expanded');this.classList.toggle('expanded')" class="fact-expand"> { expandIcon } </button>
		</aside>
	);
};


