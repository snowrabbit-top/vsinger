// 创建菱形菱形图案
function createDiamonds() {
    const container = document.querySelector('.diamond-pattern');
    // 确保容器存在
    if (!container) {
        console.error('菱形形图案容器不存在');
        return;
    }
    
    // 使用容器的实际高度
    const containerHeight = container.offsetHeight;
    
    const diamondCount = singers.length; // 钻石数量
    const spacing = containerHeight / (diamondCount + 1); // 间距
    
    // 歌手数据
    const singers = [
        {
            name: '洛天依',
            images: [
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/57eadd36567f492d8576585a5dc53300.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=ruhAX1wmnS8HJYOOhac22j5gYGM%3D',
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/55bbca30cb6d489f8d9313bbc3a3528c.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=ZsquXVdguvgKn%2BXHe2l2%2Bjt06sQ%3D'
            ],
        },
        {
            name: '言和',
            images: [
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/c931feaa56c14ecb92343a0661f0e898.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=29%2BLYALMlXowWFJD8ZsrpmYvCyI%3D',
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/cdd72d2416a3493696fbbc86392ed2db.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=mnOPzwhavN3HS7h7iT0u4G4vbrc%3D'
            ],
        },
        {
            name: '乐正绫',
            images: [
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/8a66620c865e49cba1402c1cfefbf8d1.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=Y3u6kfGiFg7iWHHCiCgxJLAiXv8%3D',
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/85ddd2e9a8e14d76ac49c5debb23b878.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=au%2B6zRJRqPJCXr73dDkW8jfBTkk%3D'
            ],
        },
        {
            name: '乐正龙牙',
            images: [
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/662bebf2ff2e4d6ba6512d9b45276549.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=g2%2B9y5ruzWC53SKQ1mZCzphSY0Y%3D',
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/5114e09c91d74de5820e424fa28d2377.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=vVSEGplk%2By2FDd2e4zoC0seQ674%3D'
            ],
        },
        {
            name: '徵羽摩柯',
            images: [
                'https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/fc337bc8321e4432a29b8817909d302b.png~tplv-a9rns2rl98-24:720:720.png?rcl=2025110605310290FC578AB49DC2077BAB&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762983062&x-signature=%2B6y7lruYAapJaUQj40eqipdqT64%3D',
                'https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/ed72a242c7bd47229ac480473a60328a.png~tplv-a9rns2rl98-24:720:720.png?rcl=2025110605310290FC578AB49DC2077BAB&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762983062&x-signature=eMjGkOYYV%2BcL5d3B9SxgvE%2BR%2BHE%3D'
            ],
        },
        {
            name: '墨清弦',
            images: [
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/ee066290eb8d466b8849d0819b70ce62.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=I6wN%2B98ORdNr28E2mAoOYYrVnZ0%3D',
                'https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/ed03f290e6e44d06aaaa941868b439ad.png~tplv-a9rns2rl98-24:720:720.png?rcl=202511060522113C52353834B0E61ACEF3&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1762982532&x-signature=XJIBZSFBVimQTr9UJnu6QuBAaQ0%3D'
            ],
        }
    ];
    
    // 创建钻石
    for (let i = 1; i <= diamondCount; i++) {
        const diamond = document.createElement('div');
        diamond.classList.add('diamond');
        
        // 设置位置
        const diamondPosition = i * spacing;
        diamond.style.top = diamondPosition + 'px';
        
        // 添加点击事件
        diamond.addEventListener('click', () => {
            // 移除其他钻石的活跃状态
            document.querySelectorAll('.diamond').forEach(d => {
                d.classList.remove('active');
            });
            
            // 添加当前钻石的活跃状态
            diamond.classList.add('active');
            
            // 显示对应歌手信息
            showSingerInfo(singers[i - 1]);
        });
        
        // 添加到容器
        container.appendChild(diamond);
        
        // 创建歌手名字
        const singerName = document.createElement('div');
        singerName.classList.add('singer-name');
        singerName.textContent = singers[i - 1].name;
        singerName.style.top = diamondPosition + 'px';
        
        // 添加到容器
        container.appendChild(singerName);
    }
    
    // 默认激活第一个钻石
    const firstDiamond = document.querySelector('.diamond');
    if (firstDiamond) {
        firstDiamond.classList.add('active');
        // 默认显示第一个歌手信息
        showSingerInfo(singers[0]);
    }
}

