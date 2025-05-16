export default function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const offsetIST = 5.5 * 60 * 60 * 1000; 
    const dateIST = new Date(date.getTime() + offsetIST);
    
    const now = new Date();
    const nowIST = new Date(now.getTime() + offsetIST);
    
    const seconds = Math.floor((nowIST - dateIST) / 1000);
    
    let interval = Math.floor(seconds / 31536000); // years
    if (interval >= 1) {
        return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
    
    interval = Math.floor(seconds / 2592000); // months
    if (interval >= 1) {
        return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
    
    interval = Math.floor(seconds / 86400); // days
    if (interval >= 1) {
        return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
    
    interval = Math.floor(seconds / 3600); // hours
    if (interval >= 1) {
        return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
    }
    
    interval = Math.floor(seconds / 60); // minutes
    if (interval >= 1) {
        return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
    }
    return "just now";
}