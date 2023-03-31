import { FC, Suspense, ComponentType } from 'react'

interface LazyLoaderProps {}

const LazyLoader: <P extends object>(
	Component: ComponentType<P>
) => FC<P & LazyLoaderProps> = Component => props =>
	(
		<Suspense fallback='Loading...'>
			<Component {...props} />
		</Suspense>
	)

export default LazyLoader
