export function getUsers() {
    return new Promise((resolve) => {
        const users = [
            {
                name: 'Antonia', group: 1
            },
            {
                name: 'Jonatan', group: 2
            },
            {
                name: 'Jens', group: 3
            },
            {
                name: 'Rickard', group: 1
            },
            {
                name: 'Tyra', group: 1
            },
            {
                name: 'Erik', group: 2
            }
        ];
        resolve(users);
    });
}

export function getGroups() {
    return new Promise((resolve) => {
        const groups = [
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
        resolve(groups);
    })
}
