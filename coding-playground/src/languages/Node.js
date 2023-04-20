import Playground from 'javascript-playgrounds'
import NavBar from '../components/NavBar'

export default function NodejsPlayground() {
    return (
        <div>
            <NavBar />
            <div class="grid place-items-center " style={{ "height": "100vh" }}>
                <Playground style={{ width: "80%", height: 500 }} />
            </div>
        </div>
    )
}