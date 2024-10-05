import { getAppLogs, getUsersInfo } from '@/action'
import { Display } from '@/components/display'
import { LandingPage } from '@/components/landing-page'
import { AppLogs } from '@/components/logs'

export default async function Home() {
  const [users, logs] = await Promise.all([getUsersInfo(), getAppLogs()])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 py-24">
      <div className="w-[96%] max-w-2xl p-2 md:-translate-y-10">
        <Display users={users} />
      </div>
      <LandingPage />
      <AppLogs logs={logs} />
    </div>
  )
}
