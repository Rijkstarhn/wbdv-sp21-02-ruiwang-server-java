let courses = [
    {userName: 'wr', password: 1234, firstName: 'Rui', lastName: 'Wang', role: 'Student'},
    {userName: 'wr', password: 1234, firstName: 'Rui', lastName: 'Wang', role: 'Student'}
]

$(".wbdv-create-btn").click(function () {
    let id = courses.length
    let newCourse = {
        userName: `lc${id}`, password: 4321, firstName: 'Chen', lastName: 'Ling', role: 'Student'
    }
    courses.push(newCourse)
    renderCourse(courses)
})


function renderCourse(courses) {
    let tbody = $('.wbdv-tbody');
    tbody.empty()
    for (let i = 0; i < courses.length; i++) {
        tbody.prepend(`
            <tr class="wbdv-template wbdv-user wbdv-hidden">
                <td class="wbdv-username">${courses[i].userName}</td>
                <td>&nbsp;</td>
                <td class="wbdv-first-name">${courses[i].firstName}</td>
                <td class="wbdv-last-name">${courses[i].lastName}</td>
                <td class="wbdv-role">${courses[i].role}</td>
                <td class="wbdv-actions">
            <span class="pull-right">
              <button class="btn wbdv-delete-btn" id="${i}"><i class="fa-2x fa fa-times wbdv-remove"></i></button>
              <button class="btn"><i class="fa-2x fa fa-pencil wbdv-edit"></i></button>
            </span>
                </td>
            </tr>
        `)
    }
    $('.wbdv-delete-btn').click(function (event) {
        let selectedButton = $(event.currentTarget)
        let selectedButtonId = selectedButton.attr("id")
        console.log(selectedButtonId)
        console.log(courses)
        courses.splice(selectedButtonId, 1)
        console.log(courses)
        renderCourse(courses)
    })
}

renderCourse(courses)

