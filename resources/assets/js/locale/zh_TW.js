import { formatFileSize, isDefinedGlobally } from './utils';

const messages = {
  _default: (field) => `${field} 無效`,
  after: (field, [target]) => `${field} 必須要晚於 ${target}`,
  alpha: (field) => `${field} 只能以字母組成`,
  alpha_dash: (field) => `${field} 只能以字母、數字及斜線組成`,
  alpha_num: (field) => `${field} 只能以字母及數字組成`,
  alpha_spaces: (field) => `${field} 只能以字母及空格組成`,
  before: (field, [target]) => `${field} 必須要早於 ${target}`,
  between: (field, [min, max]) => `${field} 必須介於 ${min} 至 ${max}之間`,
  confirmed: (field, [confirmedField]) => `${field} 與 ${confirmedField} 輸入的不一致`,
  credit_card: (field) => `${field} 的格式錯誤`,
  date_between: (field, [min, max]) => `${field} 必須在 ${min} 和 ${max} 之間`,
  date_format: (field, [format]) => `${field} 不符合 ${format} 的格式`,
  decimal: (field, [decimals = '*'] = []) => `${field} 必須是數字，而且能夠保留${!decimals || decimals === '*' ? '' : ' ' + decimals} 位小數`,
  digits: (field, [length]) => `${field} 必須是 ${length} 位數字`,
  dimensions: (field, [width, height]) => `${field} 圖片尺寸不正確必須是 ${width} 像素到 ${height} 像素`,
  email: (field) => `${field} 必須是有效的電子郵件地址`,
  excluded: (field) => `所選擇的 ${field} 選項無效`,
  ext: (field) => `${field} 必須是有效的檔案`,
  image: (field) => `${field} 必須是一張圖片`,
  included: (field) => `所選擇的 ${field} 選項無效`,
  integer: (field) => `${field} 必須是整數`,
  ip: (field) => `${field} 必須是一個有效的 IP 位址`,
  length: (field, [length, max]) => {
    if (max) {
      return `${field} 的長度必須在 ${length} 到 ${max} 之間`;
    }

    return `${field} 的長度必須為 ${length}`;
  },
  max: (field, [length]) => `${field} 不能大於 ${length} 個字元`,
  max_value: (field, [max]) => `${field} 不得大於 ${max}`,
  mimes: (field) => `${field} 必須是有效的檔案類型.`,
  min: (field, [length]) => `${field} 不能小於 ${length} 個字元`,
  min_value: (field, [min]) => `${field} 不得小於 ${min}`,
  numeric: (field) => `${field} 必須為一個數字`,
  regex: (field) => `${field} 的格式錯誤`,
  required: (field) => `${field} 不能留空`,
  size: (field, [size]) => `${field} 的大小必須小於 ${formatFileSize(size)}.`,
  url: (field) => `${field} 的格式錯誤`
};

const locale = {
  name: 'zh_TW',
  messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  VeeValidate.Validator.localize({ [locale.name]: locale });
}

export default locale;