/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			keyframes: {
				menuBar: {
					'0%': {
						opacity: 0,
						transform: 'translateY(-100%)',
						transition:
							'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)',
					},
					'100%': { opacity: 1, transform: 'translateY(0%)' },
				},
			},
			animation: {
				menuBar: 'menuBar .3s linear',
			},
			backgroundImage: {
				HomeBG: "url('/BG/bgHome.jpg')",
				AboutBG:"url('/BG/bgAbout.jpg')",
				ServicesBG:"url('/BG/bgServices.jpg')",
				BlogsBG:"url('/BG/bgBlogs.jpg')",
				BlogWebAppDevsBG:"url('/BG/bgWebAppDev.jpg')",
				BlogHtmlBG:"url('/BG/bgHtml.jpg')",
				BlogFullStackDevBG:"url('/BG/bgFullStackDev.jpg')",
				BlogWebAppBG:"url('/BG/bgWebApp.jpg')",
				BlogReactBG:"url('/BG/bgReact.jpg')",
				BlogReactNativeBG:"url('/BG/bgReactNative.jpg')",
				BlogApiBG:"url('/BG/bgApi.jpg')",
				BlogAppSecBG:"url('/BG/bgAppSecurity.jpg')",
				BlogOutSrcBG:"url('/BG/bgOutSrc.jpg')",
				BlogRedesignBG:"url('/BG/bgRedesign.jpg')",
				BlogStackBG:"url('/BG/bgStack.jpg')",
				BlogWebSrvsBG:"url('/BG/bgWebServices.jpg')",
				FaqsBG:"url('/BG/bgFaqs.jpg')",
				ContactBG:"url('/BG/bgContact.jpg')",
			},
		},
	},
  plugins: [],
}
