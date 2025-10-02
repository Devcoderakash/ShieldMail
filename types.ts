
export interface Email {
  id: string;
  sender: string;
  subject: string;
  body: string;
  timestamp: Date;
  read: boolean;
}
