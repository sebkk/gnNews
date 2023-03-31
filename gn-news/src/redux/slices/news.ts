import {
	createSlice,
	PayloadAction,
	createAsyncThunk,
	SerializedError,
} from '@reduxjs/toolkit'

import api from '../../api'

export const fetchTopHeadlines = createAsyncThunk(
	'news/topHeadlines',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await api.get('top-headlines?page=1&language=en')

			return {
				articles: data.articles,
				totalResults: data.totalResults,
			}
		} catch (err: any) {
			console.error(err)

			return rejectWithValue(err.response.data.error)
		}
	}
)

export const fetchCountryNews = createAsyncThunk(
	'news/countryNews',
	async (countryCode: string | undefined, { rejectWithValue }) => {
		try {
			const { data } = await api.get(
				`top-headlines?country=${countryCode}&page=1`
			)

			return {
				articles: data.articles,
				totalResults: data.totalResults,
			}
		} catch (err: any) {
			console.error(err)

			return rejectWithValue(err.response.data.error)
		}
	}
)

export interface TArticle {
	author: string | null
	content: string
	description: string
	publishedAt: string
	source: {
		id: string | null
		name: string
	}
	title: string
	url: string
	urlToImage: string | null
}

interface NewsState {
	selectedView: 'module' | 'list'
	countryNews: {
		loading: boolean
		error: null | SerializedError
		articles: null | TArticle[]
		totalResults: number
		articlesCount: number
	}
	topHeadlines: {
		loading: boolean
		error: null | SerializedError
		articles: null | TArticle[]
		totalResults: number
		articlesCount: number
	}
}

const initialState: NewsState = {
	selectedView: 'module',
	countryNews: {
		loading: true,
		error: null,
		articles: null,
		totalResults: 0,
		articlesCount: 0,
	},
	topHeadlines: {
		loading: true,
		error: null,
		articles: null,
		totalResults: 0,
		articlesCount: 0,
	},
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		changeView: (state, action: PayloadAction<'module' | 'list'>) => {
			const view = action.payload

			state.selectedView = view
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchTopHeadlines.pending, state => {
				state.topHeadlines = {
					...state.topHeadlines,
					loading: true,
				}
			})
			.addCase(fetchTopHeadlines.fulfilled, (state, action) => {
				const { articles, totalResults } = action.payload

				state.topHeadlines = {
					...state.topHeadlines,
					articles,
					totalResults,
					articlesCount: articles?.length,
				}
			})
			.addCase(fetchTopHeadlines.rejected, (state, action) => {
				const error = action.error

				state.topHeadlines = {
					...state.topHeadlines,
					loading: false,
					error,
				}
			})
			.addCase(fetchCountryNews.pending, state => {
				state.countryNews = {
					...state.countryNews,
					loading: true,
				}
			})
			.addCase(fetchCountryNews.fulfilled, (state, action) => {
				const { articles, totalResults } = action.payload

				state.countryNews = {
					...state.countryNews,
					articles,
					totalResults,
					articlesCount: articles?.length,
				}
			})
			.addCase(fetchCountryNews.rejected, (state, action) => {
				const error = action.error

				state.countryNews = {
					...state.countryNews,
					loading: false,
					error,
				}
			})
	},
})

export const { changeView } = newsSlice.actions

export default newsSlice.reducer
