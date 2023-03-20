export interface MovieAPISuccess {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieAPIFailure {
  status_message: string;
  status_code: number;
  success?: boolean;
}

export type MovieAPIResponse = MovieAPISuccess | MovieAPIFailure;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ErrorMessage {
  DATA_LOAD: '데이터를 불러올 수 없습니다.';
}
