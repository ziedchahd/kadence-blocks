/**
 * BLOCK: Kadence Google Maps
 */

const shades_of_grey = [
	{
		featureType: 'all',
		elementType: 'labels.text.fill',
		stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
	},
	{
		featureType: 'all',
		elementType: 'labels.text.stroke',
		stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
	},
	{ featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
	{ featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 20 }] },
	{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
	},
	{ featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 20 }] },
	{ featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 21 }] },
	{ featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 17 }] },
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }],
	},
	{ featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 18 }] },
	{ featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 16 }] },
	{ featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 19 }] },
	{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 17 }] },
];
const no_label_bright_colors = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [{ saturation: '32' }, { lightness: '-3' }, { visibility: 'on' }, { weight: '1.18' }],
	},
	{ featureType: 'administrative', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'landscape', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'landscape.man_made', elementType: 'all', stylers: [{ saturation: '-70' }, { lightness: '14' }] },
	{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'road', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'transit', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'water', elementType: 'all', stylers: [{ saturation: '100' }, { lightness: '-14' }] },
	{ featureType: 'water', elementType: 'labels', stylers: [{ visibility: 'off' }, { lightness: '12' }] },
];
const clean_interface = [
	{ featureType: 'all', elementType: 'labels.text', stylers: [{ color: '#878787' }] },
	{ featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
	{ featureType: 'landscape', elementType: 'all', stylers: [{ color: '#f9f5ed' }] },
	{ featureType: 'road.highway', elementType: 'all', stylers: [{ color: '#f5f5f5' }] },
	{ featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#c9c9c9' }] },
	{ featureType: 'water', elementType: 'all', stylers: [{ color: '#aee0f4' }] },
];
const midnight_commander = [
	{ featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
	{ featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }, { lightness: 13 }] },
	{ featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#000000' }] },
	{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [{ color: '#144b53' }, { lightness: 14 }, { weight: 1.4 }],
	},
	{ featureType: 'landscape', elementType: 'all', stylers: [{ color: '#08304b' }] },
	{ featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#0c4152' }, { lightness: 5 }] },
	{ featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#000000' }] },
	{ featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#0b434f' }, { lightness: 25 }] },
	{ featureType: 'road.arterial', elementType: 'geometry.fill', stylers: [{ color: '#000000' }] },
	{
		featureType: 'road.arterial',
		elementType: 'geometry.stroke',
		stylers: [{ color: '#0b3d51' }, { lightness: 16 }],
	},
	{ featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#000000' }] },
	{ featureType: 'transit', elementType: 'all', stylers: [{ color: '#146474' }] },
	{ featureType: 'water', elementType: 'all', stylers: [{ color: '#021019' }] },
];
const apple_maps_esque = [
	{ featureType: 'administrative.country', elementType: 'labels.text', stylers: [{ lightness: '29' }] },
	{
		featureType: 'administrative.province',
		elementType: 'labels.text.fill',
		stylers: [{ lightness: '-12' }, { color: '#796340' }],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.fill',
		stylers: [{ lightness: '15' }, { saturation: '15' }],
	},
	{
		featureType: 'landscape.man_made',
		elementType: 'geometry',
		stylers: [{ visibility: 'on' }, { color: '#fbf5ed' }],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [{ visibility: 'on' }, { color: '#fbf5ed' }],
	},
	{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{
		featureType: 'poi.attraction',
		elementType: 'all',
		stylers: [{ visibility: 'on' }, { lightness: '30' }, { saturation: '-41' }, { gamma: '0.84' }],
	},
	{ featureType: 'poi.attraction', elementType: 'labels', stylers: [{ visibility: 'on' }] },
	{ featureType: 'poi.business', elementType: 'all', stylers: [{ visibility: 'off' }] },
	{ featureType: 'poi.business', elementType: 'labels', stylers: [{ visibility: 'off' }] },
	{ featureType: 'poi.medical', elementType: 'geometry', stylers: [{ color: '#fbd3da' }] },
	{ featureType: 'poi.medical', elementType: 'labels', stylers: [{ visibility: 'on' }] },
	{ featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#b0e9ac' }, { visibility: 'on' }] },
	{ featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }] },
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{ hue: '#68ff00' }, { lightness: '-24' }, { gamma: '1.59' }],
	},
	{ featureType: 'poi.sports_complex', elementType: 'all', stylers: [{ visibility: 'on' }] },
	{
		featureType: 'poi.sports_complex',
		elementType: 'geometry',
		stylers: [{ saturation: '10' }, { color: '#c3eb9a' }],
	},
	{
		featureType: 'road',
		elementType: 'geometry.stroke',
		stylers: [{ visibility: 'on' }, { lightness: '30' }, { color: '#e7ded6' }],
	},
	{
		featureType: 'road',
		elementType: 'labels',
		stylers: [{ visibility: 'on' }, { saturation: '-39' }, { lightness: '28' }, { gamma: '0.86' }],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [{ color: '#ffe523' }, { visibility: 'on' }],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [{ visibility: 'on' }, { saturation: '0' }, { gamma: '1.44' }, { color: '#fbc28b' }],
	},
	{ featureType: 'road.highway', elementType: 'labels', stylers: [{ visibility: 'on' }, { saturation: '-40' }] },
	{ featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fed7a5' }] },
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [{ visibility: 'on' }, { gamma: '1.54' }, { color: '#fbe38b' }],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry.fill',
		stylers: [{ color: '#ffffff' }, { visibility: 'on' }, { gamma: '2.62' }, { lightness: '10' }],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry.stroke',
		stylers: [{ visibility: 'on' }, { weight: '0.50' }, { gamma: '1.04' }],
	},
	{ featureType: 'transit.station.airport', elementType: 'geometry.fill', stylers: [{ color: '#dee3fb' }] },
	{ featureType: 'water', elementType: 'geometry', stylers: [{ saturation: '46' }, { color: '#a4e1ff' }] },
];
const cobalt = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{ invert_lightness: true },
			{ saturation: 10 },
			{ lightness: 30 },
			{ gamma: 0.5 },
			{ hue: '#435158' },
		],
	},
];
const avocado = [
	{ featureType: 'water', elementType: 'geometry', stylers: [{ visibility: 'on' }, { color: '#aee2e0' }] },
	{ featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ color: '#abce83' }] },
	{ featureType: 'poi', elementType: 'geometry.fill', stylers: [{ color: '#769E72' }] },
	{ featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#7B8758' }] },
	{ featureType: 'poi', elementType: 'labels.text.stroke', stylers: [{ color: '#EBF4A4' }] },
	{ featureType: 'poi.park', elementType: 'geometry', stylers: [{ visibility: 'simplified' }, { color: '#8dab68' }] },
	{ featureType: 'road', elementType: 'geometry.fill', stylers: [{ visibility: 'simplified' }] },
	{ featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#5B5B3F' }] },
	{ featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ color: '#ABCE83' }] },
	{ featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
	{ featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#A4C67D' }] },
	{ featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#9BBF72' }] },
	{ featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#EBF4A4' }] },
	{ featureType: 'transit', stylers: [{ visibility: 'off' }] },
	{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [{ visibility: 'on' }, { color: '#87ae79' }],
	},
	{
		featureType: 'administrative',
		elementType: 'geometry.fill',
		stylers: [{ color: '#7f2200' }, { visibility: 'off' }],
	},
	{
		featureType: 'administrative',
		elementType: 'labels.text.stroke',
		stylers: [{ color: '#ffffff' }, { visibility: 'on' }, { weight: 4.1 }],
	},
	{ featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#495421' }] },
	{ featureType: 'administrative.neighborhood', elementType: 'labels', stylers: [{ visibility: 'off' }] },
];
const night_mode = [
	{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
	{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
	{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
	{ featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
	{ featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
	{ featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#263c3f' }] },
	{ featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#6b9a76' }] },
	{ featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
	{ featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }] },
	{ featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca5b3' }] },
	{ featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#746855' }] },
	{ featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#1f2835' }] },
	{ featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
	{ featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
	{ featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
	{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
	{ featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#515c6d' }] },
	{ featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#17263c' }] },
];

export default function snazzyMapStyles(styleName, customSnazzy = '') {
	if (styleName === 'shades_of_grey') {
		return shades_of_grey;
	} else if (styleName === 'no_label_bright_colors') {
		return no_label_bright_colors;
	} else if (styleName === 'clean_interface') {
		return clean_interface;
	} else if (styleName === 'midnight_commander') {
		return midnight_commander;
	} else if (styleName === 'apple_maps_esque') {
		return apple_maps_esque;
	} else if (styleName === 'cobalt') {
		return cobalt;
	} else if (styleName === 'avocado') {
		return avocado;
	} else if (styleName === 'night_mode') {
		return night_mode;
	} else if (styleName === 'custom' && customSnazzy !== '') {
		return JSON.parse(customSnazzy);
	}
	return [];
}
