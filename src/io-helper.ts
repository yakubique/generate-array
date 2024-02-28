import { getNumberInput, getOptional } from '@yakubique/atils/dist';

enum Inputs {
    Length = 'length',
    Template = 'template',
    StartIndex = 'startIndex'
}

export interface ActionInputs {
    length: number;
    startIndex: number;
    template: string | null;
}

export function getInputs(): ActionInputs {
    const result: ActionInputs | any = {};

    result.length = getNumberInput(Inputs.Length, { required: true });
    result.startIndex = getNumberInput(Inputs.StartIndex, { required: false });
    result.template = getOptional(Inputs.Template, null, { required: false });

    return result;
}
