import { getAppLogs, getUsersInfo } from '@/action'
import { Accordion } from '@/components/accordion'
import { Display } from '@/components/display'

export default async function Home() {
  const [users, logs] = await Promise.all([getUsersInfo(), getAppLogs()])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 py-24">
      <div className="w-[96%] max-w-2xl p-2 md:-translate-y-10">
        <Display users={users} />
      </div>
      <Accordion logs={logs} />
    </div>
  )
}
