import { createDomain } from 'effector'

const mode = createDomain()

export const setMode = mode.createEvent<string>()

export const $mode = mode
  .createStore<string>('loght')
  .on(setMode, (_, mode) => mode)
