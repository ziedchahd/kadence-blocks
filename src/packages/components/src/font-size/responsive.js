/**
 * Responsive Range Component
 *
 */

/**
 * Internal block libraries
 */
 import { useSelect, useDispatch } from '@wordpress/data';
 import { useState, useRef } from '@wordpress/element';
 import { __ } from '@wordpress/i18n';
 import { map, isEqual } from 'lodash';
 import FontSizeControl from './index';
 import { capitalizeFirstLetter, FONT_SIZES_MAP } from '@kadence/helpers';
 import { undo } from '@wordpress/icons';
 import {
	 Dashicon,
	 Button,
	 ButtonGroup,
 } from '@wordpress/components';
 import { settings, link, linkOff } from '@wordpress/icons';
 /**
  * Build the Measure controls
  * @returns {object} Measure settings.
  */
 export default function ResponsiveFontSizeControl( {
		label,
		onChange,
		onChangeTablet,
		onChangeMobile,
		mobileValue,
		tabletValue,
		value,
		units = [ 'px', 'em', 'rem' ],
		onUnit,
		options = FONT_SIZES_MAP,
		step = 1,
		max = 200,
		min = 0,
		unit = 'px',
		defaultValue = [ '', '', '' ],
		reset = true,
	 } ) {
	 const ref = useRef();
	 const [ deviceType, setDeviceType ] = useState( 'Desktop' );
	 const theDevice = useSelect( ( select ) => {
		 return select( 'kadenceblocks/data' ).getPreviewDeviceType();
	 }, [] );
	 if ( theDevice !== deviceType ) {
		 setDeviceType( theDevice );
	 }
	 const {
		 setPreviewDeviceType,
	 } = useDispatch( 'kadenceblocks/data' );
	 const customSetPreviewDeviceType = ( device ) => {
		 setPreviewDeviceType( capitalizeFirstLetter( device ) );
		 setDeviceType( capitalizeFirstLetter( device ) );
	 };
	 const devices = [
		 {
			 name: 'Desktop',
			 title: <Dashicon icon="desktop" />,
			 itemClass: 'kb-desk-tab',
		 },
		 {
			 name: 'Tablet',
			 title: <Dashicon icon="tablet" />,
			 itemClass: 'kb-tablet-tab',
		 },
		 {
			 name: 'Mobile',
			 key: 'mobile',
			 title: <Dashicon icon="smartphone" />,
			 itemClass: 'kb-mobile-tab',
		 },
	 ];
	 const currentValue = [ value, tabletValue, mobileValue ];
	 const onReset = () => {
		if ( typeof reset === 'function' ){
			reset();
		} else {
			onChange( defaultValue[0] );
			onChangeTablet( defaultValue[1] );
			onChangeMobile( defaultValue[2] );
		}
	}
	 const output = {};
	 output.Mobile = (
		 <FontSizeControl
			 value={ ( mobileValue ? mobileValue : undefined ) }
			 onChange={ ( size ) => onChangeMobile( size ) }
			 options={ options }
			 onUnit={ onUnit }
			 defaultValue={ defaultValue[2] }
			 units={ units }
			 step={ step }
			 max={ max }
			 min={ min }
			 unit={ unit }
		 />
	 );
	 output.Tablet = (
		 <FontSizeControl
			value={ ( tabletValue ? tabletValue : undefined ) }
			onChange={ ( size ) => onChangeTablet( size ) }
			options={ options }
			onUnit={ onUnit }
			defaultValue={ defaultValue[1] }
			units={ units }
			step={ step }
			max={ max }
			min={ min }
			unit={ unit }
		 />
	 );
	 output.Desktop = (
		<FontSizeControl
			value={ ( value ? value : undefined ) }
			onChange={ ( size ) => onChange( size ) }
			options={ options }
			onUnit={ onUnit }
			defaultValue={ defaultValue[0] }
			units={ units }
			step={ step }
			max={ max }
			min={ min }
			unit={ unit }
		/>
	 );
	 return [
		 onChange && onChangeTablet && onChangeMobile && (
			 <div ref={ ref } className={ 'components-base-control kb-responsive-font-size-control kadence-font-size-control' }>
					<div
						className={ 'kadence-font-size-control__header kadence-component__header' }
					>
					 { label && (
						 <div className="kadence-component__header__title kadence-font-size__title">
							 <label className="components-base-control__label">{ label }</label>
							 { reset && (
								 <div className='title-reset-wrap'>
									 <Button
										 className="is-reset is-single"
										 label='reset'
										 isSmall
										 disabled={ ( ( isEqual( defaultValue, currentValue ) ) ? true : false ) }
										 icon={ undo }
										 onClick={ () => onReset() }
									 />
								 </div>
							 ) }
						 </div>
					 ) }
					 <ButtonGroup className="kb-responsive-options kb-measure-responsive-options" aria-label={ __( 'Device', 'kadence-blocks' ) }>
						 { map( devices, ( { name, key, title, itemClass } ) => (
							 <Button
								 key={ key }
								 className={ `kb-responsive-btn ${ itemClass }${ name === deviceType ? ' is-active' : '' }` }
								 isSmall
								 aria-pressed={ deviceType === name }
								 onClick={ () => customSetPreviewDeviceType( name ) }
							 >
								 { title }
							 </Button>
						 ) ) }
					 </ButtonGroup>
				 </div>
				 <div className="kb-responsive-border-control-inner">
					 { ( output[ deviceType ] ? output[ deviceType ] : output.Desktop ) }
				 </div>
			 </div>
		 ),
	 ];
 }
 