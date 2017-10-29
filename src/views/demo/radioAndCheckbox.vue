<template>
    <div class="radio">
        <p>单选</p>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox">全选</th>
                    <th>序号</th>
                    <th>名称</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in dataList" :key="index" :class="{'hoverClass':itemIndex==index}" @mouseover="itemIndex=index">
                    <td><input type="checkbox"></td>
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td><a href="javascript:void(0);" @click="showShareDialog">分享</a>&nbsp;&nbsp;<a href="javascript:void(0);">删除</a></td>
                </tr>
            </tbody>
        </table>

        <share-dialog isShow.sync="isShowDialog"></share-dialog>

    </div>
    
</template>

<script>
    import shareDialog from './comps/shareDialog'
    export default {
        components: {
            shareDialog
        },
        data() {
            return {
                dataList: [{
                    id: 0,
                    name: 'A'
                }, {
                    id: 1,
                    name: 'B'
                }, {
                    id: 2,
                    name: 'C'
                }, {
                    id: 3,
                    name: 'D'
                }, {
                    id: 4,
                    name: 'E'
                }],
                itemIndex: null, // 用于存储改行的index,是用来是否显示hover的效果
                isShowDialog: false
            }
        },
        methods: {
            showShareDialog() {
                console.log('isShowDialog', isShowDialog);
                this.isShowDialog = !this.isShowDialog;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .radio {
        background: #fff;
        margin: 20px;
        padding: 20px 15px 10px;
        table {
            width: 100%;
            border-collapse: collapse;
            th {
                background: #f2f2f2;
                padding: 6px 0;
            }
            .hoverClass {
                background: #f0f0f0;
            }
            td {
                border-bottom: #f2f2f2 solid 1px;
                padding: 8px 0;
            }
            tbody {
                a {
                    color: #8ed5b5;
                    text-decoration: none;
                }
                a:hover {
                    color: #41B883;
                }
            }
        }
    }
</style>