interface Country {
	cca3: string;
	flags: {
		svg: string;
		alt: string;
	};
	name: {
		common: string;
		official: string;
	};
	population: string;
	region: string;
	capital: string;
	subregion: string;
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
		};
	};
	languages: {
		[key: string]: {
			name: string;
		};
	};
	borders: string[];
}
