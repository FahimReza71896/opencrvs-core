/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */
import { Query } from '@client/components/Query'
import {
  buttonMessages,
  constantsMessages,
  errorMessages,
  userMessages
} from '@client/i18n/messages'
import { messages } from '@client/i18n/messages/views/sysAdmin'
import {
  goToCreateNewUser,
  goToCreateNewUserWithLocationId,
  goToReviewUserDetails,
  goToTeamSearch
} from '@client/navigation'
import { ILocation } from '@client/offline/reducer'
import { getOfflineData } from '@client/offline/selectors'
import { IStoreState } from '@client/store'
import { withTheme } from '@client/styledComponents'
import { SEARCH_USERS } from '@client/user/queries'
import { LANG_EN } from '@client/utils/constants'
import { createNamesMap } from '@client/utils/data-formatting'
import { SysAdminContentWrapper } from '@client/views/SysAdmin/SysAdminContentWrapper'
import { UserStatus } from '@client/views/SysAdmin/Team/utils'
import { LinkButton } from '@opencrvs/components/lib/buttons'
import {
  AddUser,
  AvatarSmall,
  VerticalThreeDots
} from '@opencrvs/components/lib/icons'
import {
  ColumnContentAlignment,
  ListTable,
  ToggleMenu
} from '@opencrvs/components/lib/interface'
import {
  IColumn,
  IDynamicValues
} from '@opencrvs/components/lib/interface/GridTable/types'
import { BodyContent } from '@opencrvs/components/lib/layout'
import { ITheme } from '@opencrvs/components/lib/theme'
import {
  GQLHumanName,
  GQLQuery,
  GQLUser
} from '@opencrvs/gateway/src/graphql/schema'
import querystring from 'query-string'
import * as React from 'react'
import { injectIntl, WrappedComponentProps as IntlShapeProps } from 'react-intl'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'

const DEFAULT_FIELD_AGENT_LIST_SIZE = 10
const { useState, useEffect } = React

const UserTable = styled(BodyContent)`
  padding: 0px;
  margin: 32px auto 0;
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.md}px) {
    padding: 0px;
  }
`

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 18px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.subtitleStyle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.silverSand};
`

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors};
  ${({ theme }) => theme.fonts.bodyStyle};
  text-align: center;
  margin-top: 100px;
`

const StatusBox = styled.span`
  padding: 4px 6px;
  border-radius: 4px;
  text-align: center;
`
const ActiveStatusBox = styled(StatusBox)`
  background: rgba(73, 183, 141, 0.3);
`
const PendingStatusBox = styled(StatusBox)`
  background: rgba(255, 255, 153, 1);
`
const DisabledStatusBox = styled(StatusBox)`
  background: rgba(206, 206, 206, 0.3);
`

const AddUserContainer = styled.div`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    display: none;
  }
`
const AddUserIcon = styled(AddUser)`
  padding: 4px;
`

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.h2Style};
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: -32px;

  & > :first-child {
    margin-right: 24px;
  }

  & > :nth-child(2) {
    position: relative;
    bottom: 2px;
  }
`

const LocationInfo = styled.div`
  padding: 8px 0px;
`

const LocationInfoKey = styled.div`
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.bodyBoldStyle};
`

const LocationInfoValue = styled.div`
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.bodyStyle};
`

const LocationInfoEmptyValue = styled.div`
  color: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.fonts.bodyStyle};
`

const ChangeButton = styled(LinkButton)`
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    display: none;
  }
`

const NameRoleTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled(LinkButton)`
  align-self: flex-start;
  text-align: left;
`

const RoleType = styled.div`
  ${({ theme }) => theme.fonts.captionStyle}
  color: ${({ theme }) => theme.colors.waitingForExternalValidation};
