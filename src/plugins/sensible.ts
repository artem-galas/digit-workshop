import fp from 'fastify-plugin'
import sensible, { SensibleOptions } from 'fastify-sensible'

export default fp<SensibleOptions>(async (fastify, opts) => {
  fastify.register(sensible, {
    errorHandler: false
  })
})
