let allApps = [];

let logo = document.getElementById('logo');
logo.addEventListener('click', showAllLocalApps);

function callAPI() {
    fetch('http://localhost:9999/getApps', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(apps => {
            let appGrid = document.getElementById('app-grid');
            appGrid.innerHTML = '';
            if (!apps || apps.length === 0) {
                appGrid.innerHTML = '<p class="empty-state">No se encontraron aplicaciones.</p>';
                return;
            }
            apps.forEach(app => {
                let appCard = document.createElement('article');
                appCard.className = 'app-card';

                
                appCard.innerHTML = `
                <img src="${app.imageURL}" alt="Logo de ${app.name}">
                <h4>${app.name}</h4>
            `;

                appCard.addEventListener('click', () => {
                    window.open(app.downloadURL, '_blank');
                });

                appGrid.appendChild(appCard);
                let oApp = {
                    id: app.id,
                    name: app.name,
                    category: app.category,
                    imageURL: app.imageURL,
                    downloadURL: app.downloadURL
                }
                allApps.push(oApp);
            });
        })
    fetch('http://localhost:9999/getCategories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(categories => {
            let categoryList = document.getElementById('category-list');
            categoryList.innerHTML = "";
            if (!categories || categories.length === 0) {
                categoryList.innerHTML = '<p class="empty-state">No se encontraron aplicaciones.</p>';
                return;
            }
            categories.forEach(category => {
                let categoryElement = document.createElement('li');
                let a = document.createElement('a');
                a.innerText = category;
                a.addEventListener('click', () => {
                    showAppsByCategory(category);
                })
                categoryElement.appendChild(a);
                categoryList.appendChild(categoryElement);
            });
        })
}

callAPI();

function showAppsByCategory(category) {
    let appsByCategory = allApps.filter(app => app.category == category);

    let appGrid = document.getElementById('app-grid');
    appGrid.innerHTML = '';
    if (!appsByCategory || appsByCategory.length === 0) {
        appGrid.innerHTML = '<p class="empty-state">No se encontraron aplicaciones.</p>';
        return;
    }
    appsByCategory.forEach(app => {
        let appCard = document.createElement('article');
        appCard.className = 'app-card';

        appCard.innerHTML = `
                <img src="${app.imageURL}" alt="Logo de ${app.name}">
                <h4>${app.name}</h4>
            `;

        appCard.addEventListener('click', () => {
            window.open(app.downloadURL, '_blank');
        });

        appGrid.appendChild(appCard);
    });
}

function showAllLocalApps() {
    searchInput.value = "";
    searchName = "";
    let appGrid = document.getElementById('app-grid');
    appGrid.innerHTML = '';
    if (!allApps || allApps.length === 0) {
        appGrid.innerHTML = '<p class="empty-state">No se encontraron aplicaciones.</p>';
        return;
    }
    allApps.forEach(app => {
        let appCard = document.createElement('article');
        appCard.className = 'app-card';

        appCard.innerHTML = `
                <img src="${app.imageURL}" alt="Logo de ${app.name}">
                <h4>${app.name}</h4>
            `;

        appCard.addEventListener('click', () => {
            window.open(app.downloadURL, '_blank');
        });

        appGrid.appendChild(appCard);
    });
}

let searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchInLocalApps);
let searchName = "";
function searchInLocalApps(){
    searchName = searchInput.value;

    let searchApps = allApps.filter(app => app.name.toLowerCase().includes(searchName));
    let appGrid = document.getElementById('app-grid');
    appGrid.innerHTML = '';
    if (!searchApps || searchApps.length === 0) {
        appGrid.innerHTML = '<p class="empty-state">No se encontraron aplicaciones.</p>';
        return;
    }
    searchApps.forEach(app => {
        let appCard = document.createElement('article');
        appCard.className = 'app-card';

        appCard.innerHTML = `
                <img src="${app.imageURL}" alt="Logo de ${app.name}">
                <h4>${app.name}</h4>
            `;

        appCard.addEventListener('click', () => {
            window.open(app.downloadURL, '_blank');
        });

        appGrid.appendChild(appCard);
    });
}