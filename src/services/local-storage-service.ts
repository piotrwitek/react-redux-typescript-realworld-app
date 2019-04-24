const version = process.env.APP_VERSION || 0;
const PREFIX = `MY_APP_v${version}::`;

export function set<T = object>(key: string, value: T): void {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error('store serialization failed');
  }
}

export function get<T = object>(key: string): T | undefined {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (serializedValue == null) {
      return;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
}
