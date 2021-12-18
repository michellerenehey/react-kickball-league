import { render, screen } from '@testing-library/react';
import TeamDetail from './TeamDetail';
import { BrowserRouter } from 'react-router-dom';

test('renders playerdetail', () => {
  const container = render(
    <BrowserRouter>
      <TeamDetail name="Mt. Hoodies" players={[]} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
