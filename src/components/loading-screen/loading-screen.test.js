import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`LoadingScreen should render correctly`, () => {
  const {getByText} = render(
      <LoadingScreen />
  );

  const loadingTextElement = getByText(`Please. Wait for a response from the server...`);

  expect(loadingTextElement).toBeInTheDocument();
});
