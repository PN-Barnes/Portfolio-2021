import React from 'react';
import backgroundCard from './bioComponents/Background';
import resumeCard from './bioComponents/Resume';
import skillsCard from './bioComponents/Skills';
import trainingCard from './bioComponents/Training';

export default function Bio() {
  return (
    <main class="container-xl" id="bio">
      <div class="row row-cols-1 row-cols-md-2 gx-4 gy-4">
        <backgroundCard />
        <skillsCard />
        <trainingCard />
        <resumeCard />
      </div>
    </main>
  );
}
