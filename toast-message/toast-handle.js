const toast2 = ({ title = "", message = "", type = "info", duration = 3000 }) => {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
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
        main.appendChild(toast);
    }
}

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