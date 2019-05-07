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

export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toUTCString();
}

export const transformNotes = (notes, searchText) => {
return notes.slice()
  .sort((a, b) =>
    b.timestamp - a.timestamp
  )
  .filter(note =>
    note.body.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );
}