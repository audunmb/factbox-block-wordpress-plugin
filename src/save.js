/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, AlignmentToolbar } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();
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
export default Save;


