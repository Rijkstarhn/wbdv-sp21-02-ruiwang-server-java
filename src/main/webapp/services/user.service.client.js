let adminUserServiceClient = new AdminUserServiceClient();

function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/ray1991/users';
    let self = this;

    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        }).then(function (response) {
                return response.json()
            }
        )
    }

    function findAllUsers() {
        return fetch(self.url).then(function (response) {
            return response.json()
        })
    }

    function findUserById(userId) {
    }

    function updateUser(userId, user) {
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`, {method: 'delete'}).then(function (response) {
            return response.json()
        })
    }
}
