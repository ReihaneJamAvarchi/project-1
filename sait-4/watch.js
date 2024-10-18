const watches = [
    {
        id: 1,
        Img: "https://angular.pixelstrap.com/multikart/assets/images/categories/1.png",
        namewatch: "watch models",
        categorylist1: "Watchmaking conglomerates",
        categorylist2: "Breitling SA",
        categorylist3: "Casio watches",
        categorylist4: "Citizen Watch",
        btnmore: "view more"
    },
    {
        id: 2,
        Img: "https://angular.pixelstrap.com/multikart/assets/images/categories/1.png",
        namewatch: "watch models",
        categorylist1: "d1 milano",
        categorylist2: "damaskeening",
        categorylist3: "diving watch",
        categorylist4: "dollar watch",
        btnmore: "view more"
    },
    {
        id: 3,
        Img: "	https://angular.pixelstrap.com/multikart/assets/images/categories/4.png",
        namewatch: "History of watches",
        categorylist1: "Manufacture dhorlogerie",
        categorylist2: "Mechanical watch",
        categorylist3: "Microbrand watches",
        categorylist4: "MIL-W-46374",
        btnmore: "view more"
    },
    {
        Id: 4,
        Img: "https://angular.pixelstrap.com/multikart/assets/images/categories/3.png",
        namewatch: "Antimagnetic watch",
        categorylist1: "Watchmaking conglomerates",
        categorylist2: "Breitling SA",
        categorylist3: "Casio watches",
        categorylist4: "Citizen Watch",
        btnmore: "view more"
    }
]

const watchbox = document.querySelector(".watchbox")
watches.forEach(function (item) {
    console.log(item.namewatch);


    watchbox.insertAdjacentHTML("afterbegin",
        `
        <div class="inserted">
                    <div class="categorywatch">
                        <img src=${item.Img} style="width: 108px; height: 175px;">
                        <h4 class="namewatch"> ${item.namewatch}</h4>
                        <ul class="categorylink">
                            <li class="categorylist">
                                <a class="categorylist" href="https://angular.pixelstrap.com/multikart/home/fashion">${item.categorylist1}</a>
                            </li>
                            <li class="categorylist">
                                <a class="categorylist" href="https://angular.pixelstrap.com/multikart/home/fashion">${item.categorylist2}</a>
                            </li>
                            <li class="categorylist">
                                <a class="categorylist" href="https://angular.pixelstrap.com/multikart/home/fashion">${item.categorylist3}</a>
                            </li>
                            <li class="categorylist">
                                <a class="categorylist" href="https://angular.pixelstrap.com/multikart/home/fashion">${item.categorylist4}</a>
                            </li>
                        </ul>
                        <a class="butSub" href="https://angular.pixelstrap.com/multikart/shop/collection/left/sidebar?category=watch"> view more </a>
                    </div>
                </div>
        `
    )
    console.log(item);
})