// 显示歌手信息
function showSingerInfo(singer) {
    const container = document.getElementById('singer-info-container');
    if (!container) {
        console.error('歌手信息容器不存在');
        return;
    }
    
    // 创建歌手信息元素
    let singerInfo = document.querySelector('.singer-info');
    if (!singerInfo) {
        singerInfo = document.createElement('div');
        singerInfo.classList.add('singer-info');
        container.appendChild(singerInfo);
    }
    
    // 清空现有内容
    singerInfo.innerHTML = '';
    
    // 创建幻灯片容器
    const carousel = document.createElement('div');
    carousel.classList.add('singer-carousel');
    
    // 创建幻灯片
    singer.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.classList.add('singer-slide');
        if (index === 0) {
            slide.classList.add('active');
        }
        
        // 创建图片
        const img = document.createElement('img');
        img.src = image;
        img.alt = singer.name;
        
        // 添加到幻灯片
        slide.appendChild(img);
        
        // 添加到幻灯片容器
        carousel.appendChild(slide);
    });
    
    // 创建控制按钮容器
    const controls = document.createElement('div');
    controls.classList.add('singer-controls');
    
    // 创建上一张按钮
    const prevBtn = document.createElement('div');
    prevBtn.classList.add('singer-control-btn', 'prev-btn');
    prevBtn.innerHTML = '<i class="fa fa-angle-left"></i>';
    
    // 创建下一张按钮
    const nextBtn = document.createElement('div');
    nextBtn.classList.add('singer-control-btn', 'next-btn');
    nextBtn.innerHTML = '<i class="fa fa-angle-right"></i>';
    
    // 添加到控制按钮容器
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    
    // 添加到幻灯片容器
    carousel.appendChild(controls);
    
    // 创建指示器容器
    const indicators = document.createElement('div');
    indicators.classList.add('singer-indicators');
    
    // 创建指示器
    singer.images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('singer-indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.setAttribute('data-index', index);
        
        // 添加到指示器容器
        indicators.appendChild(indicator);
    });
    
    // 添加到幻灯片容器
    carousel.appendChild(indicators);
    
    // 添加到歌手信息容器
    singerInfo.appendChild(carousel);
    
    // 如果有描述信息，添加描述
    if (singer.description) {
        const description = document.createElement('div');
        description.classList.add('singer-description');
        description.textContent = singer.description;
        description.style.marginTop = '20px';
        description.style.fontSize = '16px';
        description.style.lineHeight = '1.6';
        description.style.maxWidth = '600px';
        description.style.textAlign = 'center';
        singerInfo.appendChild(description);
    }
    
    // 显示歌手信息
    singerInfo.classList.add('show');
    container.style.opacity = '1';
    
    // 初始化幻灯片
    initSingerCarousel(carousel);
}

// 初始化歌手幻灯片 - 优化版
function initSingerCarousel(carousel) {
    const slides = carousel.querySelectorAll('.singer-slide');
    const indicators = carousel.querySelectorAll('.singer-indicator');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;
    
    // 设置自动播放
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 3000); // 3秒自动切换
    }
    
    // 停止自动播放
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }
    
    // 显示指定幻灯片
    function showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        // 更新幻灯片状态
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        
        // 更新指示器状态
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }
    
    // 下一张幻灯片
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // 点击指示器切换幻灯片
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showSlide(index);
            // 点击后重置自动播放
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    // 点击上一张/下一张按钮
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            // 点击后重置自动播放
            stopAutoPlay();
            startAutoPlay();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
            // 点击后重置自动播放
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // 鼠标悬停时暂停自动播放
    carousel.addEventListener('mouseenter', stopAutoPlay);
    
    // 鼠标离开时恢复自动播放
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // 开始自动播放
    startAutoPlay();
}

// 等待DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 创建菱形图案
    createDiamonds();
});
