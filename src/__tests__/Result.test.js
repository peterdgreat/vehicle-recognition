import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from '../component/Result';
import store from '../redux/configurestore';

describe('Test Result To Match Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
       <Router>
        <Routes>
           <Route path="/" element={<Result />} />
        </Routes>
         </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Result', () => {
  test('Expect Test To be Truthy ', () => {
    render(
      <Provider store={store}>
       <Router>
        <Routes>
           <Route path="/" element={<Result />} />
        </Routes>
         </Router>
      </Provider>,
    );
    const header = screen.findByText('No Car Uploaded');
    expect(header).toBeTruthy();
  });
});

