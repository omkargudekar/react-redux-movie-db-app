import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer'
import { Row } from 'antd'

configure({ adapter: new Adapter() });


describe("Footer Component Test", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    })

    it("Should have one Row component", () => {
        expect(wrapper.find(Row)).toHaveLength(1);
    })
    it("Should have one Row component", () => {
        expect(wrapper.find(Row))
    })
})