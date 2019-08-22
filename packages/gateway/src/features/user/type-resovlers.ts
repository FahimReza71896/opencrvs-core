import {
  GQLResolver,
  GQLUserIdentifierInput,
  GQLSignatureInput
} from '@gateway/graphql/schema'
import { fetchFHIR } from '@gateway/features/fhir/utils'

interface IUserModelData {
  _id: string
  username: string
  name: string
  email: string
  mobile: string
  status: string
  practitionerId: string
  primaryOfficeId: string
  catchmentAreaIds: string[]
}

export interface IUserPayload
  extends Omit<
    IUserModelData,
    | '_id'
    | 'catchmentAreaIds'
    | 'status'
    | 'practitionerId'
    | 'username'
    | 'name'
  > {
  identifiers: GQLUserIdentifierInput[]
  name: {
    use: string
    family: string
    given: string[]
  }[]
  role: string
  type: string
  signature?: GQLSignatureInput
}

export interface IUserSearchPayload {
  username?: string
  mobile?: string
  status?: string
  role?: string
  primaryOfficeId?: string
  locationId?: string
  count: number
  skip: number
  sortOrder: string
}

export const userTypeResolvers: GQLResolver = {
  User: {
    id(userModel: IUserModelData) {
      return userModel._id
    },
    userMgntUserID(userModel: IUserModelData) {
      return userModel._id
    },
    async primaryOffice(userModel: IUserModelData, _, authHeader) {
      return await fetchFHIR(
        `/Location/${userModel.primaryOfficeId}`,
        authHeader
      )
    },
    async catchmentArea(userModel: IUserModelData, _, authHeader) {
      return await Promise.all(
        userModel.catchmentAreaIds.map((areaId: string) => {
          return fetchFHIR(`/Location/${areaId}`, authHeader)
        })
      )
    }
  }
}
