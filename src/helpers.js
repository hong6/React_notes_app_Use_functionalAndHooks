export const formatTitle = (body) => {
    var maxLength = 20;
    if (body.length > maxLength) {
      return body.substring(0, maxLength - 3) + '...';
    } else if (body.length === 0) {
      return "New note";
    } else {
      return body;
    }
  }
  
export const formatTimestamp = (timestamp) =>{
    return new Date(timestamp).toUTCString();
  }
