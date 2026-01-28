async function loadEventsData() {
    const response = await fetch('data/events.json');
    if (!response.ok) {
        throw new Error('无法加载活动数据');
    }
    return response.json();
}

function renderEventDetail(eventsData) {
    const container = document.getElementById('event-detail');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const event = eventsData.find((item) => item.id === id) || eventsData[0];

    if (!event) {
        container.innerHTML = '<div class="text-center text-gray-400">未找到活动信息。</div>';
        return;
    }

    container.innerHTML = `
        <div class="space-y-6">
            <div>
                <p class="text-sm text-gray-400">省份：${event.province}</p>
                <h1 class="text-3xl font-semibold mt-2">${event.name}</h1>
                <p class="text-gray-300 mt-2">日期：${event.date}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${event.album.map((photo, index) => `
                    <div class="rounded-xl overflow-hidden border border-gray-800">
                        <img src="${photo}" alt="${event.name} 相册 ${index + 1}" class="w-full h-64 object-cover">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    loadEventsData()
        .then((data) => renderEventDetail(data))
        .catch(() => {
            const container = document.getElementById('event-detail');
            if (container) {
                container.innerHTML = '<div class="text-center text-gray-400">活动数据加载失败。</div>';
            }
        });
});
