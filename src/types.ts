import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
} from 'react-router-dom';

export interface LoaderArgs<Type extends string> extends LoaderFunctionArgs {
  params: Params<ParamParseKey<Type>>;
}

export interface ActionArgs<Type extends string> extends ActionFunctionArgs {
  params: Params<ParamParseKey<Type>>;
}
