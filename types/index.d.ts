/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

import {ActionFunction, LoaderFunction} from 'remix'

type TypedLoader<
  Params extends Record<string, unknown> = Record<string, unknown>,
> = (
  args: Omit<Parameters<LoaderFunction>['0'], 'params'> & {params: Params},
) => ReturnType<LoaderFunction>

type TypedAction<
  Params extends Record<string, unknown> = Record<string, unknown>,
> = (
  args: Omit<Parameters<ActionFunction>['0'], 'params'> & {params: Params},
) => ReturnType<ActionFunction>

export {TypedLoader, TypedAction}
