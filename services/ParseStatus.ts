// Define a mapping function for status
export function getStatusString(status: number) {
  switch (status) {
    case 1:
      return 'Pending';
    case 2:
      return 'Approved';
    case 3:
      return 'Rejected';
    default:
      return 'Unknown';
  }
}

export function getTypeOfLeaveString(type: number) {
    
    switch (type) {
        case 1:
            return 'ilness';
        case 2:
            return 'entitlement';
        default:
            return 'Unknown';
  }
}
