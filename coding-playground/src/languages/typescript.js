import Playground from 'javascript-playgrounds'
import NavBar from '../components/NavBar'

export default function TypescriptPlayground() {
    return (
        <div>
            <NavBar />
            <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8" style={{ "height": "100vh" }}>
                <Playground style={{ width: "80%", height: 500 }} entry='main.tsx' />
            </div>
        </div>
    )
}