import { ActionInputs, getInputs } from './io-helper';
import { buildOutput, outputJson } from '@yakubique/atils/dist';
import * as core from '@actions/core';

enum Outputs {
    result = 'result',
}

export async function run() {
    const setOutputs = buildOutput(Outputs);

    try {
        const inputs: ActionInputs = getInputs();
        const result = [] as any[];

        let startIndex = 0;
        if (!inputs.startIndex) {
            startIndex = 0;
        } else {
            startIndex = inputs.startIndex;
        }

        for (let i = startIndex; i < inputs.length; i++) {
            if ((inputs.positiveOnly && i < 0) || (inputs.negativeOnly && i >= 0)) {
                continue;
            }

            if (inputs.template) {
                result.push(
                    (inputs.template as string)
                        .replace('{{index}}', `${i}`)
                        .replace('{{ index }}', `${i}`)
                        .replace('{{ index}}', `${i}`)
                        .replace('{{index }}', `${i}`)
                );
            } else {
                result.push(i);
            }
        }

        setOutputs({
            result: outputJson(result, inputs.toFile)
        });
        core.info('Success!');
    } catch (err: any) {
        core.setFailed(err.message);
    }
}
