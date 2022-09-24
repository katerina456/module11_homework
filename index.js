function getPercents(percent, number) {
	if (isNaN(number) || isNaN(percent)) {
		return 'Не верный формат ввода'
	}

	if (number < 0 || percent < 0) {
		return 'Неверно введены данные'
	}

	if (percent === 0) {
		return 'Нельзя выбрать 0 процентов'
	}

	return number / 100 * percent;
}

console.log( getPercents(30, 200) );

module.exports = getPercents;