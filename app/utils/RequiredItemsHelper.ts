//import {StandardStaticMapLW} from '@/standard/StandardStaticMapLW';

export class RequiredItemsHelper {

  getRequiredItems(arrs) {
    let parsed = this.parseRequired(arrs);
    parsed = this.cleanRequired(parsed);
    return parsed;
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  parseRequired(arr) {
    let retval = [];
    for(const item of arr) {
      if(item.every(i => (typeof i === 'string'))) {
        retval.push(item);
      } else {
        retval = retval.concat(this.parseItem(item, []));
      }
    }
    return retval;
  }
  parseItem(arr, parentArr) :any {
    let retval = [];
    const stringArr = [];
    const arrArr = [];
    for(const a of arr) {
      if(typeof a === 'string') {
        stringArr.push(a);
      } else {
        arrArr.push(a);
      }
    }
    if(arrArr.length) {
      for(const a of arrArr){
        let newArr = Array.from(parentArr);
        newArr = newArr.concat(stringArr);
        retval = retval.concat(this.parseItem(a, newArr));

      }
    } else {
      const lastArr = parentArr.concat(stringArr).filter(this.onlyUnique);
      retval.push(lastArr);
    }
    return retval;
  }
  cleanRequired(arr) {
    if(arr.length < 1) {
      return arr;
    }
    arr.sort((a, b)=> {
      let r = 0;
      a.length > b.length ? r = -1 : a.length < b.length ? r = 1 :  r = 0;
      return r;
    });
    const checkRule = (a, t) => a.every(v => t.includes(v));
    let i = arr.length;
    while(i--){
      if(arr[i]){
        const rule = arr[i];
        const copy = Array.from(arr);
        for(let n=copy.length-1; n>-1; n--) {
          if(copy[n] && checkRule(rule, copy[n])) {
            copy.splice(n, 1);
          }
        }
        copy.push(rule);
        arr = copy;
      }
    }
    return arr.sort((a, b)=> {
      let r = 0;
      a.length < b.length ? r = -1 : a.length > b.length ? r = 1 :  r = 0;
      return r;
    });
  }
}
