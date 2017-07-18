
let _EVENT_ACTIONS = {}

export function dispatch(eventName, passenger) {
  console.log('DISPATCH ' + eventName)
  let actions = _EVENT_ACTIONS[eventName];
  if (!actions) {
    return;
  }
  var actionsArray = actions.arr;
  for (let iterator in actionsArray) {
    let action = actionsArray[iterator];
    action(passenger);
  }
}

export function handle(eventName, action) {
  let actions = _EVENT_ACTIONS[eventName];
  if (!actions) {
    actions = {
      arr: [],
      map: {}
    };
    _EVENT_ACTIONS[eventName] = actions;
  }
  if (actions.map[eventName]) {
    return;
  }
  actions.map[eventName] = true;
  actions.arr.push(action);
}

export function unhandle(eventName) {
  _EVENT_ACTIONS[eventName] = {
    arr: [],
    map: {}
  }
}
