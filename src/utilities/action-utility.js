import HttpErrorResponseModel from '../models/http-error-response-model'

export async function createThunkEffect(dispatch, actionType, effect, ...args) {
  dispatch(createAction(actionType))

  const model = await effect(...args)
  const modelData = model.data
  const isError = modelData instanceof HttpErrorResponseModel

  dispatch(createAction(`${actionType}_FINISHED`, modelData, isError))

  return modelData
}

export async function createThunkEffectWithMeta(dispatch, actionType, effect, meta, ...args) {
  dispatch(createAction(actionType))

  const model = await effect(...args)
  const isError = model instanceof HttpErrorResponseModel

  dispatch(createAction(`${actionType}_FINISHED`, model, isError, meta))

  return model
}

export function createAction(type, payload = undefined, error = false, meta = null) {
  return { type, payload, error, meta }
}
