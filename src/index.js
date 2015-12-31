/* global location */
function queryToString(query) {
	const queryString = []
	/* eslint-disable guard-for-in */
	for (const i in query) {
		queryString.push(`${i}=${query[i]}`)
	}
	/* eslint-enable */
	return `?${queryString.join('&')}`
}

export default function (obj, query = location.search) {
	if (typeof obj !== 'object') {
		throw new TypeError('[mutate-qs] Expected an object')
	}
	// parse location.search to object
	if (!query) {
		return query
	}
	const queryObj = {}
	query = query.substring(1)
	for (const queryBody of query.split('&')) {
		const [key, value] = queryBody.split('=')
		queryObj[key] = value
	}
	/* eslint-disable guard-for-in */
	// override query with obj's key/value
	for (const key in obj) {
		queryObj[key] = obj[key] === null ? '' : obj[key]
	}
	/* eslint-enable */
	console.log('this is not for real')
	return queryToString(queryObj)
}
