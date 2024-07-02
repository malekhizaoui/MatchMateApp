export function extractTimeFromDate(dateString:Date) {
    const date = new Date(dateString);
  
    const hours = date.getUTCHours().toString().padStart(2, '0'); // Convert to UTC hours
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Convert to UTC minutes
  
    return `${hours}:${minutes}`;
  }