import {
  ICON_ALIGNMENT,
  PrimaryButton,
  TertiaryButton
} from '@opencrvs/components/lib/buttons'
import {
  InputField,
  IRadioOption as RadioComponentOption,
  TextInput
} from '@opencrvs/components/lib/forms'
import { ErrorText } from '@opencrvs/components/lib/forms/ErrorText'
import { BackArrow } from '@opencrvs/components/lib/icons'
import { EventTopBar, RadioButton } from '@opencrvs/components/lib/interface'
import { BodyContent, Container } from '@opencrvs/components/lib/layout'
import {
  deleteApplication,
  IApplication,
  modifyApplication
} from '@register/applications'
import {
  BirthSection,
  DeathSection,
  Event,
  IFormSection,
  IFormSectionData
} from '@register/forms'
import {
  getBirthSection,
  getDeathSection
} from '@register/forms/register/application-selectors'
import {
  buttonMessages,
  formMessages,
  validationMessages
} from '@register/i18n/messages'
import { constantsMessages } from '@register/i18n/messages/constants'
import { messages } from '@register/i18n/messages/views/selectInformant'
import {
  goBack,
  goToBirthContactPoint,
  goToBirthRegistrationAsParent,
  goToDeathContactPoint,
  goToDeathRegistration,
  goToHome,
  goToPrimaryApplicant
} from '@register/navigation'
import { IStoreState } from '@register/store'
import styled from '@register/styledComponents'
import {
  INFORMANT_FIELD_STRING,
  PHONE_NO_FIELD_STRING,
  RADIO_BUTTON_LARGE_STRING
} from '@register/utils/constants'
import { phoneNumberFormat } from '@register/utils/validate'
import * as React from 'react'
import {
  injectIntl,
  IntlShape,
  WrappedComponentProps as IntlShapeProps
} from 'react-intl'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

const Title = styled.h4`
  ${({ theme }) => theme.fonts.h4Style};
  margin-bottom: 16px;
`
const Actions = styled.div`
  padding: 32px 0;
  & > div {
    margin-bottom: 16px;
  }
`

const ChildContainer = styled.div`
  margin-left: 18px;
  padding-left: 33px;
  border-left: 4px solid ${({ theme }) => theme.colors.copy};
  padding-top: 0px !important;

  > div {
    padding: 16px 0;
  }
`

enum INFORMANT {
  FATHER = 'FATHER',
  MOTHER = 'MOTHER',
  BOTH_PARENTS = 'BOTH_PARENTS',
  LEGAL_GUARDIAN = 'LEGAL_GUARDIAN',
  SELF = 'SELF',
  SOMEONE_ELSE = 'OTHER',
  SPOUSE = 'SPOUSE',
  SON = 'SON',
  DAUGHTER = 'DAUGHTER',
  SON_IN_LAW = 'SON_IN_LAW',
  DAUGHTER_IN_LAW = 'DAUGHTER_IN_LAW',
  GRANDSON = 'GRANDSON',
  GRANDDAUGHTER = 'GRANDDAUGHTER',
  EXTENDED_FAMILY = 'EXTENDED_FAMILY'
}

export interface IInformantField {
  id: string
  option: RadioComponentOption
  disabled: boolean
}

