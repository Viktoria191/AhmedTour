import React from 'react';

export default function Video(): JSX.Element {
  return (
    <video autoPlay loop muted>
      <source src="/assets/IMG_0560.MP4" type="video/mp4" />
    </video>
  );
}
