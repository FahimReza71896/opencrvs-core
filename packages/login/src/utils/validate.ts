import { defineMessages } from 'react-intl'
import { Validation } from '../type/fields'
import { config } from '../config'

export const messages = defineMessages({
  required: {
    id: 'validations.required',
    defaultMessage: 'Required',
    description: 'The error message that appears on required fields'
  },
  minLength: {
    id: 'validations.minLength',
    defaultMessage: 'Must be {min} characters or more',
    description:
      'The error message that appears on fields with a minimum length'
  },
  numberRequired: {
    id: 'validations.numberRequired',
    defaultMessage: 'Must be a number',
    description:
      'The error message that appears on fields where the value must be a number'
  },
  phoneNumberFormat: {
    id: 'validations.phoneNumberFormat',
    defaultMessage:
      'Must be a valid {locale} mobile phone number. Starting with 0. E.G. {format}',
    description:
      'The error message that appears on phone numbers where the first character must be a 0'
  },
  mobilePhoneRegex: {
    id: 'validations.mobilePhoneRegex',
    defaultMessage: '07[0-9]{9,10}',
    description:
      'The regular expression to use when validating a local mobile phone number'
  },
  mobileNumberFormat: {
    id: 'validations.mobileNumberFormat',
    defaultMessage: '07123456789',
    description:
      'The format of the mobile number that appears in an error message'
  }
})

const dynamicValidationProps = {
  minLength: {
    min: 10
  },
  phoneNumberFormat: {
    locale: config.LOCALE.toUpperCase(),
    format: messages.mobileNumberFormat.defaultMessage
  }
}

const isAValidPhoneNumberFormat = (value: string): boolean => {
  const numberRexExp = new RegExp(messages.mobilePhoneRegex.defaultMessage)
  return numberRexExp.test(value)
}

export const required: Validation = (value: any) =>
  value || typeof value === 'number'
    ? undefined
    : { message: messages.required }

export const minLength = (min: number) => (value: any) =>
  value && value.length < min
    ? { message: messages.minLength, values: dynamicValidationProps.minLength }
    : undefined

export const isNumber: Validation = (value: any) =>
  value && isNaN(Number(value))
    ? { message: messages.numberRequired }
    : undefined

export const phoneNumberFormat: Validation = (value: any, ...rest: any[]) => {
  return value && isAValidPhoneNumberFormat(value)
    ? undefined
    : {
        message: messages.phoneNumberFormat,
        values: dynamicValidationProps.phoneNumberFormat
      }
}