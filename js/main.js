// Puts classes of tab-item into a Node List
const tabitems = document.querySelectorAll('.tab-item');
const tabContentitems = document.querySelectorAll('.tab-content-item');

// Select tab contect item
function selectItem(e) {
    // Add border to current tab
    removeBorder();
    this.classList.add('tab-border');

}

function removeBorder() {
    tabitems.forEach(item => item.classList.remove('tab-border'));
}

// Listen for tab click
tabitems.forEach(item => item.addEventListener("click", selectItem));
