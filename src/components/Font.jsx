/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

export const Font = ({webFont, fontFamily, fallbackFontFamily = 'system-ui'}) => {
	const src = webFont ? `src: url(${webFont.url}) format(${webFont.format});` : '';
	
	return (
		<style>
			{
				`2
            @font-face {
                font-family: ${fontFamily};
                mso-font-alt: ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily[0] : fallbackFontFamily};
                ${src}
            }

            * {
                font-family: ${fontFamily}, ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily.join(', ') : fallbackFontFamily};
            }
            `
			}
		</style>
	)
}
