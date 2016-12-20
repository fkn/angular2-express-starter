export class QuickSort {

    partition(list, prop, begin, end, pivot) {
        let piv = list[pivot];
        this.swap(list, pivot, end - 1);
        let store = begin;
        let ix;
        for (ix = begin; ix < end - 1; ix++) {
            if (list[ix][prop] <= piv[prop]) {
                this.swap(list, store, ix);
                ++store;
            }
        }
        this.swap(list, end - 1, store);
        return store;
    }

    swap(obj, a, b) {
        let tmp = obj[a];
        obj[a] = obj[b];
        obj[b] = tmp;
    }

    qsort(list, prop, begin, end) {
        if (end - 1 > begin) {
            let pivot = begin + Math.floor(Math.random() * (end - begin));
            pivot = this.partition(list, prop, begin, end, pivot);

            this.qsort(list, prop, begin, pivot);
            this.qsort(list, prop, pivot + 1, end);
        }
    }

    quick_sort(list, prop) {
        console.log('property = ',prop);
        this.qsort(list, prop, 0, list.length);
        console.log(list);
    }
}

