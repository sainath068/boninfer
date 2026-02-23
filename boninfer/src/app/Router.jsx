import { lazy, Suspense, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import { useReducedMotion } from '../lib/useReducedMotion.js'

// Eager-loaded (above-fold critical)
import Home from '../pages/Home.jsx'
import Services from '../pages/Services.jsx'
import ServiceDetail from '../pages/ServiceDetail.jsx'
import Contact from '../pages/Contact.jsx'

// Lazy-loaded (heavy / secondary routes)
const Work = lazy(() => import('../pages/Work.jsx'))
const AiStudio = lazy(() => import('../pages/AiStudio.jsx'))
const OpportunityMapper = lazy(() => import('../pages/OpportunityMapper.jsx'))
const PromptPlaybooks = lazy(() => import('../pages/PromptPlaybooks.jsx'))
const Governance = lazy(() => import('../pages/Governance.jsx'))
const Insights = lazy(() => import('../pages/Insights.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const Privacy = lazy(() => import('../pages/Privacy.jsx'))
const Terms = lazy(() => import('../pages/Terms.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

// Page loader fallback
function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-sand-50">
            <div className="w-8 h-8 rounded-full border-2 border-pulse-500 border-t-transparent animate-spin" aria-label="Loading page" />
        </div>
    )
}

// Motion context — shared across the whole app
export const MotionContext = createContext({ prefersReduced: false, setReduced: () => { } })
export const useMotion = () => useContext(MotionContext)

export default function Router() {
    const { prefersReduced, setReduced } = useReducedMotion()

    return (
        <MotionContext.Provider value={{ prefersReduced, setReduced }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="services" element={<Services />} />
                        <Route path="services/:slug" element={<ServiceDetail />} />
                        <Route path="contact" element={<Contact />} />
                        <Route
                            path="work"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Work />
                                </Suspense>
                            }
                        />
                        <Route
                            path="ai-studio"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <AiStudio />
                                </Suspense>
                            }
                        />
                        <Route
                            path="ai-studio/opportunity-mapper"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <OpportunityMapper />
                                </Suspense>
                            }
                        />
                        <Route
                            path="ai-studio/prompt-playbooks"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <PromptPlaybooks />
                                </Suspense>
                            }
                        />
                        <Route
                            path="governance"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Governance />
                                </Suspense>
                            }
                        />
                        <Route
                            path="insights"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Insights />
                                </Suspense>
                            }
                        />
                        <Route
                            path="about"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <About />
                                </Suspense>
                            }
                        />
                        <Route
                            path="privacy"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Privacy />
                                </Suspense>
                            }
                        />
                        <Route
                            path="terms"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Terms />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <NotFound />
                                </Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MotionContext.Provider>
    )
}
