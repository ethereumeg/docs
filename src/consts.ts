export const SITE = {
	title: 'Ethereum EG Docs',
	description: 'Documentation for Ethereum Event Gardeners (EthereumEG)',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://pbs.twimg.com/profile_banners/1644000260828844035/1682999255/1500x500',
		alt:
			'Documentation for Ethereum Event Gardeners (EthereumEG)',
	},
	twitter: 'ethereumeg',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/ethereumeg/docs/tree/main/`;

export const COMMUNITY_INVITE_URL = `https://ethevents.club`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'ethevents',
	appId: 'S6N0Y2ZG7L',
	apiKey: '2818501726b44bbc9d9af4ecd394c3fe',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About us': [
			{ text: '👋 gm, wanderer!', link: 'en/introduction' },
			{ text: '📜 Manifesto', link: 'en/manifesto' },
			{ text: '🎯 Vision and goals', link: 'en/goals'},
			{ text: '🚀 Bootstrapping stages', link: 'en/bootstrapping'},
			{ text: '💼 Workstreams', link: 'en/workstreams' },
			{ text: '🛠️ Coordination tools', link: 'en/tools' },
			{ text: '📚 Terminology', link: 'en/terminology'},
			{ text: '⌛ History', link: 'en/history'},		
		],
		'Members': [
			{ text: '👨‍👩‍👦 Founding gardeners', link: 'en/founders' },
			{ text: '🌱 Become a gardener!', link: 'en/join-us'},
			{ text: '🤝 Code of conduct', link: 'en/code-of-conduct'},
		],
		'Projects': [
			{ text: '💎 Ethereum Community Directory (EthCD)', link: 'en/projects/ethcd' },
			{ text: '📖 Ethereum Events Database (chronicle)', link: 'en/projects/chronicle' },
			{ text: '🌐 ETHEvents.xyz', link: 'en/projects/ethevents-xyz' },
			{ text: '🗣️ ETHTalks', link: 'en/projects/ethtalks' },
			{ text: '🗓️ confeth', link: 'en/projects/confeth' },
			{ text: '🇪🇺 ETHEUnite', link: 'en/projects/etheunite' },
		],
	},
};

