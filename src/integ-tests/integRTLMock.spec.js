import { fireEvent, waitForElement } from '@testing-library/react';
import { renderWithRouter } from './integRTLHeplers';
import axiosMock from 'axios';
import mock from './mock.json';
jest.mock('axios');
describe('Sample test', () => {
    it('Validate the login Button Text', async () => {
        // const url = '/shridharkalagi/vodqa-2019/workshops';
        axiosMock.get.mockResolvedValueOnce({
            data: mock,
        });

        const {
            history: { navigate },
            getByLabelText, getByText } = renderWithRouter();

        expect(getByText('Welcome to VodQA')).toBeDefined();
        fireEvent.change(getByLabelText('Username:'), { target: { value: 'chuck' } });
        fireEvent.change(getByLabelText('Password:'), { target: { value: 'password' } });
        fireEvent.click(getByText('Login'));

        await navigate('/schedule');
        // const alert = await getByText('VodQA 2019 Schedule'); //Works only if it is in the same page
        expect(getByText('VodQA 2019 Schedule')).toBeDefined();
        fireEvent.click(getByText('Get the Current Agenda'));

        await waitForElement(() => getByText('abc'));
        
        expect(getByText('abc')).toBeDefined();
    });
});

