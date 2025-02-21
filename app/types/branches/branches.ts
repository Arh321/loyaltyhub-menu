export interface Main {
  status: string;
  message: string;
  result: Result[];
  errors: null;
}

export interface Result {
  branch_id: number;
  name: string;
  location: string;
  contact_phone: string;
  email: string;
  operating_hours: string;
  status: number;
  latitude: number;
  longitude: number;
}
