import { RootState } from '../store'

export const selectSelectedView = (state: RootState) => state.news.selectedView
export const selectTopHeadlinesState = (state: RootState) =>
	state.news.topHeadlines
export const selectTopHeadlines = (state: RootState) =>
	state.news.topHeadlines.articles
export const selectTopHeadlinesCollectionCount = (state: RootState) =>
	state.news.topHeadlines.totalResults
