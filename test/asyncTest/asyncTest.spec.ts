import { getUsers, getGroups } from './asyncTest';

describe('asyncTest.ts tests', () => {
    it('return an array in a promise', async () => {
        const result = await getUsers();
        const expectedUsers = [
            {
                name: 'Antonia', group: 1
            }, {
                name: 'Jonatan', group: 2
            }, {
                name: 'Jens', group: 3
            }, {
                name: 'Rickard', group: 1
            }, {
                name: 'Tyra', group: 1
            }, {
                name: 'Erik', group: 2
            }
        ];
        expect(result).toEqual(expectedUsers);
    });
    it('return an array in a promise', async () => {
        const result = await getGroups();
        const expectedGroup = [
            {
                id: 1, groupName: 'Hajarna'
            },
            {
                id: 2, groupName: 'Valarna'
            },
            {
                id: 3, groupName: 'Zebrorna'
            }
        ];
        expect(result).toEqual(expectedGroup);
    });
});
