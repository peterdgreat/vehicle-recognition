import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Car from '../component/Car';
import store from '../redux/configurestore';

describe('Car', () => {
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