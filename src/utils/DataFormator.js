export const formatViews = (num) => {
    if(num >= 1000000){
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if(num >= 1000){
        return (num / 1000).toFixed(0) + 'K';
    }
    return num 
}

export const formatDuration = (seconds) => {
    if (typeof seconds !== 'number' || seconds < 0) return '0:00';

    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    const paddedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${minutes}:${paddedSeconds}`;
}

export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now - past) / 1000)

    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;

    if (diffInSeconds < secondsInMinute) {
        return `${diffInSeconds} seconds ago`;
    }
    if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(diffInSeconds / secondsInDay);
    if (days < 30) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return past.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}