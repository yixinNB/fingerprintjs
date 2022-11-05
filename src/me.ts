import * as FingerprintJS from './'
async function getVisitorData() {
  const fp = await FingerprintJS.load({ debug: true })
  let t= await fp.get()
  return t
}
getVisitorData().then(r => console.log(r))
