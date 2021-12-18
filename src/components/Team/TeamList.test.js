import { render, screen } from '@testing-library/react';
import TeamList from './TeamList';
import { BrowserRouter } from 'react-router-dom';

test('renders playerdetail', () => {
  const container = render(
    <BrowserRouter>
      <TeamList match={{ params: { id: 1 } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
