import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Mobile from './Mobile';

export default function RoadmapContainer() {
  return (
    <div className="flex flex-col">
      <First />
      <Second />
      <Mobile />
      <Third />
      <Fourth />
    </div>
  );
}
