import * as React from 'react'
import { ActionPage, Box, Modal } from '@opencrvs/components/lib/interface'
import { PrimaryButton } from '@opencrvs/components/lib/buttons'
import { Duplicate } from '@opencrvs/components/lib/icons'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'src/styled-components'
import { injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import { WORK_QUEUE } from 'src/navigation/routes'
import {
  DuplicateDetails,
  Action as RegAction,
  Event
} from 'src/components/DuplicateDetails'
import { RouteComponentProps } from 'react-router'

const messages = defineMessages({
  title: {
    id: 'register.duplicates.title',
    defaultMessage: 'Possible duplicates found',
    description: 'The title of the text box in the duplicates page'
  },
  description: {
    id: 'register.duplicates.description',
    defaultMessage:
      'The following application has been flagged as a possible duplicate of an existing registered record.',
    description: 'The description at the top of the duplicates page'
  },
  pageTitle: {
    id: 'register.duplicates.pageTitle',
    defaultMessage: 'Possible duplicate',
    description: 'The duplicates page title'
  },
  back: {
    id: 'menu.back',
    defaultMessage: 'Back',
    description: 'Title of the back link'
  },
  rejectButton: {
    id: 'register.duplicates.button.reject',
    defaultMessage: 'Reject',
    description: 'Title of the reject button'
  },
  rejectDescription: {
    id: 'register.duplicates.modal.reject',
    defaultMessage:
      'Are you sure you want to reject this application for being a duplicate ?',
    description: 'Description of the reject modal'
  }
})

const Container = styled.div`
  margin: 35px 250px 0px 250px;

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const TitleBox = styled(Box)`
  font-family: ${({ theme }) => theme.fonts.regularFont};
  font-size: 18px;
`

const Header = styled.span`
  font-family: ${({ theme }) => theme.fonts.boldFont};
  display: flex;
  align-items: center;
`

const HeaderText = styled.span`
  margin-left: 14px;
`

const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.md}px) {
    grid-template-columns: auto;
  }
`
const BackButton = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`

const mockDupeData = [
  {
    id: '79ec2c9b-3d48-4591-a09f-bc37dced4a49',
    dateOfApplication: '17.01.2019',
    trackingId: '1234567890',
    event: Event.BIRTH,
    child: {
      name: 'Isa Annika Gomes',
      dob: '10.10.2018',
      gender: 'Female'
    },
    mother: {
      name: 'Jane Gomes',
      dob: '01.01.1950',
      gender: 'Female',
      id: '321'
    },
    father: {
      name: 'Jack Gomes',
      dob: '01.02.1955',
      gender: 'Male',
      id: '123'
    },
    regStatusHistory: [
      {
        action: RegAction.SUBMITTED,
        date: '17.01.2019',
        usersName: 'Ryan Crichton',
        usersRole: 'Family Welfare Assistant',
        office: 'Gazipur Union Health Clinic'
      }
    ]
  },
  {
    id: '2',
    dateOfApplication: '17.01.2019',
    trackingId: '1234567890',
    event: Event.BIRTH,
    child: {
      name: 'Isa Annika Gomes',
      dob: '10.10.2018',
      gender: 'Female'
    },
    mother: {
      name: 'Jane Gomes',
      dob: '01.01.1950',
      gender: 'Female',
      id: '321'
    },
    father: {
      name: 'Jack Gomes',
      dob: '01.02.1955',
      gender: 'Male',
      id: '123'
    },
    regStatusHistory: [
      {
        action: RegAction.SUBMITTED,
        date: '17.01.2019',
        usersName: 'Ryan Crichton',
        usersRole: 'Family Welfare Assistant',
        office: 'Gazipur Union Health Clinic',
        reason: ''
      },
      {
        action: RegAction.REJECTED,
        date: '17.01.2019',
        usersName: 'Euan Millar',
        usersRole: 'Registrar',
        office: 'Gazipur Union Registration Office',
        reason: 'Duplicate'
      }
    ]
  },
  {
    id: '3',
    dateOfApplication: '17.01.2019',
    trackingId: '1234567890',
    event: Event.BIRTH,
    child: {
      name: 'Isa Annika Gomes',
      dob: '10.10.2018',
      gender: 'Female'
    },
    mother: {
      name: 'Jane Gomes',
      dob: '01.01.1950',
      gender: 'Female',
      id: '321'
    },
    father: {
      name: 'Jack Gomes',
      dob: '01.02.1955',
      gender: 'Male',
      id: '123'
    },
    regStatusHistory: [
      {
        action: RegAction.SUBMITTED,
        date: '17.01.2019',
        usersName: 'Ryan Crichton',
        usersRole: 'Family Welfare Assistant',
        office: 'Gazipur Union Health Clinic',
        reason: ''
      },
      {
        action: RegAction.REGISTERED,
        date: '17.01.2019',
        usersName: 'Ryan Crichton',
        usersRole: 'Family Welfare Assistant',
        office: 'Gazipur Union Health Clinic'
      }
    ]
  }
]
const rejectMutation = gql`
  mutation submitBirthAsRejected($id: String!, $reason: String!) {
    markBirthAsVoided(id: $id, reason: $reason)
  }
`

type State = {
  selectedCompositionID: string
  showRejectModal: boolean
}
type Props = InjectedIntlProps & RouteComponentProps<{}>

class ReviewDuplicatesClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedCompositionID: '',
      showRejectModal: false
    }
  }

  toggleRejectModal = (id: string = '') => {
    this.setState((prevState: State) => ({
      selectedCompositionID: id,
      showRejectModal: !prevState.showRejectModal
    }))
  }

  successfulRejection = (response: string) => {
    const { history } = this.props
    // TODO: need to change it
    history.push(WORK_QUEUE)
  }

  render() {
    const { intl } = this.props
    return (
      <ActionPage
        goBack={() => {
          window.location.href = WORK_QUEUE
        }}
        title={intl.formatMessage(messages.pageTitle)}
      >
        <Container>
          <TitleBox>
            <Header>
              <Duplicate />
              <HeaderText>{intl.formatMessage(messages.title)}</HeaderText>
            </Header>
            <p>{intl.formatMessage(messages.description)}</p>
          </TitleBox>
          <Grid>
            {mockDupeData.map((data, index) => (
              <DuplicateDetails
                key={index}
                data={data}
                notDuplicateHandler={() => {
                  alert('Not a duplicate! (°◇°)')
                }}
                rejectHandler={() => {
                  this.toggleRejectModal(data.id)
                }}
              />
            ))}
          </Grid>
        </Container>
        <Mutation
          mutation={rejectMutation}
          variables={{
            id: this.state.selectedCompositionID,
            reason: 'Duplicate'
          }}
        >
          {(submitBirthAsRejected, { data }) => {
            if (data && data.markBirthAsVoided) {
              this.successfulRejection(data.markBirthAsVoided)
            }
            return (
              <Modal
                title={intl.formatMessage(messages.rejectDescription)}
                actions={[
                  <PrimaryButton
                    key="reject"
                    id="reject_confirm"
                    onClick={() => submitBirthAsRejected()}
                  >
                    {intl.formatMessage(messages.rejectButton)}
                  </PrimaryButton>,
                  <BackButton
                    key="back"
                    onClick={() => {
                      this.toggleRejectModal()
                      if (document.documentElement) {
                        document.documentElement.scrollTop = 0
                      }
                    }}
                  >
                    {intl.formatMessage(messages.back)}
                  </BackButton>
                ]}
                show={this.state.showRejectModal}
                handleClose={this.toggleRejectModal}
              />
            )
          }}
        </Mutation>
      </ActionPage>
    )
  }
}

export const ReviewDuplicates = injectIntl(ReviewDuplicatesClass)
