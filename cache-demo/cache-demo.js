// 闭包隐藏数据，只提供API
function createCache(){
    let data = {};
    return {
        set(key, val){
            data[key] = val;
        },
        get(key){
            return data[key];
        }
    }
}

// 外部无法直接访问data，因为不在合法作用域内
// data.b = 200;

let c = createCache();
c.set('a', 100);
console.log(c.get('a'));    //100