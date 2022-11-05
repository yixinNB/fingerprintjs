import * as FingerprintJS from './index'
export const fpjs=async function getVisitorData() {
  const fp = await FingerprintJS.load({ debug: true })
  let t= await fp.get()
  return t
}
