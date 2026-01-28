let worksData = [];

async function loadWorksData() {
    const response = await fetch('data/works.json');
    if (!response.ok) {
        throw new Error('无法加载作品数据');
    }
    return response.json();
}

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
    loadWorksData()
        .then((data) => {
            worksData = data;
            renderSingerOptions();
            renderWorks();
        })
        .catch(() => {
            const grid = document.getElementById('works-grid');
            if (grid) {
                grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">作品数据加载失败。</div>';
            }
        });

    const select = document.getElementById('singer-filter');
    if (select) {
        select.addEventListener('change', (event) => {
            renderWorks(event.target.value);
        });
    }
});
