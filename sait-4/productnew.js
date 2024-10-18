const productnew = [
    {
        id: 1,
        img: "https://angular.pixelstrap.com/multikart/assets/images/product/watch/15.jpg",
        link: "https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-4",
        namewatchnew: "Watch 4",
        many: "$466.40",
        manydel: "$530.00",
        colorwatch: "#ffe4c4"
    },
    {
        id: 2,
        img: "https://angular.pixelstrap.com/multikart/assets/images/product/watch/6.jpg",
        link: "https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-3",
        namewatchnew: "Watch 3",
        many: "$356.00",
        manydel: "$445.00",
        colorwatch: "#000080"
    },
    {
        id: 3,
        img: "https://angular.pixelstrap.com/multikart/assets/images/product/watch/3.jpg",
        link: "https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-2",
        namewatchnew: "Watch 2",
        many: "$207.00",
        manydel: "$345.00",
        colorwatch: "#a0522d"
    },
    {
        id: 4,
        img: "https://angular.pixelstrap.com/multikart/assets/images/product/watch/2.jpg",
        link: "https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-1",
        namewatchnew: "Watch 1",
        many: "$156.00",
        manydel: "$260.00",
        colorwatch: "#c0c0c0"
    }
]

const productarrow = document.querySelector(".productarrow")
productnew.forEach(function (item) {
    productarrow.insertAdjacentHTML("afterbegin",
        `    <div class="owlitem">
                        <div class="imgwatchwrapper">
                            <div><span class="new">new</span></div>
                            <div><a href="${item.link}"><img style="width: 255px; height: 278px;" src="${item.img}"></a></div>
                        </div>
                        <div class="productdetailtext">
                            <div class="stars" style="display: block;">
                                <div class="star" style="height: 22px;">
                                    <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;" ></i>
                                    <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                    <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                    <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                    <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                </div>
                        
                        <a class="linkwatch" href="${item.link}">${item.namewatchnew}</a>
                        <h4 class="mony">${item.many}<del class="monydel"><span class="monydel"> ${item.manydel}</span></del></h4>
                        <ul class="colorvariant" style="justify-content: center;">
                            <li class="colorwatch"  style="background-color:${item.colorwatch};"></li>
                        </ul>
                    </div>    `
    )
    console.log(item);
})



