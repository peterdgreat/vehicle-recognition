import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Car from '../component/Car';
import store from '../redux/configurestore';

describe('Test Car To Match Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
       <Router>
        <Routes>
           <Route path="/" element={<Car />} />
        </Routes>
         </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Car', () => {
  test('Expect Test To be Truthy ', () => {
    render(
      <Provider store={store}>
       <Router>
        <Routes>
           <Route path="/" element={<Car />} />
        </Routes>
         </Router>
      </Provider>,
    );
    const header = screen.findByText('Drag or Upload a Car Image');
    expect(header).toBeTruthy();
  });
});

