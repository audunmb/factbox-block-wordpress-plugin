/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	transforms: {
		from: [
		/*	{
				type: 'block',
				blocks: [ 'core/group' ],
				__experimentalConvert( blocks ) {
					
					// Clone the Blocks to be Grouped
					// Failing to create new block references causes the original blocks
					// to be replaced in the switchToBlockType call thereby meaning they
					// are removed both from their original location and within the
					// new group block.
					const groupInnerBlocks = blocks.map( ( block ) => {
						return createBlock(
							block.name,
							block.attributes,
							block.innerBlocks
						);
					} );

					return createBlock(
						'wp-create-block/factbox', {},
						groupInnerBlocks
					);
				},
			},*/
		{
            type: 'block',
            blocks: [ 'core/group' ],
            transform: ( attributes, innerBlocks ) => {
                return createBlock(
                    'create-block/factbox',
                    attributes,
                    innerBlocks
                );
            },
        },
		],
		to: [
		{
            type: 'block',
            blocks: [ 'core/group' ],
            transform: ( attributes, innerBlocks ) => {
                return createBlock(
                    'core/group',
                    attributes,
                    innerBlocks
                );
            },
        },
		]
		
		},
} );
