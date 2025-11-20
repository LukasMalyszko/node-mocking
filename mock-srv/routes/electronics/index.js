'use strict'

const data = [
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The worst vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'}
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  
  fastify.post('/', async function (request, reply) {
    const id = `A${data.length + 1}`
    data.push({ id, ...request.body })
    return data
  })
}