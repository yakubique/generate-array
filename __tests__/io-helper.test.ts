import * as core from '@actions/core';
import { describe, expect } from '@jest/globals';
import { ActionInputs, getInputs, Inputs } from '../src/io-helper';

let getInputMock: jest.SpiedFunction<typeof core.getInput>;

describe('io-helper.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputMock = jest.spyOn(core, 'getInput').mockImplementation();
    });

    it('should get proper input', () => {
        getInputMock.mockImplementation((name, _) => {
            switch (name) {
                case Inputs.Length:
                    return '5';
                case Inputs.Template:
                    return '';
                case Inputs.StartIndex:
                    return '0';
                case Inputs.PositiveOnly:
                    return 'false';
                case Inputs.NegativeOnly:
                    return 'false';
                case Inputs.ToFile:
                    return 'false';
                default:
                    return '';
            }
        });

        const inputs = getInputs();
        expect(inputs).toEqual({
            length: 5,
            startIndex: 0,
            template: null,
            positiveOnly: false,
            negativeOnly: false,
            toFile: false
        } as ActionInputs);
    });
});