const setInformantFields = (
  intl: IntlShape,
  event: string
): IInformantField[] => {
  if (event === Event.BIRTH) {
    return [
      {
        id: `select_informant_${INFORMANT.MOTHER}`,
        option: {
          label: intl.formatMessage(formMessages.mother),
          value: INFORMANT.MOTHER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.FATHER}`,
        option: {
          label: intl.formatMessage(formMessages.father),
          value: INFORMANT.FATHER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.BOTH_PARENTS}`,
        option: {
          label: intl.formatMessage(messages.parents),
          value: INFORMANT.BOTH_PARENTS
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.LEGAL_GUARDIAN}`,
        option: {
          label: intl.formatMessage(messages.legalGuardian),
          value: INFORMANT.LEGAL_GUARDIAN
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.SOMEONE_ELSE}`,
        option: {
          label: intl.formatMessage(formMessages.someoneElse),
          value: INFORMANT.SOMEONE_ELSE
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.SELF}`,
        option: {
          label: intl.formatMessage(formMessages.self),
          value: INFORMANT.SELF
        },
        disabled: true
      }
    ]
  } else {
    return [
      {
        id: `select_informant_${INFORMANT.SPOUSE}`,
        option: {
          label: intl.formatMessage(formMessages.spouse),
          value: INFORMANT.SPOUSE
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.SON}`,
        option: {
          label: intl.formatMessage(formMessages.son),
          value: INFORMANT.SON
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.DAUGHTER}`,
        option: {
          label: intl.formatMessage(formMessages.daughter),
          value: INFORMANT.DAUGHTER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.SON_IN_LAW}`,
        option: {
          label: intl.formatMessage(formMessages.sonInLaw),
          value: INFORMANT.SON_IN_LAW
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.DAUGHTER_IN_LAW}`,
        option: {
          label: intl.formatMessage(formMessages.daughterInLaw),
          value: INFORMANT.DAUGHTER_IN_LAW
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.FATHER}`,
        option: {
          label: intl.formatMessage(formMessages.father),
          value: INFORMANT.FATHER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.MOTHER}`,
        option: {
          label: intl.formatMessage(formMessages.mother),
          value: INFORMANT.MOTHER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.GRANDSON}`,
        option: {
          label: intl.formatMessage(formMessages.grandson),
          value: INFORMANT.GRANDSON
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.GRANDDAUGHTER}`,
        option: {
          label: intl.formatMessage(formMessages.granddaughter),
          value: INFORMANT.GRANDDAUGHTER
        },
        disabled: false
      },
      {
        id: `select_informant_${INFORMANT.SOMEONE_ELSE}`,
        option: {
          label: intl.formatMessage(formMessages.someoneElse),
          value: INFORMANT.SOMEONE_ELSE
        },
        disabled: false
      }
    ]
  }
}

interface IMatchProps {
  applicationId: string
}

type IFullProps = {
  application: IApplication
  modifyApplication: typeof modifyApplication
  deleteApplication: typeof deleteApplication
  goBack: typeof goBack
  goToHome: typeof goToHome
  goToBirthContactPoint: typeof goToBirthContactPoint
  goToDeathContactPoint: typeof goToDeathContactPoint
  goToBirthRegistrationAsParent: typeof goToBirthRegistrationAsParent
  goToDeathRegistration: typeof goToDeathRegistration
  goToPrimaryApplicant: typeof goToPrimaryApplicant
  registrationSection: IFormSection
  applicantsSection: IFormSection
} & IntlShapeProps &
  RouteComponentProps<IMatchProps>

interface IState {
  informant: string
  // phoneNumber: string
  // relationship: string
  // isPhoneNoError: boolean
  touched: boolean
  isError: boolean
}

export class SelectInformantView extends React.Component<IFullProps, IState> {
  constructor(props: IFullProps) {
    super(props)
    const { applicantsSection, registrationSection } = props
    this.state = {
      informant:
        (this.props.application &&
          this.props.application.data &&
          this.props.application.data[registrationSection.id] &&
          (this.props.application.data[registrationSection.id]
            .presentAtBirthRegistration as string)) ||
        (this.props.application &&
          this.props.application.data &&
          this.props.application.data[applicantsSection.id] &&
          (this.props.application.data[applicantsSection.id]
            .applicantsRelationToDeceased as string)) ||
        '',
      // phoneNumber:
      //   (this.props.application &&
      //     this.props.application.data &&
      //     this.props.application.data[registrationSection.id] &&
      //     (this.props.application.data[registrationSection.id]
      //       .registrationPhone as string)) ||
      //   (this.props.application &&
      //     this.props.application.data &&
      //     this.props.application.data[applicantsSection.id] &&
      //     (this.props.application.data[applicantsSection.id]
      //       .applicantPhone as string)) ||
      //   '',
      // relationship:
      //   (this.props.application &&
      //     this.props.application.data &&
      //     this.props.application.data[applicantsSection.id] &&
      //     (this.props.application.data[applicantsSection.id]
      //       .applicantOtherRelationship as string)) ||
      //   '',
      // isPhoneNoError: false,
      touched: false,
      isError: false
    }
  }

  handleContinue = () => {
    const event = this.props.location.pathname.includes(Event.BIRTH)
      ? Event.BIRTH
      : Event.DEATH

    if (
      this.state.informant &&
      this.state.informant !== 'error' &&
      this.state.informant === INFORMANT.BOTH_PARENTS
    ) {
      const {
        application,
        goToPrimaryApplicant,
        registrationSection,
        goToBirthRegistrationAsParent
      } = this.props
      this.props.modifyApplication({
        ...application,
        data: {
          ...application.data,
          registration: {
            ...application.data[registrationSection.id],
            ...{
              presentAtBirthRegistration: this.state.informant,
              applicant: {
                value: this.state.informant,
                nestedFields: {}
              }
            }
          }
        }
      })
      event === Event.BIRTH
        ? goToBirthRegistrationAsParent(this.props.match.params.applicationId)
        : goToPrimaryApplicant(this.props.match.params.applicationId)
    } else if (
      this.state.informant &&
      this.state.informant !== 'error' &&
      this.state.informant !== INFORMANT.SOMEONE_ELSE
    ) {
      const {
        application,
        goToBirthRegistrationAsParent,
        goToDeathRegistration,
        registrationSection,
        applicantsSection
      } = this.props
      const newApplication = {
        ...application,
        data: {
          ...application.data
        }
      }
      if (event === Event.BIRTH) {
        newApplication.data[registrationSection.id] = {
          ...application.data[registrationSection.id],
          ...{
            presentAtBirthRegistration: this.state.informant,
            applicant: {
              value: this.state.informant,
              nestedFields: {}
            }
          }
        }
      } else {
        newApplication.data[applicantsSection.id] = {
          ...application.data[applicantsSection.id],
          ...{
            // Need to empty those bacause next screen will fill this up
            // TODO: currently contact point is the informant,
            // need to define the difference between informant and contact point on death schema
            relationship: this.state.informant
            // applicantPhone: '',
            // applicantOtherRelationship: ''
          }
        }
      }
      this.props.modifyApplication(newApplication)

      this.props.location.pathname.includes(Event.BIRTH)
        ? goToBirthRegistrationAsParent(this.props.match.params.applicationId)
        : goToDeathRegistration(this.props.match.params.applicationId)
    } else if (
      event === Event.DEATH &&
      this.state.informant &&
      this.state.informant !== 'error' &&
      this.state.informant === INFORMANT.SOMEONE_ELSE
      // &&
      // this.state.phoneNumber &&
      // !this.state.isPhoneNoError &&
      // this.state.relationship !== ''
    ) {
      const {
        application,
        goToDeathRegistration,
        applicantsSection
      } = this.props
      this.props.modifyApplication({
        ...application,
        data: {
          ...application.data,
          [applicantsSection.id]: {
            ...application.data[applicantsSection.id],
            ...{
              relationship: this.state.informant
              // applicantPhone: this.state.phoneNumber,
              // applicantOtherRelationship: this.state.relationship
            }
          }
        }
      })

      goToDeathRegistration(this.props.match.params.applicationId)
    } else if (
      event === Event.BIRTH &&
      this.state.informant &&
      this.state.informant !== 'error' &&
      this.state.informant === INFORMANT.SOMEONE_ELSE
    ) {
      const {
        application,
        registrationSection,
        goToBirthRegistrationAsParent
      } = this.props

      const modifiedApplicationData = {
        ...application,
        data: {
          ...application.data,
          [registrationSection.id]: {
            ...application.data[registrationSection.id],
            ...{
              presentAtBirthRegistration: this.state.informant,
              applicant: {
                value:
                  (this.props.application &&
                    this.props.application.data &&
                    this.props.application.data[registrationSection.id] &&
                    this.props.application.data[registrationSection.id]
                      .applicant &&
                    (this.props.application.data[registrationSection.id]
                      .applicant as IFormSectionData).value) ||
                  '',
                nestedFields:
                  (this.props.application &&
                    this.props.application.data &&
                    this.props.application.data[registrationSection.id] &&
                    this.props.application.data[registrationSection.id]
                      .applicant &&
                    (this.props.application.data[registrationSection.id]
                      .applicant as IFormSectionData).nestedFields) ||
                  {}
              }
            }
          }
        }
      }
      this.props.modifyApplication(modifiedApplicationData)
      goToBirthRegistrationAsParent(this.props.match.params.applicationId)
    } else {
      this.setState({ informant: 'error' })
    }
  }
  // handleRelationshipChange = (value: string) => {
  //   this.setState({
  //     relationship: value,
  //     touched: true,
  //     isError: false
  //   })
  // }
  // handlePhoneNoChange = (value: string) => {
  //   let invalidPhoneNo = false
  //   if (phoneNumberFormat(value)) {
  //     invalidPhoneNo = true
  //   }
  //   this.setState({
  //     isPhoneNoError: invalidPhoneNo ? true : false,
  //     phoneNumber: value,
  //     touched: true,
  //     isError: false
  //   })
  // }
  // renderPhoneNumberField = (): JSX.Element => {
  //   return (
  //     <InputField
  //       id="phone_number"
  //       label={this.props.intl.formatMessage(formMessages.phoneNumber)}
  //       touched={this.state.touched}
  //       error={
  //         this.state.isPhoneNoError
  //           ? this.props.intl.formatMessage(
  //               validationMessages.phoneNumberNotValid
  //             )
  //           : ''
  //       }
  //       hideAsterisk={true}
  //     >
  //       <TextInput
  //         id="phone_number_input"
  //         type="tel"
  //         name={PHONE_NO_FIELD_STRING}
  //         isSmallSized={true}
  //         value={this.state.phoneNumber}
  //         onChange={e => this.handlePhoneNoChange(e.target.value)}
  //         touched={this.state.touched}
  //         error={this.state.isPhoneNoError}
  //       />
  //     </InputField>
  //   )
  // }
  render() {
    const { intl } = this.props
    const event = this.props.location.pathname.includes(Event.BIRTH)
      ? Event.BIRTH
      : Event.DEATH
    const infornantFields = setInformantFields(intl, event)

    let titleMessage
    switch (event) {
      case Event.BIRTH:
        titleMessage = constantsMessages.newBirthRegistration
        break
      case Event.DEATH:
        titleMessage = constantsMessages.newDeathRegistration
        break
      default:
        titleMessage = constantsMessages.newBirthRegistration
    }

    return (
      <Container>
        <EventTopBar
          title={intl.formatMessage(titleMessage)}
          goHome={() => {
            this.props.deleteApplication(this.props.application)
            this.props.goToHome()
          }}
        />

        <BodyContent id="select_informant_view">
          <TertiaryButton
            align={ICON_ALIGNMENT.LEFT}
            icon={() => <BackArrow />}
            onClick={this.props.goBack}
          >
            {intl.formatMessage(buttonMessages.back)}
          </TertiaryButton>

          <Title>
            {event === Event.BIRTH
              ? intl.formatMessage(messages.birthInformantTitle)
              : intl.formatMessage(messages.deathInformantTitle)}
          </Title>
          {this.state.informant === 'error' && (
            <ErrorText id="error_text">
              {event === Event.BIRTH
                ? intl.formatMessage(messages.birthErrorMessage)
                : intl.formatMessage(messages.deathErrorMessage)}
            </ErrorText>
          )}
          <Actions id="select_parent_informant">
            {infornantFields.map((infornantField: IInformantField) => {
              return (
                <RadioButton
                  size={RADIO_BUTTON_LARGE_STRING}
                  key={infornantField.id}
                  name={INFORMANT_FIELD_STRING}
                  label={infornantField.option.label}
                  value={infornantField.option.value}
                  id={infornantField.id}
                  selected={
                    this.state.informant === infornantField.option.value
                      ? infornantField.option.value
                      : ''
                  }
                  onChange={() =>
                    this.setState({
                      informant: infornantField.option.value as string
                    })
                  }
                  disabled={infornantField.disabled}
                />
              )
            })}
            {/* {this.state.informant === INFORMANT.SOMEONE_ELSE &&
              event === Event.DEATH && (
                <ChildContainer>
                  <InputField
                    id="relationship"
                    label={intl.formatMessage(
                      formMessages.applicantsRelationWithDeceased
                    )}
                    touched={this.state.touched}
                    hideAsterisk={true}
                  >
                    <TextInput
                      id="relationship_input"
                      name="relationship"
                      isSmallSized={true}
                      value={this.state.relationship}
                      onChange={e =>
                        this.handleRelationshipChange(e.target.value)
                      }
                      touched={this.state.touched}
                    />
                  </InputField>
                  {this.renderPhoneNumberField()}
                </ChildContainer>
              )} */}
          </Actions>
          <PrimaryButton id="continue" onClick={this.handleContinue}>
            {intl.formatMessage(buttonMessages.continueButton)}
          </PrimaryButton>
        </BodyContent>
      </Container>
    )
  }
}

const mapStateToProps = (
  store: IStoreState,
  props: RouteComponentProps<{ applicationId: string }>
) => {
  const { match } = props
  return {
    registrationSection: getBirthSection(store, BirthSection.Registration),
    applicantsSection: getDeathSection(store, DeathSection.Applicants),
    application: store.applicationsState.applications.find(
      ({ id }) => id === match.params.applicationId
    )!
  }
}

export const SelectInformant = withRouter(
  connect(
    mapStateToProps,
    {
      goBack,
      goToHome,
      goToBirthContactPoint,
      goToDeathContactPoint,
      goToBirthRegistrationAsParent,
      goToPrimaryApplicant,
      goToDeathRegistration,
      modifyApplication,
      deleteApplication
    }
  )(injectIntl(SelectInformantView))
)
