import React from 'react';

type LoaderProps = { isLoading: boolean; children: JSX.Element };
export default function Loader({ isLoading, children }: LoaderProps): JSX.Element {
  if (isLoading) return <div>Loading...</div>;
  return children;
}
