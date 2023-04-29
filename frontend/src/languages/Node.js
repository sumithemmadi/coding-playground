import Playground from 'javascript-playgrounds'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom';

export default function NodejsPlayground() {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <NavBar />
            <div className="grid place-items-center " style={{ "height": "100vh" }}>
                <Playground style={{ width: "80%", height: 500 }} />
            </div>
        </div>
    )
}