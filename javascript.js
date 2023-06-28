function notify_1(){
    let username = document.forms["login_form"]["username"].value;
    let password = document.forms["login_form"]["password"].value;
    var filter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (username.length <= 4 || username.length >= 50){
        if (username == "") alert("Tên người dùng không được để trống");
        alert("Tên người dùng cần tối thiểu 5 kí tự và tối đa 49 kí tự");
    }else if (password.length <= 7 || password.length >= 16 || !password.match(filter)){
        if (password == "") alert("Mật khẩu không được để trống");
        alert("Mật khẩu cần tối thiểu 8 kí tự và tối đa 15 kí tự, trong đó chứa ít nhất một chữ thường, một chữ in hoa, một chữ số và một ký tự đặc biệt");
    }else{
        alert("Đăng nhập thành công");
        window.location='trangchu.html';
    }
}

function notify_2(){
    let username = document.forms["register_form"]["username"].value;
    let password = document.forms["register_form"]["password"].value;
    let password_again = document.forms["register_form"]["password_again"].value;
    let email = document.forms["register_form"]["email"].value;
    let phone_number = document.forms["register_form"]["phone_number"].value;
    var filter_1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var filter_2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (username.length <= 4 || username.length >= 50){
        if (username == "") alert("Tên người dùng không được để trống");
        alert("Tên người dùng cần tối thiểu 5 kí tự và tối đa 49 kí tự");
    }else if (password.length <= 7 || password.length >= 16 || !password.match(filter_1)){
        if (password == "") alert("Mật khẩu không được để trống");
        alert("Mật khẩu cần tối thiểu 8 kí tự và tối đa 15 kí tự, trong đó chứa ít nhất một chữ thường, một chữ in hoa, một chữ số và một ký tự đặc biệt");
    }else if (password_again != password){
        alert("Mật khẩu nhập lại không trùng khớp");
    }else if (!filter_2.test(email)){
        if (email == "") alert("Email không được để trống");
        alert("Email không hợp lệ");
    }else if (phone_number.length != 10){
        if (phone_number == "") alert("Số điện thoại không được để trống");
        alert("Số điện thoại không hợp lệ (đầy đủ 10 chữ số)");
    }else{
        alert("Đăng ký thành công");
        window.location='index.html';
    }
}

function notify_3(){
    let fullname = document.forms["contact_form"]["fullname"].value;
    let email = document.forms["contact_form"]["email"].value;
    let phone_number = document.forms["contact_form"]["phone_number"].value;
    let context = document.forms["contact_form"]["context"].value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (fullname.length <= 4 || fullname.length >= 50){
        if (fullname == "") alert("Tên người dùng không được để trống");
        alert("Tên người dùng cần tối thiểu 5 kí tự và tối đa 49 kí tự");
    }else if (!filter.test(email)){
        if (email == "") alert("Email không được để trống");
        alert("Email không hợp lệ");
    }else if (phone_number.length != 10){
        if (phone_number == "") alert("Số điện thoại không được để trống");
        alert("Số điện thoại không hợp lệ (đầy đủ 10 chữ số)");
    }else if (context.length <= 0 || context.length > 1000){
        if (context == "") alert("Nội dung không được để trống");
        alert("Nội dung tối đa không quá 1000 kí tự");
    }else{
        alert("Đã gửi thông tin thành công! Cảm ơn bạn!");
    }
}