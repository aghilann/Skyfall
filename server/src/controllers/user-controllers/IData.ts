interface IUser {
  id: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email: string;
  password: string;
  date_created: string;
}

export interface IData {
  rows: IUser[];
}
