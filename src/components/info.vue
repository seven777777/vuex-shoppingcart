<template>
    <div>
        <div class="item-wrapper">
            <div class='item'>总数：
                <strong>{{totalNum}}</strong>
            </div>
            <div class='item'>总价：
                <strong>{{totalPrice}}</strong>
            </div>
            <div class="item btn btn-danger">
                <el-button type="danger" @click='clearAllCart'>清空购物车</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'info',
    data() {
        return {
            
        };
    },
    computed:{
        ...mapGetters(['totalPrice','totalNum'])
    },
    methods: {
        ...mapActions(['clearAllCart'])
    },
};
</script>

<style scoped>
.item-wrapper {
    height: 50px;
    line-height: 50px;
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: center;
}

.item {
    flex: 1;
}
</style>