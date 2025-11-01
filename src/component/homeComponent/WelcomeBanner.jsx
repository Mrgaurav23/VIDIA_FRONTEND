import React from 'react'

function WelcomeBanner({isExplore}) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl mb-6 shadow-inner border border-gray-700/50">
        <h1 className="text-3xl font-bold text-white mb-2">{isExplore ? "Explore New Content" : "Welcome Home"}</h1>
        <p className="text-gray-400">
            {isExplore ? "Find new and trending videos across all categories." : "Explore the latest trending content from around the web."}
        </p>
    </div>
  )
}

export default WelcomeBanner