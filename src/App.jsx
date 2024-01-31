import React, { useState } from 'react'
import { Home,NotFound } from './pages/index'
import { RootLayout } from './layout/index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home setProgress={setProgress} />} />
        <Route path="*" element={<NotFound setProgress={setProgress} />} />
      </Route>
    )
  );



  return (
    <>
      <LoadingBar color='black' shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
