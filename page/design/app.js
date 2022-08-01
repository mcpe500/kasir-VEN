const dashboardMenu = document.getElementById("dashboard-menu")




//screen-information
var w = window.innerWidth;
var h = window.innerHeight;


//store name && date
const storeTitleName = "Takoya"
const storeImgLink = "http://placekitten.com/100/100"
const storeNameContainer = (storeTitle, storeImg) => {
  const askedDate = new Date().toUTCString()
  const StoreTitle = "<h2 id='store-name'>" + storeTitle + "</h2>"
  const StoreImg = "<img src=" + storeImg + " id='store-logo' />"
  const newDate = "<p id='date'>" + askedDate + "</p>"

  // base format : 
  // "<div id='store-name-container'><img src='' /><h2 id='store-name'>Takoya</h2><p id='date'>{date}</p></div>"

  const returnStr = "<div id='store-name-container'>" + StoreImg + StoreTitle + newDate + "</div>"

  return returnStr
}



//menu-name
const menuNameContainer = (itemImage, menuOptions) => {
  const ItemImage = "<img src=" + itemImage + " width='100' height='80' id='item-image' />"
  const menu = "<h3 id='menu'>menu</h3>"
  const MenuOptions = "<h2 id=" + menuOptions + " >" + menuOptions + "</h2>"

  const returnStr = "<div id='menu-name-container' >" + ItemImage + menu + MenuOptions + "</div>"
  return returnStr
}
//dashboard
const menuDashboard = () => {
  const itemList = "<h2 id='item-list' >Item List</h2>"
  const dashName = "<h2 id='type' >food</h2>"
  const options = "<i class='fa fa-ellipsis-h' aria-hidden='true'></i>"
  const search = "<i class='fas fa-search'></i>"
  const filter = "<i class='fa fa-filter' aria-hidden='true'>filter</i>"

  const itemNav = "<div id='item-nav' >" + itemList + dashName + options + search + filter + "</div>"

  // const returnStr = "<div id='menuDashboard'>"+itemNav+"</div>"
  return itemNav
}

const itemMenu = (itemImg, itemName, itemPrice) => {
  // for(let i = 0;i < )
  const ItemImage = "<img src=" + itemImg + " />"
  const ItemTitle = "<h1 id=" + itemName + " >" + itemName + "</h1>"
  const ItemPrice = "<p id='item-price'>" + itemPrice + "</p>"
  const cardFormat = "<div id='card-item' >" + itemImg + ItemTitle + ItemPrice + "</div>"
}

//general (setting & rating)

//dashboard-manager
const dashboardManager = (storeName, menuName, dashboard) => {
  let returnStr = storeName + menuName + dashboard

  return returnStr
}

const menuImageLink = "https://cdn1-production-images-kly.akamaized.net/uhlpuG-S-l-BRvviKLRA44rkGCs=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3155286/original/076924000_1592386195-takoyaki-japanese-octopus-balls_42069-22.jpg"
const menuName = "Takoyaki"

const storeNameInput = storeNameContainer(storeTitleName, storeImgLink)
const menuNameInput = menuNameContainer(menuImageLink, menuName)
const menuDashboardInput = menuDashboard()

console.log(dashboardManager(storeNameContainer(storeTitleName, storeImgLink)))
dashboardMenu.innerHTML = "<div id='dashboard-container'>" + dashboardManager(storeNameInput, menuNameInput, menuDashboardInput) + "</div>"

//CSS
// store name & date css
const storeCSS = () => {
  const storeContainerCSS = document.getElementById("store-name-container")
  const storeLogoCSS = document.getElementById("store-logo");
  const storeNameCSS = document.getElementById("store-name")
  const storeDateCSS = document.getElementById("date")
  if (w < 768) {
    storeContainerCSS.style.width = "40vw"
    storeContainerCSS.style.height = "40vh"
  } else {
    storeContainerCSS.style.width = "15vw"
    storeContainerCSS.style.height = "14vh"
  }
  storeContainerCSS.style.border = "thin solid #000"
  storeLogoCSS.style.float = "left"
  storeNameCSS.style.background = "red"
  storeDateCSS.style.background = "red"
}
//menu name
const menuNameCSS = (MenuName) => {
  const menuContainerCSS = document.getElementById("menu-name-container")
  const itemImageCSS = document.getElementById("item-image");
  const menuCSS = document.getElementById("menu")
  const menuNameCSS = document.getElementById(MenuName)
  if (w < 768) {
    menuContainerCSS.style.width = "40vw"
    menuContainerCSS.style.height = "40vh"
  } else {
    menuContainerCSS.style.width = "15vw"
    menuContainerCSS.style.height = "14vh"
  }
  menuContainerCSS.style.border = "thin solid #000"
  itemImageCSS.style.float = "left"
  menuCSS.style.background = "red"
  menuNameCSS.style.background = "red"
}
//menu-dashboard
const menuDashboardCSS = () => {
  const storeContainerCSS = document.getElementById("store-name-container")
  const storeLogoCSS = document.getElementById("store-logo");
  const storeNameCSS = document.getElementById("store-name")
  const storeDateCSS = document.getElementById("date")


}


storeCSS()
menuNameCSS(menuName)
menuDashboardCSS()
//end



