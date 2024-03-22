import * as core from '@actions/core';
import * as helper from '../src/io-helper';
import { run } from '../src/run';

import { describe, expect } from '@jest/globals';


let getInputsMock: jest.SpiedFunction<typeof helper.getInputs>;
let setOutputMock: jest.SpiedFunction<typeof core.setOutput>;
let setFailedMock: jest.SpiedFunction<typeof core.setFailed>;

describe('run.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputsMock = jest.spyOn(helper, 'getInputs').mockImplementation();
        setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation();
        setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation();
    });

    it('should work with template', async () => {
        getInputsMock.mockImplementation(() => {
            return {
                length: 5,
                startIndex: 0,
                positiveOnly: true,
                fromFile: false,
                template: 'i-{{index}}',
                toFile: false,
                negativeOnly: false
            } as helper.ActionInputs;
        });

        await run();
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).toHaveBeenNthCalledWith(1, 'result', ['i-0', 'i-1', 'i-2', 'i-3', 'i-4']);
    });

    it('should work without template', async () => {
        getInputsMock.mockImplementation(() => {
            return {
                length: 5,
                startIndex: -5,
                positiveOnly: false,
                fromFile: false,
                template: null,
                toFile: false,
                negativeOnly: true
            } as helper.ActionInputs;
        });

        await run();
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).toHaveBeenNthCalledWith(1, 'result', [-5, -4, -3, -2, -1]);
    });

    it('should error', async () => {
        getInputsMock.mockImplementation(() => {
            throw Error('unexpected error');
        });

        await run();
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).not.toBeCalled();
        expect(setFailedMock).toBeCalled();
    });
});

