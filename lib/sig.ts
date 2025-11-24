import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const BEACON_PATH = path.join(process.cwd(), 'public', 'sig.beacon.json')

export type BuildBeacon = {
  ts: string
  agent: string
}

export async function writeSignatureBeacon(agent = 'Home-Gen-0'): Promise<void> {
  const beacon: BuildBeacon = {
    ts: new Date().toISOString(),
    agent
  }

  const dir = path.dirname(BEACON_PATH)
  await mkdir(dir, { recursive: true })
  await writeFile(BEACON_PATH, JSON.stringify(beacon, null, 2))
}
