<template>
    <div class="product">

        <h4>商品信息</h4>
        <el-table :data="shoplist" style="width: 100%">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click='addToCart(scope.row)'> 加入购物车 </el-button>
            </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: 'product',
    data() {
        return {
            
        };
    },
    //vuex和组件中使用的shoplist的名称
    computed: {
        ...mapGetters(['shoplist'])
    }, 
    methods: {
        ...mapActions(['addToCart'])
    },
};
</script>

<style scoped>
.product{
    width:1000px;
    margin: 0 auto;
}
</style>