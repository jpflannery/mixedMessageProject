function generateRandNum (num) {
		return Math.floor(Math.random() * num)
	}
	
	
	const madLib = {
		manName: ['Jimmy', 'Dave', 'Buster', 'Albert', 'George'],
		womanName: ['Jane', 'Georgeanne', 'Bertha', 'Myrtle', 'Gertrude'],
		noun: ['truck', 'computer', 'rocket ship', 'fountain pen', 'bulldozer'],
		place: ['outer space', 'Los Angeles', 'Canada', 'Antarctica', 'North Dakota'],
		tvShow: ['Wheel of Fortune', 'Jeopardy!', 'Everybody Loves Raymond', 'Bonanza', 'NCIS']
	}

	let nonsenseSentence = []

	for(let prop in madLib) {
		let optionIndex = generateRandNum(madLib[prop].length)
		
		switch (prop){
			case 'manName':
				nonsenseSentence.push(`There once was a man named ${madLib[prop][optionIndex]}. `)
				break
			case 'womanName':
				nonsenseSentence.push(`He was married to a young lady named ${madLib[prop][optionIndex]}. `)
				break
			case 'noun':
				nonsenseSentence.push(`One night after work, he decided to start building a ${madLib[prop][optionIndex]} for his wife for her birthday. `)
				break
			case 'place':
				nonsenseSentence.push(`He wanted to build this so he could take her to ${madLib[prop][optionIndex]}. `)
				break
			case 'tvShow':
				nonsenseSentence.push(`Unfortunately, he got distracted because "${madLib[prop][optionIndex]}" came on TV and he forgot what he was doing. But he remembered and finished it just in time for her birthday.`)
				break
			default: 
				nonsenseSentence.push('There is not enough info.')
		}
	}

	function formatSentence(sentence) {
		const formatted = nonsenseSentence.join('\n')
		console.log(formatted)
	}

	formatSentence(nonsenseSentence);