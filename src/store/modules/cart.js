//初始化数据
const state = {
    //商品列表
    shop_list: [{
        id: 11,
        name: '鱼香肉丝',
        price: 12,
    }, {
        id: 22,
        name: '宫保鸡丁',
        price: 14
    }, {
        id: 34,
        name: '土豆丝',
        price: 10
    }, {
        id: 47,
        name: '米饭',
        price: 2
    }],

    //添加到购物车的商品（已选商品）
    added:[]
};

//getter 抛出去的数据
const getters = {
    //商品列表
    shoplist:state => state.shop_list,
    //购物车的列表
    cartProducts:state=>{
        return state.added.map(({id,num})=>{ //在actions中只有的id和num的字段
            //在原始数据数据上面进行刷选，这里通过id来匹配
            let product = state.shop_list.find(n=>n.id == id)
            // console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },
    //计算总价
    totalPrice:(state,getters)=>{  //getter中可以调用getter里面的方法
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.price * n.num
        })
        return total;
    },
    //计算总数量
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },
};

//action 异步的操作
const actions = {
    //添加到购物车操作
    addToCart({commit},product){
        commit('add',{  //传递一个add的方法，携带参数id
            id:product.id
        })
    },
    //清除购物车
    clearAllCart({commit}){
        commit('clearAll') //分发一个clearAll事件，不带参数进行
    },
    //删除购物车的指定的商品
    delProduct({commit},product){
        commit('del',product)//commit del的方法
    },
};

//mutation
const mutations = {
    //添加到购物车操作
    add(state,{id}){  //解构id 你可以 测试id 和 {id}的区别        
        let record = state.added.find(n=>n.id == id); 
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
        console.info(record,state.added)
    },
    //清除购物车
    clearAll(state){
        state.added = []
    },
    //删除购物车的指定的商品
    del(state,product){
        state.added.forEach((item,index)=>{
            if(item.id==product.id){
                state.added.splice(index,1)
            }
        })
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};