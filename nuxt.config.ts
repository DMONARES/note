// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	modules: ["@pinia/nuxt", "@nuxtjs/color-mode", "@nuxt/content", 'motion-v/nuxt'],

	plugins: [
		{ src: '@/plugins/vue-scrollto.client.ts', mode: 'client' }
	],

	colorMode: {
		classSuffix: "",
	},

	content: {
		// Путь для хранения контента
		dir: "content",

		// Индексируем все файлы в каталоге content
		highlight: {
			// Настройка синтаксической подсветки
			theme: "copilot",
		},

		// Использование расширенных возможностей для поиска
		navigation: {
			// Добавить поддержку навигации по контенту, если нужно
			search: true,
		},

		// Если вам нужно настроить кеширование
		cache: {
			// Включить кэширование контента
			maxAge: 1000 * 60 * 60 * 24, // например, 1 день
			staleWhileRevalidate: 1000 * 60 * 60 * 24 * 7, // например, 7 дней
		},

		// Ожидаем расширения файлов в папке content
		markdown: {
			// Поддержка дополнительных плагинов для Markdown (например, mermaid)
			remarkPlugins: [],
			rehypePlugins: [],
		},

		// Прочие дефолтные параметры
		json: {
			// Если вам нужно работать с JSON файлами
			deep: false, // Указывает, использовать ли глубокий поиск по JSON структурам
		},

		// Возможно, захотите включить поддержку версионирования контента (если применимо)
		versioning: {
			enabled: false,
		},
	},

	// env, пожалуйста, создайте в корне проекта env c именем NUXT_PUBLIC_API_HOST, если это требуется ⬇️

	runtimeConfig: {
		public: {
			api: process.env.NUXT_PUBLIC_API_HOST,
			socketUrl: process.env.NUXT_PUBLIC_SOCKET_URL || 'http://localhost:3001'
		}
	},

	// если вам нужно проксировать получение данных с элемента ( или любые другие ) - раскоментируйте код ниже и добавьте данные в env файл с ключом process.env.NUXT_PUBLIC_ELEMENT_HOST ⬇️

	// nitro: {
	// 	devProxy: {
	// 		'/element': {
	// 			target: process.env.NUXT_PUBLIC_ELEMENT_HOST,
	// 			changeOrigin: true
	// 		},
	// 	},
	// },

	// css base configuration
	css: ["@/assets/styles/index.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern",
					silenceDeprecations: [
						"import",
						"global-builtin",
						"legacy-js-api",
					],
					additionalData: `@use "@/assets/styles/base/_variables.scss" as *;  @use "@/assets/styles/base/_mixins.scss" as *;`,
				},
			},
		},
		plugins: [
			require('vite-svg-loader')()
		],
	},
});
