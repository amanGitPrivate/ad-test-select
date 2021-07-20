export const actionMap = {
  up: ["ArrowUp", "Up"],
  down: ["ArrowDown", "Down"],
  select: ["Enter", " "],
  close: ["Escape", "Esc"],
};

export const NAVIGATION = {
  UP: "up",
  DOWN: "down",
  SELECT: "select",
  CLOSE: "close",
};

const navigationKeys = Object.keys(actionMap).reduce(
  (keys, key) => [...keys, ...actionMap[key]],
  []
);

export const isNavigationKey = (key) => navigationKeys.indexOf(key) > -1;

export const getNavigationAction = (key) => {
  let navigationAction;

  Object.keys(NAVIGATION).some((action) => {
    const mapKey = NAVIGATION[action];
    const keys = actionMap[mapKey];
    const isInKeys = keys.indexOf(key) > -1;

    navigationAction = isInKeys && mapKey;

    return isInKeys;
  });

  return navigationAction;
};
