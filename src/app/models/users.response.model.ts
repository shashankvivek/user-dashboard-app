export interface IUserListResponse {
  data: IUser[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface IUserResponse {
  data: IUser;
}
