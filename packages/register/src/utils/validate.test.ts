import {
  isAValidPhoneNumberFormat,
  requiredSymbol,
  required,
  minLength,
  isNumber,
  phoneNumberFormat
} from './validate'
import { config } from '../config'

describe('validate', () => {
  describe('isAValidPhoneNumberFormat. Checks a local phone number format complies with regex', () => {
    it('should error when supplied a bad value.', () => {
      const badValue = 'hgjhg'
      const response = false
      expect(isAValidPhoneNumberFormat(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = '07111111111'
      const response = true
      expect(isAValidPhoneNumberFormat(goodValue)).toEqual(response)
    })
  })
  describe('requiredSymbol. Used for number fields that use a symbol (e.g.: x) as an error message', () => {
    it('Should error when supplied a bad value. ', () => {
      const badValue = ''
      const response = {
        message: {
          defaultMessage: '',
          description:
            'A blank error message. Used for highlighting a required field without showing an error',
          id: 'validations.requiredSymbol'
        }
      }
      expect(requiredSymbol(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = 'jkgjgjgkgjkj'
      const response = undefined
      expect(requiredSymbol(goodValue)).toEqual(response)
    })
  })
  describe('required. Used for fields that must have a value', () => {
    it('Should error when supplied a bad value. ', () => {
      const badValue = ''
      const response = {
        message: {
          id: 'validations.required',
          defaultMessage: 'Required',
          description: 'The error message that appears on required fields'
        }
      }
      expect(required(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = 'jkgjgjgkgjkj'
      const response = undefined
      expect(required(goodValue)).toEqual(response)
    })
  })
  describe('minLength. Used for fields that have a minimum length', () => {
    it('Should error when supplied a bad value. ', () => {
      const badValue = '1'
      const response = {
        message: {
          id: 'validations.minLength',
          defaultMessage: 'Must be {min} characters or more',
          description:
            'The error message that appears on fields with a minimum length'
        },
        values: {
          min: 10
        }
      }
      expect(minLength(10)(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = '1234567890'
      const response = undefined
      expect(minLength(10)(goodValue)).toEqual(response)
    })
  })
  describe('isNumber. Checks a value is a number', () => {
    it('should error when supplied a bad value.', () => {
      const badValue = 'hgjhg'
      const response = {
        message: {
          id: 'validations.numberRequired',
          defaultMessage: 'Must be a number',
          description:
            'The error message that appears on fields where the value must be a number'
        }
      }
      expect(isNumber(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = '7'
      const response = undefined
      expect(isNumber(goodValue)).toEqual(response)
    })
  })
  describe('phoneNumberFormat. Checks a value is a valid phone number returning the message descriptor', () => {
    it('should error when supplied a bad value.', () => {
      const badValue = 'hgjhg'
      const response = {
        message: {
          id: 'validations.phoneNumberFormat',
          defaultMessage:
            'Must be a valid {locale} mobile phone number. Starting with 0. E.G. {format}',
          description:
            'The error message that appears on phone numbers where the first character must be a 0'
        },
        values: {
          locale: config.LOCALE.toUpperCase(),
          format: '07123456789'
        }
      }
      expect(phoneNumberFormat(badValue)).toEqual(response)
    })
    it('should pass when supplied a good value.', () => {
      const goodValue = '07111111111'
      const response = undefined
      expect(phoneNumberFormat(goodValue)).toEqual(response)
    })
  })
})