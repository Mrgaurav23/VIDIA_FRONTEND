import  Header  from './component/layout/Header.jsx'
import Sidebar from './component/layout/Sidebar.jsx'
import VideoCard from './component/video/VideoCard.jsx'
import Logo from './component/layout/Logo.jsx'
import VideoGridContainer from './component/video/VideoGridContainer.jsx';
import WelcomeBanner from './component/layout/WelcomeBanner.jsx'
import Home from './component/layout/Home.jsx'

import ProfileHeaderCard from './component/profile/ProfileHeaderCard.jsx';
import ProfileNavigation from './component/profile/ProfileNavigation.jsx';
import HistoryView from './component/profile/HistoryView.jsx';
import LikedVideos from './component/profile/LikedVideos.jsx';
import ProfileDashboard from './component/profile/ProfileDashboard.jsx';
import ProfileContentView from './component/profile/ProfileContentView.jsx';
import SettingView from './component/profile/SettingView.jsx';
import SubscriptionView from './component/profile/SubscriptionView.jsx';
import PlaylistsView from './component/profile/PlaylistsView.jsx';
import api from './api/axios.js';
import VideoPlayerPage from './component/video/VideoPlayerPage.jsx';
import useFetch from './hooks/useFetch.js'
import useMutation from './hooks/useMutation.js'
import UploadModel from './component/video/UploadModel.jsx';
import UploadPage from './component/layout/UploadPage.jsx'
import App from './App.jsx'

export {
    App,

    Header,
    Sidebar,
    VideoCard,
    Logo,
    VideoGridContainer,
    WelcomeBanner,
    Home,

    ProfileHeaderCard,
    ProfileNavigation,
    HistoryView,
    LikedVideos,
    ProfileDashboard,
    ProfileContentView,
    SettingView,
    SubscriptionView,
    PlaylistsView,
     
    useFetch,
    useMutation,
    api,

    VideoPlayerPage, 
    UploadModel,  
    UploadPage 
}