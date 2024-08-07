const products=[
    {
        id:1,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-16",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/15.jpg",
        numberwatch:"Watch 16",
        mony:"$80.00",
        del:"$160.00",
        colorwatch:"#ffe4c4",
    }, 
    {
        id:2,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-14",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/20.jpg",
        numberwatch:"Watch 14",
        mony:"$122.20",
        del:"$130.00",
        colorwatch:"#c0c0c0",
    }, 
    {
        id:3,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-6",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/9.jpg",
        numberwatch:"Watch 6",
        mony:"$135.00",
        del:"$255.00",
        colorwatch:"#4682b4",
    },
    {
        id:4,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-5",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/8.jpg",
        numberwatch:"Watch 5",
        mony:"$218.40",
        del:"$420.00",
        colorwatch:"#d2691e",
    },
    {
        id:5,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-4",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/15.jpg",
        numberwatch:"Watch 4",
        mony:"$466.40",
        del:"$530.00",
        colorwatch:"#ffe4c4",
    },
    {
        id:6,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-3",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/6.jpg",
        numberwatch:"Watch 3",
        mony:"$365.00",
        del:"$455.00",
        colorwatch:"#000080",
    },
    {
        id:7,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-2",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/3.jpg",
        numberwatch:"Watch 2",
        mony:"$207.00",
        del:"$345.00",
        colorwatch:"#a0522d",
    },
    {
        id:8,
        link:"https://angular.pixelstrap.com/multikart/shop/product/left/sidebar/watch-1",
        img:"https://angular.pixelstrap.com/multikart/assets/images/product/watch/2.jpg",
        numberwatch:"Watch 1",
        mony:"$156.00",
        del:"$260.00",
        colorwatch:"#c0c0c0",
    }
]

const watcheslist= document.querySelector(".watcheslist")
    products.forEach(function(item){
    
        watcheslist.insertAdjacentHTML("afterbegin" ,
        `       
                        <div class="productbox">
                            <div class="imgeswrapper">
                               <div><span class="new">new</span></div>
                                <div><a href="${item.link}"><img style="width: 288px; height: 314px;" src="${item.img}"></a></div>
                            </div>
                            <div class="productsdetail">
                                <div class="stars">
                                    <div class="star">
                                        <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                        <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                        <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                        <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                        <i class="fa-sharp fa-solid fa-star" style="color:#EDB867;"></i>
                                    </div>
                                </div>
                                <a class="linkwatch" href="${item.link}">${item.numberwatch}</a>
                                <h4 class="mony">${item.mony}<del class="monydel"><span class="monydel">${item.del}</span></del></h4>
                                <ul class="colorvariant">
                                    <li class="colorwatch"  style="background-color:${item.colorwatch};"></li>
                                </ul>
                            </div>
                        </div>
                            `
                        )
                        console.log(item);   
                    })



                    