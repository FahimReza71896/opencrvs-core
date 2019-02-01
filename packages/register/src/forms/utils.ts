import {
  IFormField,
  Ii18nFormField,
  ISelectOption,
  IConditionals,
  IFormSectionData,
  IConditional,
  SELECT_WITH_OPTIONS,
  RADIO_GROUP,
  CHECKBOX_GROUP,
  IRadioOption,
  ICheckboxOption,
  ISelectFormFieldWithDynamicOptions,
  INFORMATIVE_RADIO_GROUP,
  PARAGRAPH,
  IDynamicListFormField,
  IDynamicValueMapper,
  IFormData,
  IDynamicFormFieldValidators,
  IDynamicFormField
} from './'
import { InjectedIntl, FormattedMessage } from 'react-intl'
import { getValidationErrorsForForm } from 'src/forms/validation'
import {
  IOfflineDataState,
  OFFLINE_LOCATIONS_KEY,
  OFFLINE_FACILITIES_KEY,
  ILocation
} from 'src/offline/reducer'
import { Validation } from 'src/utils/validate'
import * as moment from 'moment'

interface IRange {
  start: number
  end?: number
  value: string
}

export const internationaliseFieldObject = (
  intl: InjectedIntl,
  field: IFormField
): Ii18nFormField => {
  const base = {
    ...field,
    label:
      field.type === PARAGRAPH ? field.label : intl.formatMessage(field.label),
    description: field.description && intl.formatMessage(field.description)
  }

  if (
    base.type === SELECT_WITH_OPTIONS ||
    base.type === RADIO_GROUP ||
    base.type === INFORMATIVE_RADIO_GROUP ||
    base.type === CHECKBOX_GROUP
  ) {
    ;(base as any).options = internationaliseOptions(intl, base.options)
  }
  return base as Ii18nFormField
}

export const internationaliseOptions = (
  intl: InjectedIntl,
  options: Array<ISelectOption | IRadioOption | ICheckboxOption>
) => {
  return options.map(opt => {
    return {
      ...opt,
      label: intl.formatMessage(opt.label)
    }
  })
}

export const generateOptions = (
  options: ILocation[],
  optionType: string
): ISelectOption[] => {
  const optionsArray: ISelectOption[] = []
  options.forEach((option: ILocation, index: number) => {
    optionsArray.push({
      value: option.id,
      label: {
        id: `${optionType}.${option.id}`,
        defaultMessage: option.name,
        description: `${optionType} select item for ${option.id}`
      }
    })
  })
  return optionsArray
}

export const getFieldLabel = (
  field: IDynamicFormField,
  values: IFormSectionData
): FormattedMessage.MessageDescriptor | undefined => {
  if (!field.dynamicDefinitions.label) {
    return undefined
  }
  return field.dynamicDefinitions.label.labelMapper(values[
    field.dynamicDefinitions.label.dependency
  ] as string)
}

export const getFieldValidation = (
  field: IDynamicFormField,
  values: IFormSectionData
): Validation[] => {
  const validate: Validation[] = []
  if (
    field.dynamicDefinitions &&
    field.dynamicDefinitions.validate &&
    field.dynamicDefinitions.validate.length > 0
  ) {
    field.dynamicDefinitions.validate.map(
      (element: IDynamicFormFieldValidators) => {
        const params: any[] = []
        element.dependencies.map((dependency: string) =>
          params.push(values[dependency])
        )
        const fun = element.validator(...params)
        validate.push(fun)
      }
    )
  }

  return validate
}

export const getFieldOptions = (
  field: ISelectFormFieldWithDynamicOptions,
  values: IFormSectionData,
  resources?: IOfflineDataState
) => {
  const dependencyVal = values[field.dynamicOptions.dependency] as string
  if (!dependencyVal) {
    return []
  }
  if (resources && field.dynamicOptions.resource === OFFLINE_LOCATIONS_KEY) {
    const locations = resources[OFFLINE_LOCATIONS_KEY] as ILocation[]
    let partOf: string
    if (dependencyVal === window.config.COUNTRY.toUpperCase()) {
      partOf = 'Location/0'
    } else {
      partOf = `Location/${dependencyVal}`
    }
    return generateOptions(
      locations.filter((location: ILocation) => {
        return location.partOf === partOf
      }),
      'location'
    )
  } else if (
    resources &&
    field.dynamicOptions.resource === OFFLINE_FACILITIES_KEY
  ) {
    const facilities = resources[OFFLINE_FACILITIES_KEY] as ILocation[]
    return generateOptions(facilities, 'facility')
  } else {
    let options
    if (!field.dynamicOptions.options) {
      throw new Error(
        `Dependency '${dependencyVal}' has illegal value, the value should have an entry in the dynamic options object.`
      )
    } else {
      options = field.dynamicOptions.options[dependencyVal]
    }
    return options
  }
}

const getNestedValue = (obj: object, key: string) => {
  return key.split('.').reduce((res, k) => res[k] || '', obj)
}

const betweenRange = (range: IRange, check: number) =>
  range.end ? check >= range.start && check <= range.end : check >= range.start

export const getFieldOptionsByValueMapper = (
  field: IDynamicListFormField,
  values: IFormSectionData | IFormData,
  valueMapper: IDynamicValueMapper
) => {
  const dependencyVal = getNestedValue(
    values,
    field.dynamicItems.dependency
  ) as string

  const firstKey = Object.keys(field.dynamicItems.items)[0]

  if (!dependencyVal) {
    return field.dynamicItems.items[firstKey]
  }

  const mappedValue = valueMapper(dependencyVal)

  let items

  if (!field.dynamicItems.items[mappedValue]) {
    items = field.dynamicItems.items[firstKey]
  } else {
    items = field.dynamicItems.items[mappedValue]
  }
  return items
}

