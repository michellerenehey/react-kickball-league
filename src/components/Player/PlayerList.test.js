import { render, screen } from '@testing-library/react';
import PlayerList from './PlayerList';
import { BrowserRouter } from 'react-router-dom';

test('renders playerdetail', () => {
  const container = render(
    <BrowserRouter>
      <PlayerList match={{ params: { id: 1 } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
