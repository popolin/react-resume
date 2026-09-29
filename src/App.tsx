import { AssistantProvider } from './context/AssistantContext'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { EngineeringHighlights } from './components/highlights/EngineeringHighlights'
import { Experience } from './components/experience/Experience'
import { About } from './components/about/About'
import { Expertise } from './components/expertise/Expertise'
import { Projects } from './components/projects/Projects'
import { AIAssistant } from './components/assistant/AIAssistant'

function App() {
  return (
    <AssistantProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <EngineeringHighlights />
        <Experience />
        <Expertise />
        <Projects />
        <About />
      </main>
      <Footer />
      <AIAssistant />
    </AssistantProvider>
  )
}

export default App
