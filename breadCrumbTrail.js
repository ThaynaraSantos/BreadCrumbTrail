$('.item').on('click', function() {
    sendMenuItemToBreadCrumbTrail($(this), 'a', $('#breadCrumbTrail'));
    return false;
});

function sendMenuItemToBreadCrumbTrail(item, childElement, breadCrumbTrail) {
    var items = [];
    findBreadCrumbTrail(item, items, childElement);
    buildBreadCrumbTrail(items, childElement, breadCrumbTrail);
}

function findBreadCrumbTrail(item, items, childElement) {
    if (!isEmpty(item)) {
        var parentItem = item.parent('ul').parent('li');
        var parentLabel = parentItem.children(childElement);
        items[items.length] = item.clone();
        findBreadCrumbTrail(parentItem, items, childElement);
    }
}

function buildBreadCrumbTrail(items, childElement, breadCrumbTrail) {
    var index = items.length - 1;
    breadCrumbTrail.html("");
    for (index; index >= 0; index--) {
        var item = items[index].find(childElement)[0];
        breadCrumbTrail.append(item);
        if (index != 0) breadCrumbTrail.append(" > ");
    }
}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
