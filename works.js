const worksData = [
    {
        singer: '洛天依',
        title: '东京不太热',
        date: '2015-07-15',
        cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    },
    {
        singer: '洛天依',
        title: '普通disco',
        date: '2015-11-01',
        cover: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80',
    },
    {
        singer: '言和',
        title: '霜雪千年',
        date: '2016-03-08',
        cover: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80',
    },
    {
        singer: '乐正绫',
        title: '十面埋伏',
        date: '2017-05-20',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    },
    {
        singer: '乐正龙牙',
        title: '戏腔',
        date: '2018-09-14',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    },
    {
        singer: '墨清弦',
        title: '山海入梦',
        date: '2019-12-10',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    },
];

function renderSingerOptions() {
    const select = document.getElementById('singer-filter');
    if (!select) return;

    const singers = Array.from(new Set(worksData.map((work) => work.singer)));
    singers.forEach((singer) => {
        const option = document.createElement('option');
        option.value = singer;
        option.textContent = singer;
        select.appendChild(option);
    });
}

function renderWorks(filterSinger = 'all') {
    const grid = document.getElementById('works-grid');
    if (!grid) return;

    const filtered = filterSinger === 'all'
        ? worksData
        : worksData.filter((work) => work.singer === filterSinger);

    grid.innerHTML = '';

    if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'col-span-full text-center text-gray-400 py-12';
        empty.textContent = '暂无匹配作品，请调整筛选条件。';
        grid.appendChild(empty);
        return;
    }

    filtered.forEach((work) => {
        const card = document.createElement('article');
        card.className = 'bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg';

        card.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${work.cover}" alt="${work.title} 封面" class="w-full h-full object-cover">
            </div>
            <div class="p-4 space-y-2">
                <p class="text-sm text-primary">${work.singer}</p>
                <h3 class="text-lg font-semibold">${work.title}</h3>
                <p class="text-sm text-gray-400">创作时间：${work.date}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSingerOptions();
    renderWorks();

    const select = document.getElementById('singer-filter');
    if (select) {
        select.addEventListener('change', (event) => {
            renderWorks(event.target.value);
        });
    }
});
