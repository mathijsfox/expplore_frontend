import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import Login  from '../pages/login/Login';
import Advert from '../pages/adverts/Adverts';
import Register from '../pages/login/Register';
import PlaceAdvert from '../pages/adverts/PlaceAdvert';
import Nav from '../components/nav';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';


Enzyme.configure({ adapter: new Adapter() });

beforeAll(()=>{
  mount(<App></App>)
})

it('Renders all pages without crashing',()=>{
  shallow(<Login/>);

  shallow(<Advert/>);

  shallow(<Register/>);

  shallow(<PlaceAdvert/>);

  shallow(<Nav/>);
})