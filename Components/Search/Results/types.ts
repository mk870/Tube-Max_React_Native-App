export type IMusicSearchType = "track" | "playlist" | "artist" | "album";
export type ISearchResultsProps = {
  searchInput: string | undefined;
  searchFilters:  string;
};
