import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adaptor() });