function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

export async function login(loginId, loginPwd) {
    await delay(1000);
    if (loginId === 'admin' && loginPwd === '123456') {
        const userInfo = {
            loginId,
            name: 'handler'
        };
        localStorage.setItem('user', JSON.stringify(userInfo));
        return userInfo;
    }
    return null;
}

export async function logout() {
    await delay(1000);
    const user = localStorage.getItem('user');
    if (user) {
        localStorage.removeItem('user');
        return '已成功删除';
    }
    return '并未登录';
}

export async function whoAmI() {
    await delay(1000);
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
}
