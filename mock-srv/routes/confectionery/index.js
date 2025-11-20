'use strict'

const data = [
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  
  fastify.post('/', async function (request, reply) {
    const id = `B${data.length + 1}`
    data.push({ id, ...request.body })
    return data
  })
}