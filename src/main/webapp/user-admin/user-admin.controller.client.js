let users = []

function renderUser(users) {
    let tbody = $('.wbdv-tbody');
    tbody.empty()
    for (let i = 0; i < users.length; i++) {
        tbody.prepend(`
            <tr class="wbdv-template wbdv-user wbdv-hidden">
                <td class="wbdv-username">${users[i].userName}</td>
                <td>&nbsp;</td> // don't show pwd for security reason
                <td class="wbdv-first-name">${users[i].firstName}</td>
                <td class="wbdv-last-name">${users[i].lastName}</td>
                <td class="wbdv-role">${users[i].role}</td>
                <td class="wbdv-actions">
            <span class="pull-right">
              <button class="btn wbdv-delete-btn" id="${i}"><i class="fa-2x fa fa-times wbdv-remove"></i></button>
              <button class="btn"><i class="fa-2x fa fa-pencil wbdv-edit"></i></button>
            </span>
                </td>
            </tr>
        `)
    }
    $('.wbdv-delete-btn').click(deleteUser)
}

function createUser() {
    let newUser = {
        userName: `${$('.usernameFld').val()}`,
        password: `${$('.passwordFld').val()}`,
        firstName: `${$('.firstNameFld').val()}`,
        lastName: `${$('.lastNameFld').val()}`,
        role: `${$('.roleFld').val()}`,
    }
    users.push(newUser)
    adminUserServiceClient.createUser(newUser).then(function (response) {
        renderUser(users)
    })
}

function deleteUser(event) {
    let selectedButton = $(event.currentTarget)
    let selectedButtonIndex = selectedButton.attr("id")
    let selectedButtonId = users[selectedButtonIndex]._id

    adminUserServiceClient.deleteUser(selectedButtonId).then(function (res) {
        users.splice(selectedButtonIndex, 1)
        renderUser(users)
    })
}

function init() {
    let $createBtn = $(".wbdv-create-btn")
    $createBtn.click(createUser)
    adminUserServiceClient.findAllUsers().then(function (actualUsers) {
        users = actualUsers
        renderUser(users)
    })
}

$(init)


