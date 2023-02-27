/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */
export interface Plant {
  id: number;
  name: string;
  photo?: string;
  profileId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  plantscreated: Plant []
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}