export const diffDoB = (doB: string) => {
  const todaysDate = moment(Date.now())
  const birthDate = moment(doB)
  const diffInDays = todaysDate.diff(birthDate, 'days')

  const ranges: IRange[] = [
    { start: 0, end: 45, value: 'within45days' },
    { start: 46, end: 5 * 365, value: 'between46daysTo5yrs' },
    { start: 5 * 365 + 1, value: 'after5yrs' }
  ]
  const valueWithinRange = ranges.find(range => betweenRange(range, diffInDays))
  return valueWithinRange ? valueWithinRange.value : ''
}

export function isCityLocation(
  locations: ILocation[],
  locationId: string
): boolean {
  const selectedLocation = locations.filter((location: ILocation) => {
    return location.id === locationId
  })[0]
  if (selectedLocation) {
    if (selectedLocation.jurisdictionType === 'CITYCORPORATION') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export const getConditionalActionsForField = (
  field: IFormField,
  values: IFormSectionData,
  resources?: IOfflineDataState
): string[] => {
  if (!field.conditionals) {
    return []
  }

  return field.conditionals
    .filter(conditional =>
      /* tslint:disable-next-line: no-eval */
      eval(conditional.expression)
    )
    .map((conditional: IConditional) => conditional.action)
}

export const hasFormError = (
  fields: IFormField[],
  values: IFormSectionData
): boolean => {
  const errors = getValidationErrorsForForm(fields, values)

  const fieldListWithErrors = Object.keys(errors).filter(key => {
    return errors[key] && errors[key].length > 0
  })
  return fieldListWithErrors && fieldListWithErrors.length > 0
}

export const conditionals: IConditionals = {
  iDType: {
    action: 'hide',
    expression: "!values.iDType || (values.iDType !== 'OTHER')"
  },
  fathersDetailsExist: {
    action: 'hide',
    expression: '!values.fathersDetailsExist'
  },
  permanentAddressSameAsMother: {
    action: 'hide',
    expression: 'values.permanentAddressSameAsMother'
  },
  addressSameAsMother: {
    action: 'hide',
    expression: 'values.addressSameAsMother'
  },
  currentAddressSameAsPermanent: {
    action: 'hide',
    expression: 'values.currentAddressSameAsPermanent'
  },
  countryPermanent: {
    action: 'hide',
    expression: '!values.countryPermanent'
  },
  statePermanent: {
    action: 'hide',
    expression: '!values.statePermanent'
  },
  districtPermanent: {
    action: 'hide',
    expression: '!values.districtPermanent'
  },
  addressLine4Permanent: {
    action: 'hide',
    expression: '!values.addressLine4Permanent'
  },
  addressLine3Permanent: {
    action: 'hide',
    expression: '!values.addressLine3Permanent'
  },
  country: {
    action: 'hide',
    expression: '!values.country'
  },
  state: {
    action: 'hide',
    expression: '!values.state'
  },
  district: {
    action: 'hide',
    expression: '!values.district'
  },
  addressLine4: {
    action: 'hide',
    expression: '!values.addressLine4'
  },
  addressLine3: {
    action: 'hide',
    expression: '!values.addressLine3'
  },
  uploadDocForWhom: {
    action: 'hide',
    expression: '!values.uploadDocForWhom'
  },
  motherCollectsCertificate: {
    action: 'hide',
    expression: 'values.personCollectingCertificate!="MOTHER"'
  },
  fatherCollectsCertificate: {
    action: 'hide',
    expression: 'values.personCollectingCertificate!="FATHER"'
  },
  otherPersonCollectsCertificate: {
    action: 'hide',
    expression: 'values.personCollectingCertificate!="OTHER"'
  },
  certificateCollectorNotVerified: {
    action: 'hide',
    expression:
      '!(values.personCollectingCertificate=="MOTHER" && values.motherDetails===false) && !(values.personCollectingCertificate=="FATHER" && values.fatherDetails===false) && !(values.personCollectingCertificate =="OTHER" && values.otherPersonSignedAffidavit===false)'
  },
  placeOfBirthHospital: {
    action: 'hide',
    expression:
      '(values.placeOfBirth!="HOSPITAL" && values.placeOfBirth!="OTHER_HEALTH_INSTITUTION")'
  },
  otherPlaceOfBirth: {
    action: 'hide',
    expression:
      '(values.placeOfBirth!="OTHER" && values.placeOfBirth!="PRIVATE_HOME")'
  },
  isNotCityLocation: {
    action: 'hide',
    expression:
      '(resources && resources.locations && isCityLocation(resources.locations,values.addressLine4))'
  },
  isCityLocation: {
    action: 'hide',
    expression:
      '!(resources && resources.locations && isCityLocation(resources.locations,values.addressLine4))'
  },
  isNotCityLocationPermanent: {
    action: 'hide',
    expression:
      '(resources && resources.locations && isCityLocation(resources.locations,values.addressLine4Permanent))'
  },
  isCityLocationPermanent: {
    action: 'hide',
    expression:
      '!(resources && resources.locations && isCityLocation(resources.locations,values.addressLine4Permanent))'
  },
  iDAvailable: {
    action: 'hide',
    expression: 'values.iDType === "NO_ID"'
  },
  applicantPermanentAddressSameAsCurrent: {
    action: 'hide',
    expression: 'values.applicantPermanentAddressSameAsCurrent'
  },
  deathPlaceOther: {
    action: 'hide',
    expression: 'values.deathPlaceAddress !== "other"'
  },
  causeOfDeathEstablished: {
    action: 'hide',
    expression: '!values.causeOfDeathEstablished'
  },
  isMarried: {
    action: 'hide',
    expression: '(!values.maritalStatus || values.maritalStatus !== "MARRIED")'
  }
}
