exports.formateDate = time => {
	let tmpDate = new Date(time)
	let year = tmpDate.getFullYear()
	let month = tmpDate.getMonth() + 1
	let day = tmpDate.getDate()
	let hours = tmpDate.getHours()
	let minutes = tmpDate.getMinutes()

	return year + '年' + month + '月' + day + '日'
}