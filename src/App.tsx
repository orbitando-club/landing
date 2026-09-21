import { GridBackground } from './components/layout/GridBackground'
import { OrbitField } from './components/layout/OrbitField'
import { Taskbar } from './components/layout/Taskbar'
import { ComingSoonCard } from './components/coming-soon/ComingSoonCard'

export default function App() {
  return (
    <GridBackground>
      <div className="relative min-h-dvh overflow-hidden pb-16">
        <OrbitField />

        <main className="relative mx-auto flex min-h-dvh w-full max-w-2xl items-center px-4 py-10 md:py-14">
          <ComingSoonCard />
        </main>

        <Taskbar />
      </div>
    </GridBackground>
  )
}
