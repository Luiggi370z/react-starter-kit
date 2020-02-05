// Page should organize and present the related feature structure only
// No business logic

import React from 'react';
import { TheTopBar } from 'components/layout';
import { NewFeatureForm, NewFeatureList } from 'components/NewFeature';

const NewFeature = () => {
  return (
    <div>
      <TheTopBar title="New Feature" />
      <NewFeatureForm />
      <NewFeatureList />
    </div>
  );
};

export default NewFeature;
