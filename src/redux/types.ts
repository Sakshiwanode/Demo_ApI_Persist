export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface ApiState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }
  