`

interface ISearchParams {
  locationId: string
  viewOnly?: boolean
}

type BaseProps = {
  theme: ITheme
  offlineOffices: ILocation[]
  goToCreateNewUser: typeof goToCreateNewUser
  goToCreateNewUserWithLocationId: typeof goToCreateNewUserWithLocationId
  goToReviewUserDetails: typeof goToReviewUserDetails
  goToTeamSearch: typeof goToTeamSearch
}

type IProps = BaseProps & IntlShapeProps & RouteComponentProps

interface IStatusProps {
  status: string
}

const Status = (statusProps: IStatusProps) => {
  const status =
    statusProps.status.charAt(0).toUpperCase() + statusProps.status.slice(1)
  switch (status.toLowerCase()) {
    case UserStatus[UserStatus.ACTIVE].toLowerCase():
      return <ActiveStatusBox>{status}</ActiveStatusBox>
    case UserStatus[UserStatus.DISABLED].toLowerCase():
      return <DisabledStatusBox>{status}</DisabledStatusBox>
    case UserStatus[UserStatus.PENDING].toLowerCase():
    default:
      return <PendingStatusBox>{status}</PendingStatusBox>
  }
}

function UserListComponent(props: IProps) {
  const {
    intl,
    goToReviewUserDetails,
    goToCreateNewUser,
    goToCreateNewUserWithLocationId,
    goToTeamSearch,
    offlineOffices,
    location: { search }
  } = props

  const { locationId, viewOnly } = (querystring.parse(
    search
  ) as unknown) as ISearchParams

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    function recordWindowWidth() {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', recordWindowWidth)

    return () => window.removeEventListener('resize', recordWindowWidth)
  }, [])
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1)
  const recordCount = DEFAULT_FIELD_AGENT_LIST_SIZE * currentPageNumber
  const searchedLocation: ILocation | undefined = offlineOffices.find(
    ({ id }) => locationId === id
  )

  function getMenuItems(userId: string) {
    return [
      {
        label: intl.formatMessage(messages.menuOptionEditDetails),
        handler: () => goToReviewUserDetails(userId)
      }
    ]
  }

  function getRoleType(role: string, type: string) {
    return (
      <>
        {role} &middot; {type}
      </>
    )
  }

  function getNameRoleType(name: string, role: string, type: string) {
    return (
      <NameRoleTypeContainer>
        <Name>{name}</Name>
        <RoleType>{getRoleType(role, type)}</RoleType>
      </NameRoleTypeContainer>
    )
  }

  function generateUserContents(data: GQLQuery) {
    if (!data || !data.searchUsers || !data.searchUsers.results) {
      return []
    }

    return data.searchUsers.results.map(
      (user: GQLUser | null, index: number) => {
        if (user !== null) {
          const name =
            (createNamesMap(user && (user.name as GQLHumanName[]))[
              intl.locale
            ] as string) ||
            (createNamesMap(user && (user.name as GQLHumanName[]))[
              LANG_EN
            ] as string)
          const role =
            (user.role && intl.formatMessage(userMessages[user.role])) || '-'
          const type =
            (user.type && intl.formatMessage(userMessages[user.type])) || '-'
          const status = user.status || 'pending'

          return {
            photo: <AvatarSmall />,
            name: <LinkButton>{name}</LinkButton>,
            nameRoleType: getNameRoleType(name, role, type),
            roleType: getRoleType(role, type),
            status: <Status status={status} />,
            menu: (
              <ToggleMenu
                id={`user-item-${index}-menu`}
                toggleButton={<VerticalThreeDots />}
                menuItems={getMenuItems(user.id as string)}
              />
            )
          }
        }
        return {}
      }
    )
  }

  function onClickAddUser() {
    ;(searchedLocation &&
      goToCreateNewUserWithLocationId(searchedLocation.id)) ||
      goToCreateNewUser()
  }

  function onChangeLocation() {
    goToTeamSearch(
      searchedLocation && {
        selectedLocation: {
          id: searchedLocation.id,
          searchableText: searchedLocation.name,
          displayLabel: searchedLocation.name
        }
      }
    )
  }

  function renderUserList() {
    let columns: IColumn[] = []
    if (viewportWidth <= props.theme.grid.breakpoints.md) {
      columns = columns.concat([
        {
          label: intl.formatMessage(constantsMessages.name),
          width: 70,
          key: 'nameRoleType'
        },
        {
          label: intl.formatMessage(constantsMessages.status),
          width: 30,
          alignment: ColumnContentAlignment.RIGHT,
          key: 'status'
        }
      ])
    } else if (viewportWidth <= props.theme.grid.breakpoints.lg) {
      columns = columns.concat([
        {
          label: '',
          width: 10,
          key: 'photo'
        },
        {
          label: intl.formatMessage(constantsMessages.name),
          width: 75,
          key: 'nameRoleType'
        },
        {
          label: intl.formatMessage(constantsMessages.status),
          width: 15,
          alignment: ColumnContentAlignment.RIGHT,
          key: 'status'
        }
      ])
    } else {
      if (viewOnly) {
        columns = columns.concat([
          {
            label: '',
            width: 8,
            key: 'photo'
          },
          {
            label: intl.formatMessage(constantsMessages.name),
            width: 27,
            key: 'name'
          },
          {
            label: intl.formatMessage(constantsMessages.labelRole),
            width: 50,
            key: 'roleType'
          },
          {
            label: intl.formatMessage(constantsMessages.status),
            width: 15,
            alignment: ColumnContentAlignment.RIGHT,
            key: 'status'
          }
        ])
      } else {
        columns = columns.concat([
          {
            label: '',
            width: 8,
            key: 'photo'
          },
          {
            label: intl.formatMessage(constantsMessages.name),
            width: 27,
            key: 'name'
          },
          {
            label: intl.formatMessage(constantsMessages.labelRole),
            width: 50,
            key: 'roleType'
          },
          {
            label: intl.formatMessage(constantsMessages.status),
            width: 10,
            alignment: ColumnContentAlignment.RIGHT,
            key: 'status'
          },
          {
            label: '',
            width: 5,
            key: 'menu'
          }
        ])
      }
    }
    return (
      <Query
        query={SEARCH_USERS}
        variables={{
          primaryOfficeId: locationId,
          count: recordCount
        }}
        fetchPolicy={'no-cache'}
      >
        {({ data, loading, error }) => {
          if (error) {
            return (
              <ErrorText id="user_loading_error">
                {intl.formatMessage(errorMessages.userQueryError)}
              </ErrorText>
            )
          }
          return (
            <UserTable id="user_list">
              <TableHeader>
                {(data && data.searchUsers && data.searchUsers.totalItems) || 0}{' '}
                users
                {!viewOnly && (
                  <AddUserContainer id="add-user" onClick={onClickAddUser}>
                    <AddUserIcon />
                    {' New user'}
                  </AddUserContainer>
                )}
              </TableHeader>
              <ListTable
                isLoading={loading}
                content={generateUserContents(data) as IDynamicValues[]}
                columns={columns}
                noResultText="No result to display"
                onPageChange={(currentPage: number) => {
                  setCurrentPageNumber(currentPage)
                }}
                pageSize={recordCount}
                totalItems={
                  data && data.searchUsers && data.searchUsers.totalItems
                }
                currentPage={currentPageNumber}
                loadMoreText={intl.formatMessage(constantsMessages.showMore, {
                  pageSize: DEFAULT_FIELD_AGENT_LIST_SIZE
                })}
                hideBoxShadow={true}
                hideTableHeader={true}
              />
            </UserTable>
          )
        }}
      </Query>
    )
  }

  return (
    <SysAdminContentWrapper
      mapPinClickHandler={(!viewOnly && onChangeLocation) || undefined}
    >
      <HeaderContainer>
        <Header id="header">
          {(searchedLocation && searchedLocation.name) || ''}
        </Header>
        {!viewOnly && (
          <ChangeButton id="chng-loc" onClick={onChangeLocation}>
            {intl.formatMessage(buttonMessages.change)}
          </ChangeButton>
        )}
      </HeaderContainer>
      <LocationInfo>
        <LocationInfoKey>
          {intl.formatMessage(constantsMessages.address)}
        </LocationInfoKey>
        {searchedLocation && searchedLocation.address ? (
          <LocationInfoValue>{searchedLocation.address}</LocationInfoValue>
        ) : (
          <LocationInfoEmptyValue>
            {intl.formatMessage(constantsMessages.notAvailable)}
          </LocationInfoEmptyValue>
        )}
      </LocationInfo>
      {renderUserList()}
    </SysAdminContentWrapper>
  )
}

export const UserList = connect(
  (state: IStoreState) => ({
    offlineOffices: Object.values(getOfflineData(state).offices)
  }),
  {
    goToCreateNewUser,
    goToCreateNewUserWithLocationId,
    goToReviewUserDetails,
    goToTeamSearch
  }
)(withTheme(injectIntl(UserListComponent)))
