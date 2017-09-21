import { Native } from 'mamba-websdk'

let config = {
  SC: 167988962,
  // SC: Native.MbMerchant.getStoneCode(),
  Serial: Native.System.getSerialNumber(),
  SAK: Native.MbMerchant.getInfo().saleAffiliationKey,
  ravAutoStatus: false,
  // url: 'https://poiprepayment.stone.com.br:8443/v1'
  url: 'https://poiprepayment-dev.stone.com.br'
}

function getMerchantData () {
  return {
    stoneCode: config.SC,
    serial: config.Serial,
    SAK: config.SAK
  }
}

function getUrl () {
  return config.url
}

let MbRav = {
  getUrl,
  getMerchantData
}

if (window.MbRav === undefined) {
  window.MbRav = MbRav
}

export default window.MbRav
