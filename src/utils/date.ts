// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handleDate = () =>
  (
    new Date().getDate().toString() +
    '/' +
    new Date().getMonth().toString() +
    '/' +
    new Date().getFullYear().toString() +
    ' ' +
    new Date().getHours().toString() +
    ':' +
    new Date().getMinutes().toString()
  );


