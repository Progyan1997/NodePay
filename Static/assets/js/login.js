$(document).ready(function () {
    $("form[name=loginForm").submit(function (event) {
        const form = event.target;
        const username = form.elements["username"];
        const password = form.elements["password"];
        $.ajax({
            url: form.action,
            data: { username, password }
        }).done(function (data) {
            console.log(data);
            
        });
        event.preventDefault();
        return true;
    });
});