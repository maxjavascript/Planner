import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        window.location.replace('https://event-planner-frontend-nu.vercel.app/')
    }, [])

    return null
}
export default App
