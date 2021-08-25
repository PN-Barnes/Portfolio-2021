import React from 'react';
import BackgroundCard from './bioComponents/Background';
import ResumeCard from './bioComponents/Resume';
import SkillsCard from './bioComponents/Skills';
import TrainingCard from './bioComponents/Training';

export default function Bio() {
  return (
    <main className="container-xl" id="bio">
      <div className="row row-cols-1 row-cols-md-2 gx-4 gy-4">
        <BackgroundCard />
        <SkillsCard />
        <TrainingCard />
        <ResumeCard />
      </div>
    </main>
  );
}
