import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';
import deprecated from './deprecated';
const { name } = metadata;
import { spacerIcon } from '@kadence/icons';
import { _x } from '@wordpress/i18n';

/**
 * Import Css
 */
import './style.scss';

export { metadata, name };

registerBlockType('kadence/spacer', {
	getEditWrapperProps( { blockAlignment } ) {
		if ( 'full' === blockAlignment || 'wide' === blockAlignment || 'center' === blockAlignment ) {
			return { 'data-align': blockAlignment };
		}
	},
	...metadata,
	title: _x( 'Spacer / Divider', 'block title', 'kadence-blocks' ),
	keywords: [
		__( 'spacer', 'kadence-blocks' ),
		__( 'divider', 'kadence-blocks' ),
		__( 'separator', 'kadence-blocks' ),
		'KB',
	],
	icon: {
		src: spacerIcon,
	},
	transforms,
	deprecated,
	edit,
	save,
	example: {
		attributes: {
			spacerHeight: 4,
			dividerColor: '#2B6CB0',
		}
	}
});
