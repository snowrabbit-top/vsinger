document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initStaffModal();
});

function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuToggle || !mobileMenu) {
        return;
    }

    let menuOpen = false;

    const setMenuState = (open) => {
        menuOpen = open;
        menuToggle.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        mobileMenu.classList.toggle('menu-slide-in', open);
        mobileMenu.classList.toggle('menu-slide-out', !open);
        mobileMenu.setAttribute('aria-hidden', String(!open));
    };

    setMenuState(false);

    menuToggle.addEventListener('click', () => {
        setMenuState(!menuOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((item) => {
        item.addEventListener('click', () => {
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuOpen) {
            setMenuState(false);
        }
    });
}

function initStaffModal() {
    const staffModal = document.getElementById('staff-modal');
    const staffListBtn = document.getElementById('staff-list-btn');
    const closeModal = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    if (!staffModal || !staffListBtn || !closeModal || !modalOverlay || !modalContent) {
        return;
    }

    const openModal = () => {
        staffModal.classList.remove('hidden');
        staffModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
            modalContent.focus();
        }, 10);
    };

    const closeModalFunc = () => {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            staffModal.classList.add('hidden');
            staffModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }, 300);
    };

    staffListBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
    });

    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !staffModal.classList.contains('hidden')) {
            closeModalFunc();
        }
    });
}
