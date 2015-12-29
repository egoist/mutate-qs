/* global location */
function queryToString(query) {
	const queryString = []
	for (const i in query) {
		if (query[i]) {
			queryString.push(`${i}=${query[i]}`)
		}
	}
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
	// override query with obj's key/value
	for (const key in obj) {
		if (obj[key]) {
			queryObj[key] = obj[key]
		}
	}
	return queryToString(queryObj)
}
