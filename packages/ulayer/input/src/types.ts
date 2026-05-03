import type { ExtractPropTypes } from 'vue'

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  size: {
    type: String,
    values: ['large', 'default', 'small'],
    default: 'default'
  },
  prefixIcon: String,
  suffixIcon: String
}

export type InputProps = ExtractPropTypes<typeof inputProps>
