const toast = ({ title = '', message = '', type = 'info', duration = 1000 }) => {
    let toastContainer = document.querySelector('#toast');

    let toastItem = document.createElement('div');

    let autoRemoveId = setTimeout(() => {
        toastContainer.removeChild(toastItem);
    }, duration + 1000);

    toastItem.onclick = (e) => {
        if (e.target.closest('.toast__close')) {
            toastContainer.removeChild(toastItem);
            clearTimeout(autoRemoveId);
        }
    }

    const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
    };

    let icon = icons[type];
    let delay = (duration / 1000).toFixed(2);

    toastItem.classList.add('toast', `toast--${type}`);
    toastItem.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toastItem.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
    `;

    toastContainer.appendChild(toastItem);
}

function showSuccessToast() {
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký thành công tài khoản tại F8.",
        type: "success",
        duration: 2000
    });
}

function showErrorToast() {
    toast({
        title: "Thất bại!",
        message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
        type: "error",
        duration: 2000
    });
}