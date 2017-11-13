/*
 * Gnome sort is a sort algorithm that moving an element to its proper place is accomplished by a series of swap
 * more information: https://en.wikipedia.org/wiki/Gnome_sort
 *
 */
function gnomeSort(items) {

    if (items.length <= 1) {

        return;
    }

    var i = 1;

    while (i < items.length) {

        if (items[i - 1] <= items[i]) {
            i++;
        } else {
            var temp = items[i];
            items[i] = items[i - 1];
            items[i - 1] = temp;

            i = Math.max(1, i - 1);
        }
    }
}

//Implementation of gnomeSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
gnomeSort(ar);
//Array after sort
console.log(ar);
