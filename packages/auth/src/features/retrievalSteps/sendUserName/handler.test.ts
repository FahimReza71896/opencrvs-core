import * as fetchAny from 'jest-fetch-mock'
import { createServer } from '@auth/index'
import {
  storeRetrievalStepInformation,
  RetrievalSteps
} from '@auth/features/retrievalSteps/verifyUser/service'

const fetch = fetchAny as fetchAny.FetchMock

describe('username reminder', () => {
  let server: any

  beforeEach(async () => {
    server = await createServer()
    fetch.resetMocks()
    fetch.mockResponse('OK')
    storeRetrievalStepInformation('12345', RetrievalSteps.SECURITY_Q_VERIFIED, {
      userId: '123',
      username: 'fake_user_name',
      mobile: '123123123',
      securityQuestionKey: 'TEST_SECURITY_QUESTION_KEY',
      scope: []
    })
  })

  describe('when a valid request is made', () => {
    it('returns OK', async () => {
      const res = await server.server.inject({
        method: 'POST',
        url: '/sendUserName',
        payload: {
          nonce: '12345'
        }
      })

      expect(res.statusCode).toBe(200)
    })
    it('calls notification service to send the username', async () => {
      await server.server.inject({
        method: 'POST',
        url: '/sendUserName',
        payload: {
          nonce: '12345'
        }
      })

      expect(fetch.mock.calls).toHaveLength(1)
    })
  })
  describe('when an invalid nonce is supplied', () => {
    it('responds with an error', async () => {
      const res = await server.server.inject({
        method: 'POST',
        url: '/sendUserName',
        payload: {
          nonce: '54332'
        }
      })

      expect(res.statusCode).toBe(401)
    })
  })
  describe('when invalid status found on retrieval step data', () => {
    it('responds with an error', async () => {
      await storeRetrievalStepInformation(
        '12345',
        RetrievalSteps.NUMBER_VERIFIED,
        {
          userId: '123',
          username: 'fake_user_name',
          mobile: '123123123',
          securityQuestionKey: 'TEST_SECURITY_QUESTION_KEY',
          scope: []
        }
      )

      const res = await server.server.inject({
        method: 'POST',
        url: '/sendUserName',
        payload: {
          nonce: '12345'
        }
      })

      expect(res.statusCode).toBe(401)
    })
  })
})
