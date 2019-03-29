import { readFileSync } from 'fs'
import * as jwt from 'jsonwebtoken'
// import * as fetch from 'jest-fetch-mock'
import { createServer } from 'src/index'

jest.mock('src/elasticsearch/dbhelper.ts')

describe('Verify handlers', () => {
  let server: any

  describe('Check Access role', () => {
    beforeEach(async () => {
      server = await createServer()
    })
    it('should return status code 403 if not Registrar', async () => {
      const token = jwt.sign(
        {
          scope: ['declare']
        },
        readFileSync('../auth/test/cert.key'),
        {
          algorithm: 'RS256',
          issuer: 'opencrvs:auth-service',
          audience: 'opencrvs:deduplication-user'
        }
      )

      const res = await server.server.inject({
        method: 'POST',
        url: '/search',
        payload: {},
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      expect(res.statusCode).toBe(403)
    })
    it('should return status code 200 for Registrar scope', async () => {
      const token = jwt.sign(
        {
          scope: ['register']
        },
        readFileSync('../auth/test/cert.key'),
        {
          algorithm: 'RS256',
          issuer: 'opencrvs:auth-service',
          audience: 'opencrvs:deduplication-user'
        }
      )

      const res = await server.server.inject({
        method: 'POST',
        url: '/search',
        payload: {},
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      expect(res.statusCode).toBe(200)
    })
  })

  describe('When the request is made', async () => {
    let token: string, server: any
    beforeEach(async () => {
      server = await createServer()
      token = jwt.sign(
        {
          scope: ['register']
        },
        readFileSync('../auth/test/cert.key'),
        {
          algorithm: 'RS256',
          issuer: 'opencrvs:auth-service',
          audience: 'opencrvs:deduplication-user'
        }
      )
    })

    it('Should return a valid response as expected', async () => {
      const res = await server.server.inject({
        method: 'POST',
        url: '/search',
        payload: {},
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      expect(JSON.parse(res.payload)).toHaveProperty('_shards')
    })
  })
})
