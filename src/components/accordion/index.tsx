import { AboutProject } from './AboutProject'
import { Logs } from './Logs'
import { Logs as LogsType } from '@/lib/dto'

export function Accordion({ logs }: { logs: LogsType[] }) {
  return (
    <div className="mx-auto mt-6 w-[90%] max-w-2xl space-y-3 text-primary-foreground">
      <AboutProject />
      {logs.length >= 1 && <Logs logs={logs} />}
    </div>
  )
}
