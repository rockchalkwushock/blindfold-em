import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'

import WizardTimer, { t } from '../../containers/WizardTimer'

jest.useFakeTimers()

const initialState = {
  completed: false,
  cooldown: {
    base: null,
    current: null,
    id: null,
    status: t.STOPPED
  },
  form: {
    activity: '',
    cooldown: '',
    currentFrame: 1,
    timer: ''
  },
  timer: {
    base: null,
    current: null,
    id: null,
    status: t.STOPPED
  }
}

const updateState = (state, newState) => ({
  ...state,
  ...newState
})

describe('Container: <WizardTimer />', () => {
  let wrapper
  let input
  let next
  beforeEach(() => {
    wrapper = mount(<WizardTimer />)
    input = wrapper.find('input')
    next = wrapper.find('button.next')
  })

  test('1. should find initial state', () => {
    expect(wrapper.state()).toEqual(initialState)
  })
  test('2. should find updated state onChange event for `activity`', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        form: { ...wrapper.state('form'), activity: 'coding' }
      })
    )
  })
  test('3. should find updated state onClick event to move to Frame 2', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          currentFrame: 2
        }
      })
    )
  })
  test('4. should find updated state onChange event for `timer`', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          currentFrame: 2,
          timer: '12'
        },
        timer: {
          ...wrapper.state('timer'),
          base: moment.duration(parseInt('12', 10), 'minutes'),
          current: moment.duration(parseInt('12', 10), 'minutes')
        }
      })
    )
  })
  test('5. should find updated state onClick event to move to Frame 3', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          currentFrame: 3,
          timer: '12'
        },
        timer: {
          ...wrapper.state('timer'),
          base: moment.duration(parseInt('12', 10), 'minutes'),
          current: moment.duration(parseInt('12', 10), 'minutes')
        }
      })
    )
  })
  test('6. should find updated state onChange event for `cooldown`', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        cooldown: {
          ...wrapper.state('cooldown'),
          base: moment.duration(parseInt('3', 10), 'minutes'),
          current: moment.duration(parseInt('3', 10), 'minutes')
        },
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          cooldown: '3',
          currentFrame: 3,
          timer: '12'
        },
        timer: {
          ...wrapper.state('timer'),
          base: moment.duration(parseInt('12', 10), 'minutes'),
          current: moment.duration(parseInt('12', 10), 'minutes')
        }
      })
    )
  })
  test('7. should find updated state onClick event to move back to Frame 2', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    wrapper.find('button.prev').simulate('click')
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          currentFrame: 2,
          timer: '12'
        },
        timer: {
          ...wrapper.state('timer'),
          base: moment.duration(parseInt('12', 10), 'minutes'),
          current: moment.duration(parseInt('12', 10), 'minutes')
        }
      })
    )
  })
  test('8. should find updated state onClick event to move to Frame 4', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    expect(wrapper.state()).toEqual(
      updateState(wrapper.state(), {
        cooldown: {
          ...wrapper.state('cooldown'),
          base: moment.duration(parseInt('3', 10), 'minutes'),
          current: moment.duration(parseInt('3', 10), 'minutes')
        },
        form: {
          ...wrapper.state('form'),
          activity: 'coding',
          cooldown: '3',
          currentFrame: 4,
          timer: '12'
        },
        timer: {
          ...wrapper.state('timer'),
          base: moment.duration(parseInt('12', 10), 'minutes'),
          current: moment.duration(parseInt('12', 10), 'minutes')
        }
      })
    )
  })
  test('9. should find updated state onClick event to start Timer', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(1)
    expect(wrapper.state('timer').status).toEqual(1)
    expect(wrapper.find('TimerDisplay').props().current).toEqual('0:11:59')
  })
  test('10. should find updated state onClick event to stop Timer', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(2)
    expect(wrapper.state('timer').status).toEqual(1)
    expect(wrapper.find('TimerDisplay').props().current).toEqual('0:11:59')
    wrapper.find('button.stop').simulate('click')
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.find('TimerDisplay').props().current).toEqual('0:12:00')
  })
  test('11. should find updated state on Timer completion leading to Cooldown start', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    expect(wrapper.state('timer').id).toEqual(3)
    expect(wrapper.state('timer').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.state('cooldown').id).toEqual(4)
    expect(wrapper.state('cooldown').status).toEqual(1)
    expect(wrapper.find('CoolDownDisplay').props().current).toEqual('0:03:00')
  })
  test('12. should find updated state on Cooldown start', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    expect(wrapper.state('timer').id).toEqual(5)
    expect(wrapper.state('timer').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.state('cooldown').id).toEqual(6)
    expect(wrapper.state('cooldown').status).toEqual(1)
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.find('CoolDownDisplay').props().current).toEqual('0:02:59')
  })
  test('13. should find updated state onClick event to stop Cooldown', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    expect(wrapper.state('timer').id).toEqual(7)
    expect(wrapper.state('timer').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.state('cooldown').id).toEqual(8)
    expect(wrapper.state('cooldown').status).toEqual(1)
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.find('CoolDownDisplay').props().current).toEqual('0:02:59')
    wrapper.find('button.stop').simulate('click')
    expect(wrapper.state('cooldown').id).toEqual(null)
    expect(wrapper.state('cooldown').status).toEqual(0)
    expect(wrapper.find('TimerDisplay').props().current).toEqual('0:12:00')
  })
  test('14. should find updated state on Cooldown completion leading to Completed View', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    expect(wrapper.state('timer').id).toEqual(9)
    expect(wrapper.state('timer').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.state('cooldown').id).toEqual(10)
    expect(wrapper.state('cooldown').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        cooldown: {
          ...wrapper.state('cooldown'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('completed')).toEqual(true)
    expect(wrapper.state('cooldown').id).toEqual(null)
    expect(wrapper.state('cooldown').status).toEqual(0)
  })
  test('15. should find updated state onClick event to reset application', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    next.simulate('click')
    input.simulate('change', { target: { name: 'timer', value: '12' } })
    next.simulate('click')
    input.simulate('change', { target: { name: 'cooldown', value: '3' } })
    next.simulate('click')
    wrapper.find('button.start').simulate('click')
    expect(wrapper.state('timer').id).toEqual(11)
    expect(wrapper.state('timer').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('timer').id).toEqual(null)
    expect(wrapper.state('timer').status).toEqual(0)
    expect(wrapper.state('cooldown').id).toEqual(12)
    expect(wrapper.state('cooldown').status).toEqual(1)
    wrapper.setState(
      updateState(wrapper.state(), {
        cooldown: {
          ...wrapper.state('cooldown'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
    )
    jest.runOnlyPendingTimers()
    wrapper.update()
    expect(wrapper.state('completed')).toEqual(true)
    expect(wrapper.state('cooldown').id).toEqual(null)
    expect(wrapper.state('cooldown').status).toEqual(0)
    wrapper.find('button.reset').simulate('click')
    expect(wrapper.state('form')).toEqual({
      activity: '',
      cooldown: '',
      currentFrame: 1,
      timer: ''
    })
  })
})
