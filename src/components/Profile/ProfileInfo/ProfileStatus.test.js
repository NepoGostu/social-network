import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test ('status from props should be in the state', () => {
        const component = create (<ProfileStatus status = 'it-kamasutra.com'/>)
        const root = component.getInstance()
        expect (root.state.status).toBe('it-kamasutra.com')
    })

    test ('After creation span should be displayed', () => {
        const component = create (<ProfileStatus status = 'it-kamasutra.com'/>)
        const root = component.root
        const span = root.findByType('span')
        expect (span).not.toBe(0)
    })
    test ('After creation span should be contain correct status', () => {
        const component = create (<ProfileStatus status = 'it-kamasutra.com'/>)
        const root = component.root
        const span = root.findByType('span')
        expect (span.children[0]).toBe('it-kamasutra.com')
    })
    test ('Input should be displayed in editMode instead of span', () => {
        const component = create (<ProfileStatus status = 'it-kamasutra.com'/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect (input.props.value).toBe('it-kamasutra.com')
    })
})



