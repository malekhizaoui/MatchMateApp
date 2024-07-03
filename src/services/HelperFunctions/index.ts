export const extractTimeFromDate=(dateString:Date)=> {
    const date = new Date(dateString);
  
    const hours = date.getUTCHours().toString().padStart(2, '0'); // Convert to UTC hours
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); // Convert to UTC minutes
  
    return `${hours}:${minutes}`;
  }

  export const formatDate = (dateString:Date) => {
    const date = new Date(dateString);
  
    const day = date.getUTCDate();
    const weekday = date.toLocaleDateString('en-GB', {
      weekday: 'long',
      timeZone: 'Europe/Paris'
    });
    const year = date.getUTCFullYear();
  
    return `${day} ${weekday}, ${year}`;
  };

  export const getWeekDaysInfo = () => {
    const today = new Date();
    const daysInfo = [];
    daysInfo.push({
      day: 'today',
      date: `${today.getDate()} ${today.toLocaleDateString('en-US', {
        month: 'long',
      })}`,
      realDay: today.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
    });
  
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    daysInfo.push({
      day: 'tomorrow',
      date: `${tomorrow.getDate()} ${tomorrow.toLocaleDateString('en-US', {
        month: 'long',
      })}`,
      realDay: tomorrow.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
    });
  
    for (let i = 2; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      daysInfo.push({
        day: nextDay.toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        date: `${nextDay.getDate()} ${nextDay.toLocaleDateString('en-US', {
          month: 'long',
        })}`,
        realDay: nextDay.toLocaleDateString('en-US', {weekday: 'long'}), // Actual day of the week
      });
    }
  
    return daysInfo;
  };