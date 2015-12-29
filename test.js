import test from 'ava'
import mutateQS from './'

global.location = {search: ''}

test('expects object as first argument', t => {
	t.throws(mutateQS, TypeError)
})
test('set query', t => {
	t.plan(2)
	t.is(mutateQS({b: 'cool'}, '?a=1&b=0&c=qq'), '?a=1&b=cool&c=qq')
	t.is(mutateQS({d: 0}, '?a=1&b=0&c=qq'), '?a=1&b=0&c=qq&d=0')
})
test('remove query', t => {
	t.is(mutateQS({b: null}, '?a=1&b=0&c=qq'), '?a=1&b=&c=qq')
})
