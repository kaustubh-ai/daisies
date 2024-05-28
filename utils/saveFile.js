export function download(filename, text) {
	text = replaceResponsiveness(text)
	console.log(text, 'final text')
	const pom = document.createElement('a')
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
	pom.setAttribute('download', filename)
	
	if (document.createEvent) {
		const event = document.createEvent('MouseEvents')
		event.initEvent('click', true, true)
		pom.dispatchEvent(event)
	}
	else {
		pom.click()
	}
}

function replaceResponsiveness(content) {
	let responsiveMatches = content.match(/sm\\:\S+/g).sort()
	console.log(responsiveMatches, 'RESPONSIVE MATCHES')
	
	responsiveMatches.forEach(match => {
		const newMatch = match.replace(/\\/g, '');
		const finalMatch = newMatch.replace(/:/g, '-');
		content = content.replace(match, finalMatch);
	})
	
	return content
}
