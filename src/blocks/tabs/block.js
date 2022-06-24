/**
 * BLOCK: Kadence Tabs
 */

/**
 * Register sub blocks.
 */
 import './tab/block.js';

 /**
 * Import Css
 */
  import './style.scss';
/**
 * Import Icons
 */
import { blockTabsIcon } from '@kadence/icons';
/**
 * Import attributes
 */
import metadata from './block.json';
import classnames from 'classnames';
import { times } from 'lodash';
import { IconRender } from '@kadence/components';
import { Fragment } from '@wordpress/element';
import {
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';

/**
 * Import edit
 */
import edit from './edit';
/**
 * Import save
 */
import save from './save';
/**
 * Import Css
 */
// import './style.scss';
// import './editor.scss';

/**
 * Internal block libraries
 */
import { __, sprintf } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

function kt_stripStringRender( string ) {
	return string.toLowerCase().replace( /[^0-9a-z-]/g, '' );
}

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'kadence/tabs', {
	...metadata,
	title: __( 'Tabs', 'kadence-blocks' ),
	keywords: [
		__( 'tabs', 'kadence-blocks' ),
		__( 'tab', 'kadence-blocks' ),
		'KB',
	],
	icon: {
		src: blockTabsIcon,
	},
	getEditWrapperProps( { blockAlignment } ) {
		if ( 'full' === blockAlignment || 'wide' === blockAlignment || 'center' === blockAlignment ) {
			return { 'data-align': blockAlignment };
		}
	},
	edit,
	save,
	deprecated: [
		{
			attributes: {
				uniqueID: {
					type: 'string',
					default: '',
				},
				tabCount: {
					type: 'number',
					default: 3,
				},
				layout: {
					type: 'string',
					default: 'tabs',
				},
				mobileLayout: {
					type: 'string',
					default: 'inherit',
				},
				tabletLayout: {
					type: 'string',
					default: 'inherit',
				},
				currentTab: {
					type: 'number',
					default: 1,
				},
				minHeight: {
					type: 'number',
					default: '',
				},
				maxWidth: {
					type: 'number',
					default: '',
				},
				contentBgColor: {
					type: 'string',
					default: '',
				},
				contentBorderColor: {
					type: 'string',
					default: '',
				},
				contentBorder: {
					type: 'array',
					default: [ 1, 1, 1, 1 ],
				},
				contentBorderControl: {
					type: 'string',
					default: 'linked',
				},
				innerPadding: {
					type: 'array',
					default: [ 20, 20, 20, 20 ],
				},
				innerPaddingControl: {
					type: 'string',
					default: 'linked',
				},
				innerPaddingM: {
					type: 'array',
				},
				tabAlignment: {
					type: 'string',
					default: 'left',
				},
				blockAlignment: {
					type: 'string',
					default: 'none',
				},
				titles: {
					type: 'array',
					default: [ {
						text: __( 'Tab 1', 'kadence-blocks' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
						subText: '',
						anchor: '',
					}, {
						text: __( 'Tab 2', 'kadence-blocks' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
						subText: '',
						anchor: '',
					}, {
						text: __( 'Tab 3', 'kadence-blocks' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
						subText: '',
						anchor: '',
					} ],
				},
				iSize: {
					type: 'number',
					default: 14,
				},
				titleColor: {
					type: 'string',
				},
				titleColorHover: {
					type: 'string',
				},
				titleColorActive: {
					type: 'string',
				},
				titleBg: {
					type: 'string',
				},
				titleBgHover: {
					type: 'string',
				},
				titleBgActive: {
					type: 'string',
					default: '#ffffff',
				},
				titleBorder: {
					type: 'string',
				},
				titleBorderHover: {
					type: 'string',
				},
				titleBorderActive: {
					type: 'string',
				},
				titleBorderWidth: {
					type: 'array',
				},
				titleBorderControl: {
					type: 'string',
					default: 'individual',
				},
				titleBorderRadius: {
					type: 'array',
				},
				titleBorderRadiusControl: {
					type: 'string',
					default: 'individual',
				},
				titlePadding: {
					type: 'array',
				},
				titlePaddingControl: {
					type: 'string',
					default: 'individual',
				},
				titleMargin: {
					type: 'array',
				},
				titleMarginControl: {
					type: 'string',
					default: 'individual',
				},
				size: {
					type: 'number',
				},
				sizeType: {
					type: 'string',
					default: 'px',
				},
				lineHeight: {
					type: 'number',
				},
				lineType: {
					type: 'string',
					default: 'px',
				},
				tabSize: {
					type: 'number',
				},
				tabLineHeight: {
					type: 'number',
				},
				mobileSize: {
					type: 'number',
				},
				mobileLineHeight: {
					type: 'number',
				},
				letterSpacing: {
					type: 'number',
				},
				typography: {
					type: 'string',
					default: '',
				},
				googleFont: {
					type: 'boolean',
					default: false,
				},
				loadGoogleFont: {
					type: 'boolean',
					default: true,
				},
				fontSubset: {
					type: 'string',
					default: '',
				},
				fontVariant: {
					type: 'string',
					default: '',
				},
				fontWeight: {
					type: 'string',
					default: 'regular',
				},
				textTransform: {
					type: 'string',
				},
				fontStyle: {
					type: 'string',
					default: 'normal',
				},
				startTab: {
					type: 'number',
					default: '',
				},
				showPresets: {
					type: 'bool',
					default: true,
				},
				subtitleFont: {
					type: 'array',
					default: [ {
						size: [ '', '', '' ],
						sizeType: 'px',
						lineHeight: [ '', '', '' ],
						lineType: 'px',
						letterSpacing: '',
						textTransform: '',
						family: '',
						google: false,
						style: '',
						weight: '',
						variant: '',
						subset: '',
						loadGoogle: true,
						padding: [ 0, 0, 0, 0 ],
						paddingControl: 'linked',
						margin: [ 0, 0, 0, 0 ],
						marginControl: 'linked',
					} ],
				},
				enableSubtitle: {
					type: 'bool',
					default: false,
				},
				widthType: {
					type: 'string',
					default: 'normal',
				},
				tabWidth: {
					type: 'array',
					default: [ 4, '', '' ],
				},
				gutter: {
					type: 'array',
					default: [ 10, '', '' ],
				},
			},
			save: ( props ) => {
				const { attributes: { tabCount, blockAlignment, currentTab, mobileLayout, layout, tabletLayout, uniqueID, titles, iSize, maxWidth, tabAlignment, startTab, enableSubtitle, widthType, tabWidth } } = props;
				const layoutClass = ( ! layout ? 'tabs' : layout );
				const tabLayoutClass = ( ! tabletLayout ? 'inherit' : tabletLayout );
				const mobileLayoutClass = ( ! mobileLayout ? 'inherit' : mobileLayout );
				const accordionClass = ( ( mobileLayout && 'accordion' === mobileLayout ) || ( tabletLayout && 'accordion' === tabletLayout ) ? 'kt-create-accordion' : '' );
				const classId = ( ! uniqueID ? 'notset' : uniqueID );
				const theTabAlignment = ( tabAlignment ? tabAlignment : 'left' );
				const classes = classnames( `align${ blockAlignment }` );
				const activeTab = ( startTab ? startTab : currentTab );
				const innerClasses = classnames( `kt-tabs-wrap kt-tabs-id${ classId } kt-tabs-has-${ tabCount }-tabs kt-active-tab-${ activeTab } kt-tabs-layout-${ layoutClass } kt-tabs-tablet-layout-${ tabLayoutClass } kt-tabs-mobile-layout-${ mobileLayoutClass } kt-tab-alignment-${ theTabAlignment } ${ accordionClass }` );
				const renderTitles = ( index ) => {
					const backupAnchor = `tab-${ ( titles[ index ] && titles[ index ].text ? kt_stripStringRender( titles[ index ].text.toString() ) : kt_stripStringRender( __( 'Tab' ) + ( 1 + index ) ) ) }`;
					return (
						<Fragment>
							<li id={ ( titles[ index ] && titles[ index ].anchor ? titles[ index ].anchor : backupAnchor ) } className={ `kt-title-item kt-title-item-${ 1 + index } kt-tabs-svg-show-${ ( titles[ index ] && titles[ index ].onlyIcon ? 'only' : 'always' ) } kt-tabs-icon-side-${ ( titles[ index ] && titles[ index ].iconSide ? titles[ index ].iconSide : 'right' ) } kt-tab-title-${ ( 1 + index === activeTab ? 'active' : 'inactive' ) }${ ( enableSubtitle ? ' kb-tabs-have-subtitle' : '' ) }` }>
								<a href={ `#${ ( titles[ index ] && titles[ index ].anchor ? titles[ index ].anchor : backupAnchor ) }` } data-tab={ 1 + index } className={ `kt-tab-title kt-tab-title-${ 1 + index } ` } >
									{ titles[ index ] && titles[ index ].icon && 'right' !== titles[ index ].iconSide && (
										<IconRender className={ `kt-tab-svg-icon kt-tab-svg-icon-${ titles[ index ].icon } kt-title-svg-side-${ titles[ index ].iconSide }` } name={ titles[ index ].icon } size={ ( ! iSize ? '14' : iSize ) } htmltag="span" />
									) }
									{ ( ! enableSubtitle || ( undefined !== titles[ index ] && undefined === titles[ index ].subText ) || ( undefined !== titles[ index ] && undefined !== titles[ index ].subText && '' === titles[ index ].subText ) ) && (
										<RichText.Content
											tagName="span"
											value={ ( titles[ index ] && titles[ index ].text ? titles[ index ].text : sprintf( __( 'Tab %d' ), ( 1 + index ) ) ) }
											className={ 'kt-title-text' }
										/>
									) }
									{ enableSubtitle && titles[ index ] && undefined !== titles[ index ].subText && '' !== titles[ index ].subText && (
										<div className="kb-tab-titles-wrap">
											<RichText.Content
												tagName="span"
												value={ ( titles[ index ] && titles[ index ].text ? titles[ index ].text : sprintf( __( 'Tab %d' ), ( 1 + index ) ) ) }
												className={ 'kt-title-text' }
											/>
											<RichText.Content
												tagName="span"
												value={ titles[ index ].subText }
												className={ 'kt-title-sub-text' }
											/>
										</div>
									) }
									{ titles[ index ] && titles[ index ].icon && 'right' === titles[ index ].iconSide && (
										<IconRender className={ `kt-tab-svg-icon kt-tab-svg-icon-${ titles[ index ].icon } kt-title-svg-side-${ titles[ index ].iconSide }` } name={ titles[ index ].icon } size={ ( ! iSize ? '14' : iSize ) } htmltag="span" />
									) }
								</a>
							</li>
						</Fragment>
					);
				};
				return (
					<div className={ classes } >
						<div className={ innerClasses } style={ {
							maxWidth: ( maxWidth ? maxWidth + 'px' : 'none' ),
						} }>
							<ul className={ `kt-tabs-title-list${ ( 'tabs' === layout && widthType === 'percent' ? ' kb-tabs-list-columns kb-tab-title-columns-' + tabWidth[ 0 ] : '' ) }` }>
								{ times( tabCount, n => renderTitles( n ) ) }
							</ul>
							<div className="kt-tabs-content-wrap">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				);
			},
		},
		{
			attributes: {
				uniqueID: {
					type: 'string',
					default: '',
				},
				tabCount: {
					type: 'number',
					default: 3,
				},
				layout: {
					type: 'string',
					default: 'tabs',
				},
				mobileLayout: {
					type: 'string',
					default: 'inherit',
				},
				tabletLayout: {
					type: 'string',
					default: 'inherit',
				},
				currentTab: {
					type: 'number',
					default: 1,
				},
				minHeight: {
					type: 'number',
					default: '',
				},
				maxWidth: {
					type: 'number',
					default: '',
				},
				contentBgColor: {
					type: 'string',
					default: '',
				},
				contentBorderColor: {
					type: 'string',
					default: '',
				},
				contentBorder: {
					type: 'array',
					default: [ 1, 1, 1, 1 ],
				},
				contentBorderControl: {
					type: 'string',
					default: 'linked',
				},
				innerPadding: {
					type: 'array',
					default: [ 20, 20, 20, 20 ],
				},
				innerPaddingControl: {
					type: 'string',
					default: 'linked',
				},
				innerPaddingM: {
					type: 'array',
				},
				tabAlignment: {
					type: 'string',
					default: 'left',
				},
				blockAlignment: {
					type: 'string',
					default: 'none',
				},
				titles: {
					type: 'array',
					default: [ {
						text: __( 'Tab 1' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
					}, {
						text: __( 'Tab 2' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
					}, {
						text: __( 'Tab 3' ),
						icon: '',
						iconSide: 'right',
						onlyIcon: false,
					} ],
				},
				iSize: {
					type: 'number',
					default: 14,
				},
				titleColor: {
					type: 'string',
				},
				titleColorHover: {
					type: 'string',
				},
				titleColorActive: {
					type: 'string',
				},
				titleBg: {
					type: 'string',
				},
				titleBgHover: {
					type: 'string',
				},
				titleBgActive: {
					type: 'string',
					default: '#ffffff',
				},
				titleBorder: {
					type: 'string',
				},
				titleBorderHover: {
					type: 'string',
				},
				titleBorderActive: {
					type: 'string',
				},
				titleBorderWidth: {
					type: 'array',
				},
				titleBorderControl: {
					type: 'string',
					default: 'individual',
				},
				titleBorderRadius: {
					type: 'array',
				},
				titleBorderRadiusControl: {
					type: 'string',
					default: 'individual',
				},
				titlePadding: {
					type: 'array',
				},
				titlePaddingControl: {
					type: 'string',
					default: 'individual',
				},
				titleMargin: {
					type: 'array',
				},
				titleMarginControl: {
					type: 'string',
					default: 'individual',
				},
				size: {
					type: 'number',
				},
				sizeType: {
					type: 'string',
					default: 'px',
				},
				lineHeight: {
					type: 'number',
				},
				lineType: {
					type: 'string',
					default: 'px',
				},
				tabSize: {
					type: 'number',
				},
				tabLineHeight: {
					type: 'number',
				},
				mobileSize: {
					type: 'number',
				},
				mobileLineHeight: {
					type: 'number',
				},
				letterSpacing: {
					type: 'number',
				},
				typography: {
					type: 'string',
					default: '',
				},
				googleFont: {
					type: 'boolean',
					default: false,
				},
				loadGoogleFont: {
					type: 'boolean',
					default: true,
				},
				fontSubset: {
					type: 'string',
					default: '',
				},
				fontVariant: {
					type: 'string',
					default: '',
				},
				fontWeight: {
					type: 'string',
					default: 'regular',
				},
				fontStyle: {
					type: 'string',
					default: 'normal',
				},
			},
			save: ( { attributes } ) => {
				const { tabCount, blockAlignment, currentTab, mobileLayout, layout, tabletLayout, uniqueID, titles, iSize, maxWidth, tabAlignment } = attributes;
				const layoutClass = ( ! layout ? 'tabs' : layout );
				const tabLayoutClass = ( ! tabletLayout ? 'inherit' : tabletLayout );
				const mobileLayoutClass = ( ! mobileLayout ? 'inherit' : mobileLayout );
				const accordionClass = ( ( mobileLayout && 'accordion' === mobileLayout ) || ( tabletLayout && 'accordion' === tabletLayout ) ? 'kt-create-accordion' : '' );
				const classId = ( ! uniqueID ? 'notset' : uniqueID );
				const classes = classnames( `align${ blockAlignment }` );
				const innerClasses = classnames( `kt-tabs-wrap kt-tabs-id${ classId } kt-tabs-has-${ tabCount }-tabs kt-active-tab-${ currentTab } kt-tabs-layout-${ layoutClass } kt-tabs-tablet-layout-${ tabLayoutClass } kt-tabs-mobile-layout-${ mobileLayoutClass } kt-tab-alignment-${ tabAlignment } ${ accordionClass }` );
				const renderTitles = ( index ) => {
					return (
						<Fragment>
							<li id={ `tab-${ ( titles[ index ] && titles[ index ].text ? kt_stripStringRender( titles[ index ].text.toString() ) : kt_stripStringRender( __( 'Tab' ) + ( 1 + index ) ) ) }` } className={ `kt-title-item kt-title-item-${ 1 + index } kt-tabs-svg-show-${ ( titles[ index ] && titles[ index ].onlyIcon ? 'only' : 'always' ) } kt-tabs-icon-side-${ ( titles[ index ] && titles[ index ].iconSide ? titles[ index ].iconSide : 'right' ) } kt-tab-title-${ ( 1 + index === currentTab ? 'active' : 'inactive' ) }` }>
								<a href={ `#tab-${ ( titles[ index ] && titles[ index ].text ? kt_stripStringRender( titles[ index ].text.toString() ) : kt_stripStringRender( __( 'Tab' ) + ( 1 + index ) ) ) }` } data-tab={ 1 + index } className={ `kt-tab-title kt-tab-title-${ 1 + index } ` } >
									{ titles[ index ] && titles[ index ].icon && 'right' !== titles[ index ].iconSide && (
										<IconRender className={ `kt-tab-svg-icon kt-tab-svg-icon-${ titles[ index ].icon } kt-title-svg-side-${ titles[ index ].iconSide }` } name={ titles[ index ].icon } size={ ( ! iSize ? '14' : iSize ) } />
									) }
									<RichText.Content
										tagName="span"
										value={ ( titles[ index ] && titles[ index ].text ? titles[ index ].text : sprintf( __( 'Tab %d' ), ( 1 + index ) ) ) }
										className={ 'kt-title-text' }
									/>
									{ titles[ index ] && titles[ index ].icon && 'right' === titles[ index ].iconSide && (
										<IconRender className={ `kt-tab-svg-icon kt-tab-svg-icon-${ titles[ index ].icon } kt-title-svg-side-${ titles[ index ].iconSide }` } name={ titles[ index ].icon } size={ ( ! iSize ? '14' : iSize ) } />
									) }
								</a>
							</li>
						</Fragment>
					);
				};
				return (
					<div className={ classes } >
						<div className={ innerClasses } style={ {
							maxWidth: ( maxWidth ? maxWidth + 'px' : 'none' ),
						} }>
							<ul className="kt-tabs-title-list">
								{ times( tabCount, n => renderTitles( n ) ) }
							</ul>
							<div className="kt-tabs-content-wrap">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				);
			},
		},
	],
} );
