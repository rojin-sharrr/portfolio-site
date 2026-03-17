document.addEventListener("DOMContentLoaded", () => {
    const tabWork = document.getElementById("tab-work");
    const tabInfo = document.getElementById("tab-info");
    const contentWork = document.getElementById("content-work");
    const contentInfo = document.getElementById("content-info");
    const workItems = document.getElementById("work-items");

    if (tabWork && tabInfo) {
        tabWork.addEventListener('click', () => {
            tabWork.classList.add('active');
            tabInfo.classList.remove('active');
            
            contentWork.classList.remove('hidden');
            workItems.classList.remove('hidden');
            contentInfo.classList.add('hidden');
        });

        tabInfo.addEventListener('click', () => {
            tabInfo.classList.add('active');
            tabWork.classList.remove('active');
            
            contentInfo.classList.remove('hidden');
            contentWork.classList.add('hidden');
            workItems.classList.add('hidden');
        });
    }
});
