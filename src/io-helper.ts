import { getBooleanInput, getNumberInput, getOptional } from '@yakubique/atils/dist';

enum Inputs {
    Length = 'length',
    Template = 'template',
    StartIndex = 'startIndex',
    PositiveOnly = 'positiveOnly',
    NegativeOnly = 'negativeOnly'
}

export interface ActionInputs {
    length: number;
    startIndex: number;
    template: string | null;
    positiveOnly: boolean;
    negativeOnly: boolean;
}

export function getInputs(): ActionInputs {
    const result: ActionInputs | any = {};

    result.length = getNumberInput(Inputs.Length, { required: true });
    result.startIndex = getNumberInput(Inputs.StartIndex, { required: false });
    result.template = getOptional(Inputs.Template, null, { required: false });

    result.positiveOnly = getBooleanInput(Inputs.PositiveOnly, { required: false });
    result.negativeOnly = getBooleanInput(Inputs.NegativeOnly, { required: false });

    return result;
}
