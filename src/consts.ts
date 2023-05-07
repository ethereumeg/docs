export const SITE = {
	title: 'EthereumEG Docs',
	description: 'Documentation for Ethereum Event Gardeners (EthereumEG)',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'Documentation for Ethereum Event Gardeners (EthereumEG)',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/ethereumeg/docs/tree/main/`;

export const COMMUNITY_INVITE_URL = `https://ethevents.club`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About us': [
			{ text: 'gm, wanderer!', link: 'en/introduction' },
			{ text: 'Manifesto', link: 'en/manifesto' },
			{ text: 'Vision and goals', link: 'en/goals'},
			{ text: 'Bootstrapping stages', link: 'en/bootstrapping'},
			{ text: 'Projects overview', link: 'en/projects' },
			{ text: 'Terminology', link: 'en/terminology'},
			{ text: 'History', link: 'en/history'},		
		],
		'Members': [
			{ text: 'Code of conduct', link: 'en/code-of-conduct'},
			{ text: 'Founders', link: 'en/founders' },
			{ text: 'Become a gardener!', link: 'en/join-us'},
		],
		'Projects': [
			{ text: 'chronicle', link: 'en/projects/chronicle' },
			{ text: 'ethevents.xyz', link: 'en/projects/etheventsxyz' },
			{ text: 'confeth', link: 'en/projects/confeth' },
			{ text: 'ETHEUnite', link: 'en/projects/etheunite' },
		],
	},
};
