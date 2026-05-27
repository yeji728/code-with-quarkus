function validateAndLogin() {

    let valid = true;

    const username =
        document.getElementById('usernameInput').value.trim();

    const password =
        document.getElementById('passwordInput').value;

    // ① 아이디 검사
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;

    if (!usernameRegex.test(username)) {
        showError(
            'usernameInput',
            '아이디는 4~20자 영문/숫자만 가능합니다.'
        );
        valid = false;
    } else {
        clearError('usernameInput');
    }

    // ② 비밀번호 검사
    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password)) {
        showError(
            'passwordInput',
            '8자 이상, 영문+숫자+특수문자를 포함해야 합니다.'
        );
        valid = false;
    } else {
        clearError('passwordInput');
    }

    // ③ 전체 통과 시 로그인 실행
    if (valid) {
        submitLogin();
    }
}
async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    const hashed = await hashPassword(password);
    document.getElementById('password').value = hashed;
    document.getElementById('loginForm').submit();
}