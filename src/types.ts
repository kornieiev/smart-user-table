export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
    website?: string;
  };
  phone: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface FiltersType {
  name: string;
  userName: string;
  phone: string;
  email: string;
}

export interface StateType {
  allUsers: UserType[];
  isLoading: boolean;
  error: null | string;
  filters: FiltersType;
}
