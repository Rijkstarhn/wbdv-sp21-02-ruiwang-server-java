let users = []
let selectedUser = null

function init() {
    let $createBtn = $(".wbdv-create-btn")
    let $updateBtn = $('.wbdv-update-btn')
    $createBtn.click(createUser)
    $updateBtn.click(updateUser)
    adminUserServiceClient.findAllUsers().then(function (actualUsers) {
        users = actualUsers
        renderUser(users)
    })
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
        clearInput()
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

function selectUser(event) {
    let selectedButton = $(event.currentTarget)
    let selectedButtonIndex = selectedButton.attr("id")
    selectedUser = users.find(button => button._id === selectedButtonIndex)
    $('.usernameFld').val(selectedUser.userName)
    $('.passwordFld').val(selectedUser.password)
    $('.firstNameFld').val(selectedUser.firstName)
    $('.lastNameFld').val(selectedUser.lastName)
    $('.roleFld').val(selectedUser.role)
}

function updateUser() {
    selectedUser.userName = $('.usernameFld').val()
    selectedUser.password = $('.passwordFld').val()
    selectedUser.firstName = $('.firstNameFld').val()
    selectedUser.lastName = $('.lastNameFld').val()
    selectedUser.role = $('.roleFld').val()
    adminUserServiceClient.updateUser(selectedUser._id, selectedUser).then(function (res) {
        clearInput()
        renderUser(users)
    })
}

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
              <button class="btn wbdv-select-btn"  id="${users[i]._id}"><i class="fa-2x fa fa-pencil wbdv-edit"></i></button>
            </span>
                </td>
            </tr>
        `)
    }
    $('.wbdv-delete-btn').click(deleteUser)
    $('.wbdv-select-btn').click(selectUser)
}

function clearInput() {
    $('.usernameFld').val('')
    $('.passwordFld').val('')
    $('.firstNameFld').val('')
    $('.lastNameFld').val('')
    $('.roleFld').val('')
}

$(init)


