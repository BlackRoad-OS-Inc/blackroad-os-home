import { writeSignatureBeacon } from '../lib/sig'

async function run() {
  await writeSignatureBeacon()
  // eslint-disable-next-line no-console
  console.log('Signature beacon written to public/sig.beacon.json')
  // eslint-disable-next-line no-console
  console.log('<!-- TODO(home-next): add analytics beacon and org-chart generation -->')
}

run()
