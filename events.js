function renderAddressOptions() {
    const select = document.getElementById('address-filter');
    if (!select) return;

    const addresses = Array.from(new Set(eventsData.map((event) => `${event.province}·${event.city}`)));
    addresses.forEach((address) => {
        const option = document.createElement('option');
        option.value = address;
        option.textContent = address;
        select.appendChild(option);
    });
}

function renderEvents(filterAddress = 'all', filterDate = '') {
    const list = document.getElementById('events-list');
    if (!list) return;

    const filtered = eventsData.filter((event) => {
        const matchAddress = filterAddress === 'all'
            ? true
            : `${event.province}·${event.city}` === filterAddress;
        const matchDate = filterDate ? event.date === filterDate : true;
        return matchAddress && matchDate;
    });

    list.innerHTML = '';

    if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'col-span-full text-center text-gray-400 py-12';
        empty.textContent = '暂无匹配活动，请调整筛选条件。';
        list.appendChild(empty);
        return;
    }

    filtered.forEach((event) => {
        const card = document.createElement('article');
        card.className = 'bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col';

        card.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${event.cover}" alt="${event.name} 封面" class="w-full h-full object-cover">
            </div>
            <div class="p-4 flex-1 flex flex-col gap-2">
                <h3 class="text-lg font-semibold">${event.name}</h3>
                <p class="text-sm text-gray-400">地址：${event.province}·${event.city}</p>
                <p class="text-sm text-gray-400">日期：${event.date}</p>
                <a href="event-detail.html?id=${event.id}" class="mt-auto inline-flex items-center text-primary hover:underline">查看详情</a>
            </div>
        `;

        list.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderAddressOptions();
    renderEvents();

    const addressSelect = document.getElementById('address-filter');
    const dateInput = document.getElementById('date-filter');

    const handleFilterChange = () => {
        const addressValue = addressSelect ? addressSelect.value : 'all';
        const dateValue = dateInput ? dateInput.value : '';
        renderEvents(addressValue, dateValue);
    };

    if (addressSelect) {
        addressSelect.addEventListener('change', handleFilterChange);
    }

    if (dateInput) {
        dateInput.addEventListener('change', handleFilterChange);
    }
});
