export class TimestampFormatFirestoreResponse {

  public readonly item:any;

  constructor( private readonly timestamp: any) {
    this.item = this.formatFirestoreResponse(timestamp);
  }

  formatFirestoreResponse(data:any) {
    const formattedData:any = {};
    Object.keys(data).forEach((key) => {
      if (key === 'createdAt' || key === 'updatedAt') {
        const timestamp = data[key];
        const date = new Date(timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000);
        formattedData[key] = date.toISOString();
        
      } else {
        formattedData[key] = data[key];
      }
    });
    return formattedData;
   
  }

  get Item(): any {
    return this.item;
  }
  
}