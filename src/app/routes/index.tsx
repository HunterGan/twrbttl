import { FC, ReactNode } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import { MainLayout } from './layouts/main'
import { MainPage } from '@/pages/main'

export const AppRoutes: FC = () => {
	const isAuth = true
	const CheckAccessPrivateRoute = (x: boolean, y: ReactNode) => x ? y : null

	return useRoutes([
	{
	path: '*',
	element: <div>Not found page</div>,
	},
	{
	path: '/',
	element: CheckAccessPrivateRoute(isAuth, <Outlet/>),
	children: [
	// With main layout
	{
	path: '/',
	element: <MainLayout/>,
	children: [
	{
	path: '/',
	element: <MainPage/>,
	},
	],
	},
	],
	},
	])
}
