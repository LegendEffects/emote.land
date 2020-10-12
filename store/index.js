import PeristentStore from '../PersistentStore';

export const plugins = [PeristentStore({moduleName: 'favorites', localStorageName: 'favorites'})]
