// Define a mapping function for status
export function getStatusString(status: number) {
  switch (status) {
    case 1:
      return 'Approved';
    case 2:
      return 'Pending';
    case 3:
      return 'Rejected';
    default:
      return 'Unknown';
  }
}

export function getTypeOfLeaveString(type: number) {
    
    switch (type) {
        case 1:
            return 'Vacation';
        case 2:
            return 'Sick Leave';
        default:
            return 'Unknown';
  }
}
