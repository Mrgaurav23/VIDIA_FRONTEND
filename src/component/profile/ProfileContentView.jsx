import React from 'react'
import {HistoryView,LikedVideos,PlaylistsView, SettingView, SubscriptionView} from '../../index.js'

function ProfileContentView({activeTab}) {
  if(activeTab === 'history'){
    return <HistoryView />
  }else if(activeTab === 'playlists'){
    return <PlaylistsView />
  }else if(activeTab === 'liked'){
    return <LikedVideos />
  }else if(activeTab === 'subscriptions'){
    return <SubscriptionView />
  }else if(activeTab === 'settings'){
    return <SettingView />
  }
  else{
    return <SubscriptionView />
  }
}

export default ProfileContentView