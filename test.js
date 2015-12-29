import test from 'ava'
import mutateQS from './'

global.location = {search: ''}

test('expects object as first argument', t => {
	t.throws(mutateQS, TypeError)
})
test('set query', t => {
	const qs = mutateQS({b: 'cool'}, '?a=1&b=0&c=qq')
	t.is(qs, '?a=1&b=cool&c=qq')
})
