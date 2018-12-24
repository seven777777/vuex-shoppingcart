<template>
    <div class="cart">

        <h4>已选商品</h4>
        <el-table :data="cartProducts" style="width: 100%">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="num" label="数量"></el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click='delProduct(scope.row)'> 删除 </el-button>
            </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name: 'cart',
    data() {
        return {
            
        };
    },
    computed: {
        ...mapGetters(['cartProducts']) //页面中v-for的数据
    },
    methods: {
        ...mapActions(['delProduct'])
    },
};
</script>

<style scoped>
.cart{
    width:1000px;
    margin: 0 auto;
}
</style>