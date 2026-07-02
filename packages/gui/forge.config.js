import makerSquirrel from '@electron-forge/maker-squirrel';
import makerZip from '@electron-forge/maker-zip';
import makerDeb from '@electron-forge/maker-deb';

export default {
	packagerConfig: {
		name: "Deemix",
		asar: true,
		prune: false,
		ignore: [
			/^\/node_modules/,
			/^\/out/,
			/^\/src/,
			/^\/public/,
			/^\/scripts/,
			/^\/.gitignore/,
			/^\/forge.config.js/,
			/^\/tsconfig.json/,
		],
		icon: "./build/icon.ico",
		executableName: "deemix-gui",
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {},
			// This forces Electron Forge to use the directly imported module
			// instead of trying to look for it inside node_modules textually
			_maker: makerSquirrel
		},
		{
			name: "@electron-forge/maker-zip",
			config: {},
			_maker: makerZip
		},
		{
			name: "@electron-forge/maker-deb",
			config: {
				options: {
					name: "deemix",
					productName: "Deemix",
					section: "sound",
					icon: "./build/icon.ico",
					categories: ["Audio"],
				},
			},
			_maker: makerDeb
		},
	],
	plugins: [
		{
			name: "@electron-forge/plugin-auto-unpack-natives",
			config: {},
		},
	],
};
