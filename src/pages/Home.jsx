import { VideoGridContainer ,VideoCard } from "../component/index.js"
import {WelcomeBanner} from '../component/index.js'

function Home({isExplore}) {
  return (
    <div className="p-4">
        <WelcomeBanner />
        <VideoGridContainer />
        <div className="h-16">
        </div>
    </div>
  )
}

export default Home