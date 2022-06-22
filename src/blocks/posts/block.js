/**
 * BLOCK: Kadence Latest Posts
 *
 * Registering a block with Gutenberg.
 */

/**
 * Import Icons
 */
import { postsIcon } from '@kadence/icons';

/**
 * Import Css
 */
import './editor.scss';
import './style.scss';

import edit from './edit';
import metadata from './block.json';


/**
 * Internal block libraries
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kadence/posts', {
	...metadata,
	icon: {
		src: postsIcon,
	},
	edit,
	save() {
		return null;
	},
} );
